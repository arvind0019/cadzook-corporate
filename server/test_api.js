async function testBackend() {
  console.log('Testing Cadzook Backend API...\n');

  // 1. Health
  const healthRes = await fetch('http://localhost:5000/api/v1/health');
  const healthData = await healthRes.json();
  console.log('✅ Health Check:', healthData);

  // 2. Hubs
  const hubsRes = await fetch('http://localhost:5000/api/v1/hubs');
  const hubsData = await hubsRes.json();
  console.log(`✅ National Hubs: Fetched ${hubsData.data.length} hubs (HQ: ${hubsData.data.find(h => h.isHQ).name})`);

  // 3. Compliance Acts
  const actsRes = await fetch('http://localhost:5000/api/v1/compliance/acts');
  const actsData = await actsRes.json();
  console.log(`✅ Compliance Acts: ${actsData.data.totalActs} acts, Rate: ${actsData.data.complianceRate}`);

  // 4. Create Lead Enquiry
  const enqRes = await fetch('http://localhost:5000/api/v1/enquiries', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      clientName: 'Vikram Singhania',
      companyName: 'Singhania Industrial Infra Ltd.',
      email: 'vikram@singhaniagroup.in',
      phone: '+91 98111 22334',
      serviceType: 'Industrial & Factory Workforce',
      locationHub: 'Delhi',
      headcountEstimate: 120,
      requirementDetails: 'Requirement of 120 assembly line operators and shift supervisors for our plant in Okhla.'
    })
  });
  const enqData = await enqRes.json();
  console.log('✅ Created Enquiry:', enqData.data.referenceNo, '| Status:', enqData.data.status);

  // 5. Quick Consultation
  const consultRes = await fetch('http://localhost:5000/api/v1/enquiries/consultations', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      clientName: 'Meera Kapoor',
      companyName: 'Kapoor Retail & Lifestyle Malls',
      email: 'meera@kapoorlifestyle.in',
      phone: '+91 99887 76655',
      serviceCategory: 'Security Services',
      message: 'Need 40 round-the-clock security personnel for our flagship mall in Bangalore.'
    })
  });
  const consultData = await consultRes.json();
  console.log('✅ Quick Consultation:', consultData.data.referenceNo, '| Service:', consultData.data.serviceType);

  // 6. Request Compliance Audit Pack
  const auditRes = await fetch('http://localhost:5000/api/v1/compliance/audit-pack-request', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      clientName: 'Rahul Verma',
      companyName: 'Verma Healthcare Solutions',
      email: 'rahul.v@vermahealth.org',
      phone: '+91 98765 11223'
    })
  });
  const auditData = await auditRes.json();
  console.log('✅ Audit Pack Requested:', auditData.data.referenceNo, '| Status:', auditData.data.status);

  // 7. Admin Stats
  const statsRes = await fetch('http://localhost:5000/api/v1/admin/stats');
  const statsData = await statsRes.json();
  console.log('✅ Admin Pipeline Stats:', statsData.data);
}

testBackend().catch(console.error);
