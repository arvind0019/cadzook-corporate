import { useState, useEffect } from 'react';
import {
  Database,
  RefreshCw,
  Search,
  Filter,
  CheckCircle2,
  Clock,
  Building2,
  MapPin,
  X,
  Download,
  ShieldCheck,
  TrendingUp,
  FileText
} from 'lucide-react';
import { API_BASE_URL } from '../config/api';

interface EnquiryRecord {
  id: string;
  referenceNo: string;
  clientName: string;
  companyName: string;
  email: string;
  phone: string;
  serviceType: string;
  locationHub?: string;
  headcountEstimate?: number;
  requirementDetails: string;
  source: string;
  status: 'NEW' | 'CONTACTED' | 'ASSESSMENT_SCHEDULED' | 'PROPOSAL_SENT' | 'CONTRACTED' | 'REJECTED';
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

interface DatabaseStats {
  totalLeads: number;
  byStatus: Record<string, number>;
  byService: Record<string, number>;
  byHub: Record<string, number>;
  totalAuditRequests: number;
  lastUpdated: string;
}

interface DatabaseConsoleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DatabaseConsoleModal({ isOpen, onClose }: DatabaseConsoleModalProps) {
  const [activeTab, setActiveTab] = useState<'enquiries' | 'stats' | 'raw_json'>('enquiries');
  const [records, setRecords] = useState<EnquiryRecord[]>([]);
  const [stats, setStats] = useState<DatabaseStats | null>(null);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [selectedRecord, setSelectedRecord] = useState<EnquiryRecord | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    let isMounted = true;
    const loadData = async () => {
      setLoading(true);
      try {
        const [res, statsRes] = await Promise.all([
          fetch(`${API_BASE_URL}/api/v1/admin/enquiries?limit=100`),
          fetch(`${API_BASE_URL}/api/v1/admin/stats`)
        ]);
        const data = await res.json();
        const statsData = await statsRes.json();
        if (isMounted) {
          if (data.success) setRecords(data.data || []);
          if (statsData.success) setStats(statsData.data);
        }
      } catch (err) {
        console.error('Failed to fetch database data:', err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    loadData();

    return () => {
      isMounted = false;
    };
  }, [isOpen]);

  const fetchDatabaseData = async () => {
    setLoading(true);
    try {
      const [res, statsRes] = await Promise.all([
        fetch(`${API_BASE_URL}/api/v1/admin/enquiries?limit=100`),
        fetch(`${API_BASE_URL}/api/v1/admin/stats`)
      ]);
      const data = await res.json();
      const statsData = await statsRes.json();
      if (data.success) setRecords(data.data || []);
      if (statsData.success) setStats(statsData.data);
    } catch (err) {
      console.error('Failed to fetch database data:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (id: string, newStatus: string) => {
    setUpdatingId(id);
    try {
      const res = await fetch(`${API_BASE_URL}/api/v1/admin/enquiries/${id}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });
      const data = await res.json();
      if (data.success) {
        setRecords((prev) =>
          prev.map((item) => (item.id === id ? { ...item, status: newStatus as any } : item))
        );
        if (selectedRecord && selectedRecord.id === id) {
          setSelectedRecord({ ...selectedRecord, status: newStatus as any });
        }
        // Refresh stats
        const statsRes = await fetch(`${API_BASE_URL}/api/v1/admin/stats`);
        const statsData = await statsRes.json();
        if (statsData.success) setStats(statsData.data);
      }
    } catch (err) {
      console.error('Status update failed:', err);
    } finally {
      setUpdatingId(null);
    }
  };

  const exportJSON = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(records, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `cadzook_database_export_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  if (!isOpen) return null;

  const filteredRecords = records.filter((r) => {
    const matchesSearch =
      r.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.referenceNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.serviceType.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === 'ALL' || r.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'NEW':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'CONTACTED':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'ASSESSMENT_SCHEDULED':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'PROPOSAL_SENT':
        return 'bg-indigo-50 text-indigo-700 border-indigo-200';
      case 'CONTRACTED':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200 font-semibold';
      case 'REJECTED':
        return 'bg-rose-50 text-rose-700 border-rose-200';
      default:
        return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-brand-dark/80 backdrop-blur-md animate-fade-in">
      <div className="bg-white w-full max-w-6xl max-h-[92vh] rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden text-slate-800">
        
        {/* Top Header Bar */}
        <div className="px-6 py-4 bg-gradient-to-r from-brand-dark to-slate-900 text-white flex items-center justify-between border-b border-slate-700/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-blue/20 border border-brand-cyan/40 flex items-center justify-center text-brand-cyan">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold tracking-tight text-white">CADZOOK Enterprise Database Console</h2>
                <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Live Storage (JSON Store)
                </span>
              </div>
              <p className="text-xs text-slate-300">Atomic persistent store (`server/data/cadzook_db.json`) &bull; REST API Layer Active</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={fetchDatabaseData}
              disabled={loading}
              title="Refresh Records"
              className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition flex items-center gap-1.5 text-xs font-medium cursor-pointer"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin text-brand-cyan' : ''}`} />
              <span className="hidden sm:inline">Refresh</span>
            </button>
            <button
              onClick={exportJSON}
              title="Export Database to JSON"
              className="p-2 rounded-lg bg-brand-blue/20 hover:bg-brand-blue/30 text-brand-cyan border border-brand-cyan/30 transition flex items-center gap-1.5 text-xs font-medium cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Export JSON</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-800 hover:bg-rose-500/20 text-slate-400 hover:text-rose-300 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Quick Stats Strip */}
        {stats && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 px-6 py-3 bg-slate-50 border-b border-slate-200 text-xs">
            <div className="flex items-center gap-2.5 p-2 rounded-lg bg-white border border-slate-200/80 shadow-xs">
              <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                {stats.totalLeads}
              </div>
              <div>
                <p className="text-slate-400 font-medium text-[10px] uppercase tracking-wider">Total Ingested Leads</p>
                <p className="font-bold text-slate-800">{stats.totalLeads} Records</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-2 rounded-lg bg-white border border-slate-200/80 shadow-xs">
              <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                {stats.byStatus['NEW'] || 0}
              </div>
              <div>
                <p className="text-slate-400 font-medium text-[10px] uppercase tracking-wider">New Actionable</p>
                <p className="font-bold text-slate-800">{stats.byStatus['NEW'] || 0} Open Enquiries</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-2 rounded-lg bg-white border border-slate-200/80 shadow-xs">
              <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
                {stats.totalAuditRequests}
              </div>
              <div>
                <p className="text-slate-400 font-medium text-[10px] uppercase tracking-wider">Audit Dossier Reqs</p>
                <p className="font-bold text-slate-800">{stats.totalAuditRequests} Requests</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-2 rounded-lg bg-white border border-slate-200/80 shadow-xs">
              <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                7
              </div>
              <div>
                <p className="text-slate-400 font-medium text-[10px] uppercase tracking-wider">PAN India Hubs</p>
                <p className="font-bold text-slate-800">Noida HQ + 6 Cities</p>
              </div>
            </div>
          </div>
        )}

        {/* View Tabs & Filter Bar */}
        <div className="px-6 py-3 bg-white border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
            <button
              onClick={() => setActiveTab('enquiries')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                activeTab === 'enquiries' ? 'bg-white text-brand-dark shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Leads & Requirements ({filteredRecords.length})
            </button>
            <button
              onClick={() => setActiveTab('stats')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                activeTab === 'stats' ? 'bg-white text-brand-dark shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Pipeline Analytics
            </button>
            <button
              onClick={() => setActiveTab('raw_json')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                activeTab === 'raw_json' ? 'bg-white text-brand-dark shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Raw Schema & JSON
            </button>
          </div>

          {activeTab === 'enquiries' && (
            <div className="flex items-center gap-2 flex-grow sm:flex-grow-0">
              {/* Search */}
              <div className="relative flex-grow sm:w-60">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search client, company, ref..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg border border-slate-200 focus:outline-none focus:border-brand-blue"
                />
              </div>

              {/* Status Filter */}
              <div className="flex items-center gap-1.5">
                <Filter className="w-3.5 h-3.5 text-slate-400" />
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="text-xs py-1.5 px-2 rounded-lg border border-slate-200 bg-white font-medium text-slate-700 focus:outline-none"
                >
                  <option value="ALL">All Statuses</option>
                  <option value="NEW">NEW</option>
                  <option value="CONTACTED">CONTACTED</option>
                  <option value="ASSESSMENT_SCHEDULED">ASSESSMENT</option>
                  <option value="PROPOSAL_SENT">PROPOSAL SENT</option>
                  <option value="CONTRACTED">CONTRACTED</option>
                  <option value="REJECTED">REJECTED</option>
                </select>
              </div>
            </div>
          )}
        </div>

        {/* Modal Main Content Body */}
        <div className="flex-1 overflow-y-auto p-6 bg-slate-50/50">
          {activeTab === 'enquiries' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column: Table / Cards */}
              <div className="lg:col-span-2 space-y-3">
                {filteredRecords.length === 0 ? (
                  <div className="text-center py-16 bg-white rounded-xl border border-slate-200 text-slate-400">
                    <Database className="w-10 h-10 mx-auto mb-2 opacity-40 text-brand-blue" />
                    <p className="text-sm font-semibold">No records match your query.</p>
                    <p className="text-xs text-slate-400 mt-1">Try resetting the search or status filter.</p>
                  </div>
                ) : (
                  filteredRecords.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => setSelectedRecord(item)}
                      className={`p-4 rounded-xl border transition cursor-pointer bg-white ${
                        selectedRecord?.id === item.id
                          ? 'border-brand-blue ring-2 ring-brand-blue/10 shadow-md'
                          : 'border-slate-200/90 hover:border-slate-300 hover:shadow-xs'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold text-brand-blue px-2 py-0.5 bg-blue-50 border border-blue-200/60 rounded">
                            {item.referenceNo}
                          </span>
                          <span className={`text-[11px] px-2 py-0.5 rounded-full border ${getStatusBadge(item.status)}`}>
                            {item.status}
                          </span>
                        </div>

                        <span className="text-[11px] text-slate-400 flex items-center gap-1 font-mono">
                          <Clock className="w-3 h-3" />
                          {new Date(item.createdAt).toLocaleDateString('en-IN', {
                            day: '2-digit',
                            month: 'short',
                            year: 'numeric',
                          })}
                        </span>
                      </div>

                      <div className="mt-2.5 flex items-start justify-between">
                        <div>
                          <h4 className="text-sm font-bold text-slate-900">{item.clientName}</h4>
                          <p className="text-xs text-slate-500 font-medium flex items-center gap-1 mt-0.5">
                            <Building2 className="w-3 h-3 text-slate-400" />
                            {item.companyName}
                          </p>
                        </div>
                        <div className="text-right">
                          <span className="text-xs font-medium text-slate-700 bg-slate-100 px-2 py-1 rounded inline-block">
                            {item.serviceType}
                          </span>
                          <p className="text-[11px] text-slate-400 flex items-center justify-end gap-1 mt-1">
                            <MapPin className="w-3 h-3 text-brand-cyan" />
                            {item.locationHub || 'Noida'}
                          </p>
                        </div>
                      </div>

                      <p className="mt-2 text-xs text-slate-600 line-clamp-2 bg-slate-50 p-2 rounded border border-slate-100 font-sans">
                        "{item.requirementDetails}"
                      </p>
                    </div>
                  ))
                )}
              </div>

              {/* Right Column: Selected Record Details & Lifecycle Editor */}
              <div className="lg:col-span-1">
                {selectedRecord ? (
                  <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs sticky top-0 space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <div>
                        <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Record Details</span>
                        <h3 className="font-mono text-base font-bold text-brand-blue">{selectedRecord.referenceNo}</h3>
                      </div>
                      <span className={`text-xs px-2.5 py-1 rounded-full border ${getStatusBadge(selectedRecord.status)}`}>
                        {selectedRecord.status}
                      </span>
                    </div>

                    {/* Client Info */}
                    <div className="space-y-2 text-xs">
                      <div>
                        <span className="text-slate-400 text-[11px]">Client Name:</span>
                        <p className="font-bold text-slate-900 text-sm">{selectedRecord.clientName}</p>
                      </div>
                      <div>
                        <span className="text-slate-400 text-[11px]">Company / Organization:</span>
                        <p className="font-semibold text-slate-800">{selectedRecord.companyName}</p>
                      </div>
                      <div>
                        <span className="text-slate-400 text-[11px]">Official Email:</span>
                        <p className="font-mono text-slate-700">{selectedRecord.email}</p>
                      </div>
                      <div>
                        <span className="text-slate-400 text-[11px]">Direct Phone:</span>
                        <p className="font-mono text-slate-700">{selectedRecord.phone}</p>
                      </div>
                      <div>
                        <span className="text-slate-400 text-[11px]">Service & Location Hub:</span>
                        <p className="font-medium text-slate-800">{selectedRecord.serviceType} &bull; {selectedRecord.locationHub || 'Noida'}</p>
                      </div>
                      {selectedRecord.headcountEstimate ? (
                        <div>
                          <span className="text-slate-400 text-[11px]">Estimated Headcount:</span>
                          <p className="font-bold text-brand-blue">{selectedRecord.headcountEstimate} Personnel</p>
                        </div>
                      ) : null}
                    </div>

                    {/* Requirement Notes */}
                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                      <span className="text-[10px] font-bold text-slate-400 uppercase">Requirement Specification</span>
                      <p className="text-xs text-slate-700 mt-1 whitespace-pre-line leading-relaxed">{selectedRecord.requirementDetails}</p>
                    </div>

                    {/* Lifecycle Status Manager */}
                    <div className="border-t border-slate-100 pt-3">
                      <label className="text-[11px] font-bold text-slate-700 block mb-1.5 flex items-center gap-1.5">
                        <TrendingUp className="w-3.5 h-3.5 text-brand-blue" />
                        Update Lifecycle Status
                      </label>
                      <div className="grid grid-cols-2 gap-1.5">
                        {(['NEW', 'CONTACTED', 'ASSESSMENT_SCHEDULED', 'PROPOSAL_SENT', 'CONTRACTED', 'REJECTED'] as const).map((st) => (
                          <button
                            key={st}
                            disabled={updatingId === selectedRecord.id}
                            onClick={() => handleStatusChange(selectedRecord.id, st)}
                            className={`px-2 py-1.5 rounded-lg text-[10px] font-bold uppercase transition border cursor-pointer ${
                              selectedRecord.status === st
                                ? 'bg-brand-dark text-white border-brand-dark shadow-xs'
                                : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border-slate-200'
                            }`}
                          >
                            {st.replace('_', ' ')}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white rounded-xl border border-dashed border-slate-300 p-8 text-center text-slate-400">
                    <FileText className="w-8 h-8 mx-auto mb-2 opacity-50" />
                    <p className="text-xs font-medium">Select any record from the list to view full specifications & update pipeline status.</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Stats Analytics Tab */}
          {activeTab === 'stats' && stats && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Status Breakdown */}
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
                  <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                    Lead Status Pipeline
                  </h4>
                  <div className="space-y-2.5">
                    {Object.entries(stats.byStatus).map(([st, count]) => (
                      <div key={st} className="flex items-center justify-between text-xs">
                        <span className="text-slate-600 font-medium">{st}</span>
                        <div className="flex items-center gap-2">
                          <div className="w-24 h-2 bg-slate-100 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-brand-blue rounded-full"
                              style={{ width: `${(count / stats.totalLeads) * 100}%` }}
                            ></div>
                          </div>
                          <span className="font-mono font-bold text-slate-900 w-6 text-right">{count}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Service Demand */}
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
                  <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-emerald-600" />
                    Demand by Service Vertical
                  </h4>
                  <div className="space-y-2.5">
                    {Object.entries(stats.byService).map(([srv, count]) => (
                      <div key={srv} className="flex items-center justify-between text-xs">
                        <span className="text-slate-600 font-medium truncate max-w-[160px]" title={srv}>
                          {srv}
                        </span>
                        <span className="font-mono font-bold text-slate-900 px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded border border-emerald-100">
                          {count}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hub Ingestion */}
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
                  <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-purple-600" />
                    Geographic Ingestion by Hub
                  </h4>
                  <div className="space-y-2.5">
                    {Object.entries(stats.byHub).map(([hub, count]) => (
                      <div key={hub} className="flex items-center justify-between text-xs">
                        <span className="text-slate-600 font-medium">{hub}</span>
                        <span className="font-mono font-bold text-slate-900 px-2 py-0.5 bg-purple-50 text-purple-700 rounded border border-purple-100">
                          {count}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Raw JSON & Schema Tab */}
          {activeTab === 'raw_json' && (
            <div className="bg-slate-900 text-slate-100 p-5 rounded-xl font-mono text-xs overflow-x-auto shadow-inner border border-slate-800">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-slate-400">
                <span>File: server/data/cadzook_db.json</span>
                <span>Version: 1.0.0 &bull; Atomic Storage</span>
              </div>
              <pre className="text-emerald-400 leading-relaxed">
                {JSON.stringify({ totalRecords: records.length, enquiries: records, stats }, null, 2)}
              </pre>
            </div>
          )}
        </div>

        {/* Modal Footer Bar */}
        <div className="px-6 py-3 bg-white border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>100% Statutory Compliance &bull; Audit Trail Logged</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-brand-dark text-white hover:bg-slate-800 font-semibold transition cursor-pointer"
          >
            Close Console
          </button>
        </div>

      </div>
    </div>
  );
}
