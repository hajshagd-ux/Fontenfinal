/**
 * AutoLuxe Motors - Admin Dashboard Logic
 * Displays and Manages all 5 Relations from car_system_db:
 * 1. sale
 * 2. car
 * 3. customer
 * 4. employee
 * 5. branch
 */

const DEFAULT_BRANCHES = [
  { branch_id: "B001", branch_name: "สาขารัชดา", branch_address: "123 ถ.รัชดาภิเษก กทม.", branch_open_hour: "09:00-18:00" },
  { branch_id: "B002", branch_name: "สาขาบางนา", branch_address: "88 ถ.บางนา-ตราด กทม.", branch_open_hour: "09:00-18:00" },
  { branch_id: "B003", branch_name: "สาขาเชียงใหม่", branch_address: "99 ถ.นิมมานเหมินท์ เชียงใหม่", branch_open_hour: "09:00-17:30" },
  { branch_id: "B004", branch_name: "สาขาหาดใหญ่", branch_address: "45 ถ.เพชรเกษม สงขลา", branch_open_hour: "10:00-18:00" },
  { branch_id: "B005", branch_name: "สาขานครราชสีมา", branch_address: "77 ถ.มิตรภาพ โคราช", branch_open_hour: "09:30-18:30" }
];

const DEFAULT_EMPLOYEES = [
  { emp_id: "E001", emp_name: "ปรีชา สายลม", emp_position: "ผู้จัดการ", emp_salary: 50000, emp_phone: "0811111111", emp_email: "preecha@email.com", branch_id: "B001" },
  { emp_id: "E002", emp_name: "วิภา ดวงดี", emp_position: "พนักงานขาย", emp_salary: 30000, emp_phone: "0822222222", emp_email: "wipa@email.com", branch_id: "B001" },
  { emp_id: "E003", emp_name: "มานพ เกิดผล", emp_position: "พนักงานขาย", emp_salary: 32000, emp_phone: "0833333333", emp_email: "manop@email.com", branch_id: "B002" },
  { emp_id: "E004", emp_name: "จารุวรรณ พูนสุข", emp_position: "พนักงานขาย", emp_salary: 31000, emp_phone: "0844444444", emp_email: "jaruwan@email.com", branch_id: "B002" },
  { emp_id: "E005", emp_name: "สุพจน์ แสนดี", emp_position: "ผู้จัดการ", emp_salary: 52000, emp_phone: "0855555555", emp_email: "supot@email.com", branch_id: "B002" },
  { emp_id: "E006", emp_name: "กัลยา ใจเพชร", emp_position: "พนักงานขาย", emp_salary: 29500, emp_phone: "0866666666", emp_email: "kanlaya@email.com", branch_id: "B003" },
  { emp_id: "E007", emp_name: "ธวัชชัย แข็งแรง", emp_position: "พนักงานขาย", emp_salary: 30500, emp_phone: "0877777777", emp_email: "thawatchai@email.com", branch_id: "B003" },
  { emp_id: "E008", emp_name: "วิทยา สุขสันต์", emp_position: "ผู้จัดการ", emp_salary: 51000, emp_phone: "0888888888", emp_email: "witaya@email.com", branch_id: "B003" },
  { emp_id: "E009", emp_name: "สราวุธ เกิดดี", emp_position: "พนักงานขาย", emp_salary: 29000, emp_phone: "0899999999", emp_email: "sarawut@email.com", branch_id: "B004" },
  { emp_id: "E010", emp_name: "รัตนา งามวงศ์", emp_position: "พนักงานขาย", emp_salary: 30000, emp_phone: "0801234567", emp_email: "ratana@email.com", branch_id: "B004" },
  { emp_id: "E011", emp_name: "อนงค์ สวยสด", emp_position: "พนักงานขาย", emp_salary: 31500, emp_phone: "0812345670", emp_email: "anong@email.com", branch_id: "B005" },
  { emp_id: "E012", emp_name: "วิทวัส ธรรมดี", emp_position: "ผู้จัดการ", emp_salary: 55000, emp_phone: "0823456789", emp_email: "witawat@email.com", branch_id: "B005" }
];

const DEFAULT_CUSTOMERS = [
  { cust_id: "CU001", cust_name: "สมชาย ใจดี", cust_email: "somchai@email.com", cust_phone: "0812345678", cust_dob: "21/3/1985", cust_occupation: "วิศวกร", cust_address: "123 ถ.สุขุมวิท กทม.", cust_register_date: "10/1/2024" },
  { cust_id: "CU002", cust_name: "สมทรง มีศรี", cust_email: "somsong@email.com", cust_phone: "0898765432", cust_dob: "11/7/1990", cust_occupation: "พนักงานบัญชี", cust_address: "88 ถ.รามอินทรา กทม.", cust_register_date: "5/11/2023" },
  { cust_id: "CU003", cust_name: "วิชัย ตั้งแต่ดี", cust_email: "wichan@email.com", cust_phone: "0863339999", cust_dob: "5/12/1978", cust_occupation: "ข้าราชการ", cust_address: "9 ถ.พหลโยธิน ลพบุรี", cust_register_date: "15/2/2024" },
  { cust_id: "CU004", cust_name: "อรุณา แสงทอง", cust_email: "ornuma@email.com", cust_phone: "0801234567", cust_dob: "30/4/1995", cust_occupation: "แพทย์", cust_address: "55 ถ.ศรีนครินทร์ สมุทรปราการ", cust_register_date: "1/9/2023" },
  { cust_id: "CU005", cust_name: "ธีระวัฒน์ อินทรศรี", cust_email: "teerawat@email.com", cust_phone: "0912223334", cust_dob: "25/11/1980", cust_occupation: "ทนายความ", cust_address: "102 ถ.เจริญกรุง กทม.", cust_register_date: "20/3/2024" },
  { cust_id: "CU006", cust_name: "ศิริพร มีสุข", cust_email: "siriporn@email.com", cust_phone: "0845556789", cust_dob: "14/2/1989", cust_occupation: "พนักงานขาย", cust_address: "67 ถ.ประชาอุทิศ ขอนแก่น", cust_register_date: "18/8/2023" },
  { cust_id: "CU007", cust_name: "ปกรณ์ ศักดิ์ศรี", cust_email: "pakorn@email.com", cust_phone: "0856781234", cust_dob: "6/6/1986", cust_occupation: "นักธุรกิจ", cust_address: "90 ถ.มิตรภาพ นครราชสีมา", cust_register_date: "9/4/2024" },
  { cust_id: "CU008", cust_name: "นภัสวรรณ สวยงาม", cust_email: "napaswan@email.com", cust_phone: "0834445566", cust_dob: "19/9/1993", cust_occupation: "ดีไซเนอร์", cust_address: "111 ถ.ลาดพร้าว กทม.", cust_register_date: "25/1/2024" },
  { cust_id: "CU009", cust_name: "ณัฐพงษ์ เก่งกล้า", cust_email: "nattapong@email.com", cust_phone: "0822223331", cust_dob: "5/5/1982", cust_occupation: "วิศวกรโยธา", cust_address: "32 ถ.รัตนาธิเบศร์ นนทบุรี", cust_register_date: "10/10/2023" },
  { cust_id: "CU010", cust_name: "วรรณา ประเสริฐสุข", cust_email: "wanna@email.com", cust_phone: "0817654321", cust_dob: "1/1/1991", cust_occupation: "ครู", cust_address: "4 ถ.ประชาราษฎร์ พิษณุโลก", cust_register_date: "1/6/2024" },
  { cust_id: "CU011", cust_name: "กิตติศักดิ์ มีโชค", cust_email: "kittisak@email.com", cust_phone: "0819991112", cust_dob: "8/8/1988", cust_occupation: "เจ้าหน้าที่รัฐ", cust_address: "76 ถ.ท่าพระ กทม.", cust_register_date: "22/5/2024" },
  { cust_id: "CU012", cust_name: "สุนิสา แก่นแก้ว", cust_email: "sunisa@email.com", cust_phone: "0820001111", cust_dob: "20/10/1996", cust_occupation: "พยาบาล", cust_address: "25 ถ.ศรีราชา ชลบุรี", cust_register_date: "12/12/2023" }
];

document.addEventListener('DOMContentLoaded', () => {
  loadAdminStats();
  renderSalesTable();
  renderCarsTable();
  renderCustomersTable();
  renderEmployeesTable();
  renderBranchesTable();

  // Tab switching
  document.querySelectorAll('.admin-nav-item').forEach(item => {
    item.addEventListener('click', () => {
      document.querySelectorAll('.admin-nav-item').forEach(i => i.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.style.display = 'none');

      item.classList.add('active');
      const target = item.dataset.tab;
      document.getElementById(target).style.display = 'block';
    });
  });
});

function formatMoney(num) {
  return Number(num).toLocaleString('th-TH') + ' ฿';
}

function loadAdminStats() {
  const cars = JSON.parse(localStorage.getItem('car_system_cars')) || [];
  const sales = JSON.parse(localStorage.getItem('car_system_sales')) || [];

  const totalCars = cars.length;
  const totalSales = sales.length;
  const totalRevenue = sales.reduce((sum, s) => sum + (s.sale_price_sold || 0), 0);

  document.getElementById('stat-total-cars').innerText = totalCars;
  document.getElementById('stat-total-sales').innerText = totalSales;
  document.getElementById('stat-total-branches').innerText = DEFAULT_BRANCHES.length;
  document.getElementById('stat-total-revenue').innerText = formatMoney(totalRevenue);
}

// 1. Render Sales Table (Relation: sale)
function renderSalesTable() {
  const tbody = document.getElementById('sales-tbody');
  if (!tbody) return;

  const sales = JSON.parse(localStorage.getItem('car_system_sales')) || [];

  tbody.innerHTML = sales.map(s => `
    <tr>
      <td><strong style="color: var(--accent-cyan); font-family: 'Outfit';">${s.sale_id}</strong></td>
      <td>${s.sale_date}</td>
      <td><strong style="color: var(--accent-gold); font-family: 'Outfit';">${formatMoney(s.sale_price_sold)}</strong></td>
      <td><span style="background: rgba(255,255,255,0.06); padding: 0.2rem 0.5rem; border-radius: 4px;">${s.sale_payment_method}</span></td>
      <td><span style="color: #60a5fa;">${s.emp_id}</span></td>
      <td><span style="color: #34d399;">${s.cust_id}</span></td>
      <td><strong style="color: #fff;">${s.car_id}</strong></td>
    </tr>
  `).join('');
}

// 2. Render Cars Table (Relation: car)
function renderCarsTable() {
  const tbody = document.getElementById('cars-tbody');
  if (!tbody) return;

  const cars = JSON.parse(localStorage.getItem('car_system_cars')) || [];

  tbody.innerHTML = cars.map(c => `
    <tr>
      <td><strong style="color: var(--accent-cyan); font-family: 'Outfit';">${c.car_id}</strong></td>
      <td><strong style="color: #fff;">${c.car_brand}</strong></td>
      <td><strong style="color: var(--accent-gold); font-family: 'Outfit';">${formatMoney(c.car_price)}</strong></td>
      <td>${c.car_color}</td>
      <td>${c.car_engine_size}</td>
      <td>${c.car_fuel_type}</td>
      <td>${c.car_year}</td>
    </tr>
  `).join('');
}

// 3. Render Customers Table (Relation: customer)
function renderCustomersTable() {
  const tbody = document.getElementById('customers-tbody');
  if (!tbody) return;

  tbody.innerHTML = DEFAULT_CUSTOMERS.map(cu => `
    <tr>
      <td><strong style="color: #34d399; font-family: 'Outfit';">${cu.cust_id}</strong></td>
      <td><strong style="color: #fff;">${cu.cust_name}</strong></td>
      <td>${cu.cust_email}</td>
      <td>${cu.cust_phone}</td>
      <td>${cu.cust_dob}</td>
      <td>${cu.cust_occupation}</td>
      <td>${cu.cust_address}</td>
      <td>${cu.cust_register_date}</td>
    </tr>
  `).join('');
}

// 4. Render Employees Table (Relation: employee)
function renderEmployeesTable() {
  const tbody = document.getElementById('employees-tbody');
  if (!tbody) return;

  tbody.innerHTML = DEFAULT_EMPLOYEES.map(e => `
    <tr>
      <td><strong style="color: #60a5fa; font-family: 'Outfit';">${e.emp_id}</strong></td>
      <td><strong style="color: #fff;">${e.emp_name}</strong></td>
      <td>${e.emp_position}</td>
      <td>${formatMoney(e.emp_salary)}</td>
      <td>${e.emp_phone}</td>
      <td>${e.emp_email}</td>
      <td><span style="background: rgba(245,158,11,0.2); color: #fbbf24; padding: 0.2rem 0.5rem; border-radius: 4px;">${e.branch_id}</span></td>
    </tr>
  `).join('');
}

// 5. Render Branches Table (Relation: branch)
function renderBranchesTable() {
  const tbody = document.getElementById('branches-tbody');
  if (!tbody) return;

  tbody.innerHTML = DEFAULT_BRANCHES.map(b => `
    <tr>
      <td><strong style="color: var(--accent-gold); font-family: 'Outfit';">${b.branch_id}</strong></td>
      <td><strong style="color: #fff;">${b.branch_name}</strong></td>
      <td>${b.branch_address}</td>
      <td>${b.branch_open_hour}</td>
    </tr>
  `).join('');
}

// Reset Demo Data
function resetDemoData() {
  if (!confirm('คุณต้องการรีเซ็ตข้อมูลทั้งหมดกลับเป็นค่าเริ่มต้นตามตารางข้อสอบ ใช่หรือไม่?')) return;
  localStorage.removeItem('car_system_cars');
  localStorage.removeItem('car_system_sales');
  location.reload();
}
