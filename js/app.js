/**
 * AutoLuxe Motors - Main Frontend Application Logic
 * สอดคล้องกับโครงสร้างฐานข้อมูล car_system_db (Relation: car, customer, branch, employee, sale)
 */

// 1. Initial Cars Data (ตรงตามตาราง car ในข้อสอบ)
const DEFAULT_CARS = [
  {
    car_id: "C001",
    car_brand: "Toyota",
    model: "Toyota Corolla Altis 1.5",
    car_price: 750000,
    car_color: "ขาว",
    car_engine_size: "1.5L",
    car_fuel_type: "เบนซิน",
    car_year: 2021,
    status: "available",
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&auto=format&fit=crop&q=80",
    description: "รถเก๋งยอดนิยม สภาพเดิมโรงงาน เชื้อเพลิงเบนซิน 1.5L ประหยัดน้ำมัน สีขาวมุกสวยงามพร้อมใช้งาน"
  },
  {
    car_id: "C002",
    car_brand: "Honda",
    model: "Honda Civic 1.8 i-VTEC",
    car_price: 820000,
    car_color: "ดำ",
    car_engine_size: "1.8L",
    car_fuel_type: "เบนซิน",
    car_year: 2022,
    status: "available",
    image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800&auto=format&fit=crop&q=80",
    description: "ซีดานสปอร์ต สีดำพรีเมียม เครื่องยนต์ 1.8L ขับสนุก อัตราเร่งดีเยี่ยม ออปชันครบครัน"
  },
  {
    car_id: "C003",
    car_brand: "BMW",
    model: "BMW 3 Series 2.0 TwinPower",
    car_price: 2500000,
    car_color: "เทา",
    car_engine_size: "2.0L",
    car_fuel_type: "เบนซิน",
    car_year: 2023,
    status: "available",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&auto=format&fit=crop&q=80",
    description: "ยนตรกรรมหรูระดับผู้บริหาร เครื่องยนต์ 2.0L TwinPower Turbo สีเทาสปอร์ต สภาพป้ายแดงไมล์น้อย"
  },
  {
    car_id: "C004",
    car_brand: "Nissan",
    model: "Nissan Almera 1.2 Turbo",
    car_price: 700000,
    car_color: "แดง",
    car_engine_size: "1.2L",
    car_fuel_type: "เบนซิน",
    car_year: 2020,
    status: "available",
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&auto=format&fit=crop&q=80",
    description: "อีโคคาร์ยอดนิยม สีแดงโดดเด่น เครื่องยนต์ 1.2L ประหยัดน้ำมันสูงสุด คล่องตัวในเมือง"
  },
  {
    car_id: "C005",
    car_brand: "Mazda",
    model: "Mazda 3 2.0 SP Skyactiv",
    car_price: 880000,
    car_color: "น้ำเงิน",
    car_engine_size: "2.0L",
    car_fuel_type: "เบนซิน",
    car_year: 2021,
    status: "available",
    image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?w=800&auto=format&fit=crop&q=80",
    description: "ดีไซน์ KODO อันเป็นเอกลักษณ์ สีน้ำเงินเข้ม พรีเมียมสปอร์ต ช่วงล่างหนึบ มั่นใจทุกโค้ง"
  },
  {
    car_id: "C006",
    car_brand: "MG",
    model: "MG 5 1.5 X Sunroof",
    car_price: 770000,
    car_color: "ขาว",
    car_engine_size: "1.5L",
    car_fuel_type: "เบนซิน",
    car_year: 2022,
    status: "available",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&auto=format&fit=crop&q=80",
    description: "คูเป้ซีดานสไตล์สปอร์ต สีขาว หลังคาซันรูฟ หน้าจอสัมผัสขนาดใหญ่ ดีไซน์ทันสมัย"
  },
  {
    car_id: "C007",
    car_brand: "Tesla",
    model: "Tesla Model 3 Dual Motor AWD",
    car_price: 3200000,
    car_color: "ดำ",
    car_engine_size: "ไฟฟ้า",
    car_fuel_type: "ไฟฟ้า",
    car_year: 2023,
    status: "available",
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&auto=format&fit=crop&q=80",
    description: "รถยนต์ไฟฟ้า 100% สมรรถนะสูง อัตราเร่งเหนือชั้น ระบบ Autopilot สีดำล้วน เทคโนโลยีแห่งอนาคต"
  },
  {
    car_id: "C008",
    car_brand: "Ford",
    model: "Ford Ranger Wildtrak 2.0L Bi-Turbo",
    car_price: 1000000,
    car_color: "ส้ม",
    car_engine_size: "2.0L",
    car_fuel_type: "ดีเซล",
    car_year: 2022,
    status: "available",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&auto=format&fit=crop&q=80",
    description: "กระบะและออฟโรดพันธุ์แกร่ง สีส้ม Saber ขุมพลังดีเซล Bi-Turbo ลุยได้ทุกอุปสรรค"
  },
  {
    car_id: "C009",
    car_brand: "Isuzu",
    model: "Isuzu D-Max Hi-Lander 1.9 Ddi",
    car_price: 950000,
    car_color: "บรอนซ์",
    car_engine_size: "1.9L",
    car_fuel_type: "ดีเซล",
    car_year: 2021,
    status: "available",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&auto=format&fit=crop&q=80",
    description: "ปิกอัพยอดนิยม พลังบลูเพาเวอร์ 1.9L ทนทาน ประหยัดน้ำมัน สีบรอนซ์เงินดูแลรักษาง่าย"
  },
  {
    car_id: "C010",
    car_brand: "Suzuki",
    model: "Suzuki Swift 1.2 Dualjet",
    car_price: 690000,
    car_color: "เหลือง",
    car_engine_size: "1.2L",
    car_fuel_type: "เบนซิน",
    car_year: 2020,
    status: "available",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&auto=format&fit=crop&q=80",
    description: "สปอร์ตแฮทช์แบ็ก สีเหลืองสดใส คล่องตัว ประหยัดน้ำมัน จอดง่าย แต่งสวย"
  },
  {
    car_id: "C011",
    car_brand: "Chevrolet",
    model: "Chevrolet Colorado High Country 1.6",
    car_price: 890000,
    car_color: "น้ำเงินเข้ม",
    car_engine_size: "1.6L",
    car_fuel_type: "เบนซิน",
    car_year: 2021,
    status: "available",
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&auto=format&fit=crop&q=80",
    description: "สายพันธุ์อเมริกันแกร่ง สีน้ำเงินเข้ม ช่วงล่างแน่น ห้องโดยสารกว้างขวาง"
  },
  {
    car_id: "C012",
    car_brand: "Volvo",
    model: "Volvo XC60 Recharge T8 AWD",
    car_price: 2800000,
    car_color: "เงิน",
    car_engine_size: "2.0L",
    car_fuel_type: "ไฮบริด",
    car_year: 2023,
    status: "available",
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&auto=format&fit=crop&q=80",
    description: "เอสยูวีพรีเมียม ขุมพลัง Plug-in Hybrid มาตรฐานความปลอดภัยระดับโลก สีเงินหรูหรา"
  }
];

// 2. Initial Branches Data (ตรงตามตาราง branch ในข้อสอบ)
const DEFAULT_BRANCHES = [
  { branch_id: "B001", branch_name: "สาขารัชดา", branch_address: "123 ถ.รัชดาภิเษก กทม.", branch_open_hour: "09:00-18:00" },
  { branch_id: "B002", branch_name: "สาขาบางนา", branch_address: "88 ถ.บางนา-ตราด กทม.", branch_open_hour: "09:00-18:00" },
  { branch_id: "B003", branch_name: "สาขาเชียงใหม่", branch_address: "99 ถ.นิมมานเหมินท์ เชียงใหม่", branch_open_hour: "09:00-17:30" },
  { branch_id: "B004", branch_name: "สาขาหาดใหญ่", branch_address: "45 ถ.เพชรเกษม สงขลา", branch_open_hour: "10:00-18:00" },
  { branch_id: "B005", branch_name: "สาขานครราชสีมา", branch_address: "77 ถ.มิตรภาพ โคราช", branch_open_hour: "09:30-18:30" }
];

// LocalStorage helpers
function getCars() {
  const data = localStorage.getItem('car_system_cars');
  if (!data) {
    localStorage.setItem('car_system_cars', JSON.stringify(DEFAULT_CARS));
    return DEFAULT_CARS;
  }
  return JSON.parse(data);
}

function saveCars(cars) {
  localStorage.setItem('car_system_cars', JSON.stringify(cars));
}

function getSales() {
  const data = localStorage.getItem('car_system_sales');
  if (!data) {
    // Initial 12 sales from exam sheet
    const initialSales = [
      { sale_id: "S001", sale_date: "15/1/2024", sale_price_sold: 740000, sale_payment_method: "เงินสด", emp_id: "E002", cust_id: "CU001", car_id: "C001" },
      { sale_id: "S002", sale_date: "20/2/2024", sale_price_sold: 800000, sale_payment_method: "ผ่อน", emp_id: "E003", cust_id: "CU002", car_id: "C002" },
      { sale_id: "S003", sale_date: "5/3/2024", sale_price_sold: 2450000, sale_payment_method: "โอน", emp_id: "E004", cust_id: "CU003", car_id: "C003" },
      { sale_id: "S004", sale_date: "10/4/2024", sale_price_sold: 680000, sale_payment_method: "เงินสด", emp_id: "E006", cust_id: "CU004", car_id: "C004" },
      { sale_id: "S005", sale_date: "1/5/2024", sale_price_sold: 860000, sale_payment_method: "ผ่อน", emp_id: "E007", cust_id: "CU005", car_id: "C005" },
      { sale_id: "S006", sale_date: "15/5/2024", sale_price_sold: 750000, sale_payment_method: "โอน", emp_id: "E009", cust_id: "CU006", car_id: "C006" },
      { sale_id: "S007", sale_date: "1/6/2024", sale_price_sold: 3100000, sale_payment_method: "เงินสด", emp_id: "E011", cust_id: "CU007", car_id: "C007" },
      { sale_id: "S008", sale_date: "10/6/2024", sale_price_sold: 980000, sale_payment_method: "เงินสด", emp_id: "E012", cust_id: "CU008", car_id: "C008" },
      { sale_id: "S009", sale_date: "11/6/2024", sale_price_sold: 940000, sale_payment_method: "ผ่อน", emp_id: "E010", cust_id: "CU009", car_id: "C009" },
      { sale_id: "S010", sale_date: "15/6/2024", sale_price_sold: 670000, sale_payment_method: "โอน", emp_id: "E003", cust_id: "CU010", car_id: "C010" },
      { sale_id: "S011", sale_date: "18/6/2024", sale_price_sold: 870000, sale_payment_method: "เงินสด", emp_id: "E002", cust_id: "CU011", car_id: "C011" },
      { sale_id: "S012", sale_date: "20/6/2024", sale_price_sold: 2700000, sale_payment_method: "โอน", emp_id: "E004", cust_id: "CU012", car_id: "C012" }
    ];
    localStorage.setItem('car_system_sales', JSON.stringify(initialSales));
    return initialSales;
  }
  return JSON.parse(data);
}

function saveSales(sales) {
  localStorage.setItem('car_system_sales', JSON.stringify(sales));
}

// Format Currency
function formatMoney(num) {
  return Number(num).toLocaleString('th-TH') + ' ฿';
}

let activeFuelType = 'all';
let currentSelectedCar = null;

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  getCars();
  getSales();
  renderCars();
  populateLoanCarSelect();
  calculateLoan();

  // Search & Filter event listeners
  document.getElementById('search-input')?.addEventListener('input', renderCars);
  document.getElementById('filter-brand')?.addEventListener('change', renderCars);
  document.getElementById('filter-price')?.addEventListener('change', renderCars);
  document.getElementById('sort-select')?.addEventListener('change', renderCars);

  // Fuel Type Chips
  document.querySelectorAll('.chip-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.chip-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFuelType = btn.dataset.fuel;
      renderCars();
    });
  });

  // Slip Upload Preview
  const slipInput = document.getElementById('slip-input');
  if (slipInput) slipInput.addEventListener('change', handleSlipUpload);

  // Modal Backdrop click to close
  document.querySelectorAll('.modal-backdrop').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  });
});

// Render Cars into Grid
function renderCars() {
  const container = document.getElementById('cars-container');
  if (!container) return;

  const keyword = document.getElementById('search-input')?.value.toLowerCase().trim() || '';
  const brand = document.getElementById('filter-brand')?.value || 'all';
  const priceRange = document.getElementById('filter-price')?.value || 'all';
  const sortBy = document.getElementById('sort-select')?.value || 'recommended';

  let cars = getCars();

  // Keyword filter
  if (keyword) {
    cars = cars.filter(c =>
      c.car_id.toLowerCase().includes(keyword) ||
      c.car_brand.toLowerCase().includes(keyword) ||
      c.model.toLowerCase().includes(keyword) ||
      c.car_color.toLowerCase().includes(keyword) ||
      c.car_fuel_type.toLowerCase().includes(keyword)
    );
  }

  // Brand filter
  if (brand !== 'all') {
    cars = cars.filter(c => c.car_brand.toLowerCase() === brand.toLowerCase());
  }

  // Fuel filter (from category chips)
  if (activeFuelType !== 'all') {
    cars = cars.filter(c => c.car_fuel_type === activeFuelType);
  }

  // Price range filter
  if (priceRange === 'under-800k') {
    cars = cars.filter(c => c.car_price < 800000);
  } else if (priceRange === '800k-1.5m') {
    cars = cars.filter(c => c.car_price >= 800000 && c.car_price <= 1500000);
  } else if (priceRange === 'over-1.5m') {
    cars = cars.filter(c => c.car_price > 1500000);
  }

  // Sort
  if (sortBy === 'price-low') {
    cars.sort((a, b) => a.car_price - b.car_price);
  } else if (sortBy === 'price-high') {
    cars.sort((a, b) => b.car_price - a.car_price);
  } else if (sortBy === 'year-new') {
    cars.sort((a, b) => b.car_year - a.car_year);
  }

  const countSpan = document.getElementById('cars-count');
  if (countSpan) countSpan.innerText = `(${cars.length} คัน)`;

  if (cars.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
        <i class="fas fa-car" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i>
        <h3>ไม่พบรถยนต์ที่ตรงกับเงื่อนไข</h3>
        <p>กรุณาลองเปลี่ยนคำค้นหาหรือรีเซ็ตตัวกรอง</p>
        <button class="btn-primary" onclick="resetFilters()" style="margin-top: 1rem;">รีเซ็ตตัวกรอง</button>
      </div>
    `;
    return;
  }

  container.innerHTML = cars.map(car => `
    <div class="car-card">
      <div class="car-thumb-wrap">
        <img src="${car.image}" alt="${car.car_brand} ${car.model}" loading="lazy">
        <span class="badge-featured" style="background: rgba(37,99,235,0.9); color: #fff;">
          <i class="fas fa-id-card"></i> ${car.car_id}
        </span>
        <span class="badge-status available">
          <i class="fas fa-check-circle"></i> พร้อมส่งมอบ
        </span>
      </div>

      <div class="car-body">
        <div class="car-meta-top">
          <span class="car-brand-name">${car.car_brand}</span>
          <span class="car-year">ปีโมเดล ${car.car_year}</span>
        </div>
        <h3 class="car-model-title">${car.model}</h3>

        <div class="car-specs-grid">
          <div class="spec-item">
            <span><i class="fas fa-palette"></i> สีตัวถัง</span>
            <strong>${car.car_color}</strong>
          </div>
          <div class="spec-item">
            <span><i class="fas fa-tachometer-alt"></i> เครื่องยนต์</span>
            <strong>${car.car_engine_size}</strong>
          </div>
          <div class="spec-item">
            <span><i class="fas fa-gas-pump"></i> เชื้อเพลิง</span>
            <strong>${car.car_fuel_type}</strong>
          </div>
        </div>

        <div class="car-pricing-footer">
          <div class="price-box">
            <span>ราคาจำหน่าย</span>
            <strong>${formatMoney(car.car_price)}</strong>
          </div>
          <div class="card-actions">
            <button class="btn-icon-view" title="ดูรายละเอียด" onclick="openCarDetail('${car.car_id}')">
              <i class="fas fa-info-circle"></i>
            </button>
            <button class="btn-book-sm" onclick="openBookingModal('${car.car_id}')">
              <i class="fas fa-file-contract"></i> ซื้อ / จอง
            </button>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

// Reset Filters
function resetFilters() {
  document.getElementById('search-input').value = '';
  document.getElementById('filter-brand').value = 'all';
  document.getElementById('filter-price').value = 'all';
  document.getElementById('sort-select').value = 'recommended';
  document.querySelectorAll('.chip-btn').forEach(b => b.classList.remove('active'));
  document.querySelector('.chip-btn[data-fuel="all"]')?.classList.add('active');
  activeFuelType = 'all';
  renderCars();
}

// Open Car Detail Modal
function openCarDetail(carId) {
  const car = getCars().find(c => c.car_id === carId);
  if (!car) return;

  const modalBody = document.getElementById('detail-modal-body');
  if (!modalBody) return;

  // Monthly estimate (down 20%, 60 months, 2.59% interest)
  const down = car.car_price * 0.2;
  const loan = car.car_price - down;
  const monthly = Math.round((loan + (loan * 0.0259 * 5)) / 60);

  modalBody.innerHTML = `
    <div class="detail-gallery">
      <img src="${car.image}" alt="${car.model}">
    </div>

    <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 1rem;">
      <div>
        <span style="color: var(--accent-cyan); font-weight: 700; text-transform: uppercase;">รหัสรถ: ${car.car_id} • ยี่ห้อ: ${car.car_brand}</span>
        <h2 style="font-size: 1.85rem; font-weight: 800; color: #fff; margin-top: 0.25rem;">${car.model}</h2>
        <p style="color: var(--text-muted); font-size: 0.9rem;">ปีที่ผลิตหรือโมเดล (car_year): ${car.car_year}</p>
      </div>
      <div style="text-align: right;">
        <span style="color: var(--text-muted); font-size: 0.85rem;">ราคาจำหน่ายจริง (car_price)</span>
        <div style="font-size: 2rem; color: var(--accent-gold); font-weight: 800; font-family: 'Outfit';">${formatMoney(car.car_price)}</div>
        <span style="display: inline-block; background: rgba(59, 130, 246, 0.15); color: #60a5fa; padding: 0.25rem 0.65rem; border-radius: 6px; font-size: 0.8rem; font-weight: 600;">
          ผ่อนชำระเริ่มต้นประมาณ ~${monthly.toLocaleString()} ฿/เดือน
        </span>
      </div>
    </div>

    <p style="margin: 1.5rem 0 1rem; color: #cbd5e1; line-height: 1.7; background: rgba(255,255,255,0.03); padding: 1rem; border-radius: 10px; border-left: 4px solid var(--accent-gold);">
      ${car.description}
    </p>

    <h4 style="font-size: 1.1rem; color: #fff; margin-top: 1.5rem;"><i class="fas fa-database"></i> คุณสมบัติตามฐานข้อมูล (Relation: car)</h4>
    <div class="detail-specs-table">
      <div class="table-item"><span>รหัสประจำรถ (car_id):</span><strong>${car.car_id}</strong></div>
      <div class="table-item"><span>ยี่ห้อของรถ (car_brand):</span><strong>${car.car_brand}</strong></div>
      <div class="table-item"><span>ราคาขายของรถ (car_price):</span><strong style="color: var(--accent-gold);">${formatMoney(car.car_price)}</strong></div>
      <div class="table-item"><span>สีของรถ (car_color):</span><strong>${car.car_color}</strong></div>
      <div class="table-item"><span>ขนาดเครื่องยนต์ (car_engine_size):</span><strong>${car.car_engine_size}</strong></div>
      <div class="table-item"><span>ประเภทเชื้อเพลิง (car_fuel_type):</span><strong>${car.car_fuel_type}</strong></div>
      <div class="table-item"><span>ปีที่ผลิต (car_year):</span><strong>${car.car_year}</strong></div>
      <div class="table-item"><span>สถานะการขาย:</span><strong style="color: #34d399;">พร้อมส่งมอบ</strong></div>
    </div>

    <div style="display: flex; gap: 1rem; margin-top: 2rem; justify-content: flex-end; flex-wrap: wrap;">
      <button class="btn-primary" style="background: rgba(255,255,255,0.1); border: 1px solid var(--border-color);" onclick="closeModal(); scrollToLoan('${car.car_id}')">
        <i class="fas fa-calculator"></i> คำนวณค่างวดคันนี้
      </button>
      <button class="btn-gold" onclick="closeModal(); openBookingModal('${car.car_id}')">
        <i class="fas fa-file-invoice-dollar"></i> สั่งซื้อ / จองคันนี้ทันที
      </button>
    </div>
  `;

  document.getElementById('detail-modal').classList.add('active');
}

// Open Booking / Purchase Modal
function openBookingModal(carId) {
  const car = getCars().find(c => c.car_id === carId);
  if (!car) return;

  currentSelectedCar = car;
  document.getElementById('booking-car-name').innerText = `[${car.car_id}] ${car.car_brand} ${car.model}`;
  document.getElementById('booking-car-price').innerText = formatMoney(car.car_price);

  // Dynamic deposit calculation (5% of price or min 10,000)
  const deposit = Math.max(10000, Math.round(car.car_price * 0.02));
  document.getElementById('booking-deposit-display').innerText = formatMoney(deposit);

  // QR Code
  updateQrCode(deposit);

  // Set default appointment date to today
  const today = new Date().toISOString().split('T')[0];
  const dateInput = document.getElementById('booking-date');
  if (dateInput) {
    dateInput.value = today;
    dateInput.min = today;
  }

  // Populate branch select from DEFAULT_BRANCHES
  const branchSelect = document.getElementById('booking-branch');
  if (branchSelect) {
    branchSelect.innerHTML = DEFAULT_BRANCHES.map(b => `
      <option value="${b.branch_id}">${b.branch_name} (${b.branch_address})</option>
    `).join('');
  }

  // Reset slip preview
  document.getElementById('slip-preview').style.display = 'none';
  document.getElementById('slip-input').value = '';
  document.getElementById('slip-filename').innerText = 'คลิกเพื่อเลือกไฟล์สลิปหลักฐานการชำระเงิน';

  document.getElementById('booking-modal').classList.add('active');
}

// QR Code
function updateQrCode(amount) {
  const qrImg = document.getElementById('qr-image');
  if (qrImg) {
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=PROMPTPAY-AUTOLUXE-THB-${amount}`;
  }
}

// Handle Slip Upload
let currentUploadedSlip = null;
function handleSlipUpload(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (event) => {
    currentUploadedSlip = event.target.result;
    const preview = document.getElementById('slip-preview');
    preview.src = currentUploadedSlip;
    preview.style.display = 'inline-block';
    document.getElementById('slip-filename').innerText = `แนบไฟล์สำเร็จ: ${file.name}`;
    showToast('แนบหลักฐานการโอนเงินเรียบร้อยแล้ว', 'success');
  };
  reader.readAsDataURL(file);
}

// Submit Booking / Purchase Form -> Creates Customer & Sale record matching Schema!
function submitBooking(e) {
  e.preventDefault();

  if (!currentSelectedCar) return;

  const name = document.getElementById('customer-name').value.trim();
  const phone = document.getElementById('customer-phone').value.trim();
  const email = document.getElementById('customer-email').value.trim();
  const dob = document.getElementById('customer-dob').value.trim();
  const occupation = document.getElementById('customer-occupation').value.trim();
  const address = document.getElementById('customer-address').value.trim();
  const paymentMethod = document.getElementById('payment-method-select').value;
  const branchId = document.getElementById('booking-branch').value;

  if (!name || !phone || !email) {
    showToast('กรุณากรอกข้อมูลให้ครบถ้วน', 'error');
    return;
  }

  // Generate new Sale ID (S013, S014...) and Customer ID (CU013...)
  const sales = getSales();
  const nextSaleNum = sales.length + 1;
  const newSaleId = 'S' + String(nextSaleNum).padStart(3, '0');
  const newCustId = 'CU' + String(nextSaleNum).padStart(3, '0');

  const today = new Date();
  const dateStr = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;

  const newSale = {
    sale_id: newSaleId,
    sale_date: dateStr,
    sale_price_sold: currentSelectedCar.car_price,
    sale_payment_method: paymentMethod,
    emp_id: "E002", // Default sales representative
    cust_id: newCustId,
    car_id: currentSelectedCar.car_id,
    customerName: name,
    customerPhone: phone,
    customerEmail: email,
    customerAddress: address,
    customerOccupation: occupation,
    branch_id: branchId,
    slipImage: currentUploadedSlip
  };

  sales.unshift(newSale);
  saveSales(sales);

  closeModal();
  showVoucherModal(newSale);
  showToast('บันทึกคำสั่งซื้อ/จองรถยนต์ลงในระบบเรียบร้อย!', 'success');
}

// Show Voucher Modal
function showVoucherModal(sale) {
  const modalBody = document.getElementById('voucher-modal-body');
  if (!modalBody) return;

  const car = getCars().find(c => c.car_id === sale.car_id) || currentSelectedCar;
  const branch = DEFAULT_BRANCHES.find(b => b.branch_id === sale.branch_id) || DEFAULT_BRANCHES[0];

  modalBody.innerHTML = `
    <div class="voucher-card" id="printable-voucher">
      <div class="voucher-header">
        <div>
          <h3 style="margin: 0; font-size: 1.35rem; font-weight: 800; color: #0f172a;">AUTOLUXE MOTORS</h3>
          <p style="font-size: 0.8rem; color: #64748b; margin-top: 2px;">ใบยืนยันการซื้อ-ขายรถยนต์ (Relation: sale & customer)</p>
        </div>
        <div class="voucher-code">${sale.sale_id}</div>
      </div>

      <div class="voucher-row">
        <span>รหัสรายการขาย (sale_id):</span>
        <strong>${sale.sale_id}</strong>
      </div>
      <div class="voucher-row">
        <span>วันที่ทำรายการ (sale_date):</span>
        <strong>${sale.sale_date}</strong>
      </div>
      <div class="voucher-row">
        <span>รหัสรถยนต์ที่ซื้อ (car_id):</span>
        <strong>${sale.car_id} - ${car ? car.car_brand + ' ' + car.model : ''}</strong>
      </div>
      <div class="voucher-row">
        <span>ราคาที่ขายจริง (sale_price_sold):</span>
        <strong style="color: #2563eb; font-size: 1.15rem;">${formatMoney(sale.sale_price_sold)}</strong>
      </div>
      <div class="voucher-row">
        <span>วิธีชำระเงิน (sale_payment_method):</span>
        <strong>${sale.sale_payment_method}</strong>
      </div>
      <div class="voucher-row">
        <span>รหัสลูกค้า (cust_id) / ชื่อลูกค้า (cust_name):</span>
        <strong>${sale.cust_id} (${sale.customerName})</strong>
      </div>
      <div class="voucher-row">
        <span>เบอร์โทรศัพท์ (cust_phone):</span>
        <strong>${sale.customerPhone}</strong>
      </div>
      <div class="voucher-row">
        <span>สาขาที่รับบริการ (branch_name):</span>
        <strong>${branch.branch_name} (${branch.branch_address})</strong>
      </div>

      <div style="margin-top: 1.5rem; text-align: center; font-size: 0.75rem; color: #94a3b8; border-top: 1px dashed #cbd5e1; padding-top: 1rem;">
        ข้อมูลนี้สอดคล้องกับตาราง car, customer, employee, branch, และ sale ในฐานข้อมูล car_system_db
      </div>
    </div>

    <div style="display: flex; justify-content: flex-end; gap: 1rem; margin-top: 1.5rem;">
      <button class="btn-primary" onclick="window.print()">
        <i class="fas fa-print"></i> พิมพ์ใบเสร็จ
      </button>
      <button class="btn-gold" onclick="closeModal()">
        <i class="fas fa-check"></i> เสร็จสิ้น
      </button>
    </div>
  `;

  document.getElementById('voucher-modal').classList.add('active');
}

// Financing / Loan Calculator Logic
function populateLoanCarSelect() {
  const select = document.getElementById('calc-car-select');
  if (!select) return;

  const cars = getCars();
  select.innerHTML = cars.map(c => `
    <option value="${c.car_price}">[${c.car_id}] ${c.car_brand} ${c.model} - ${formatMoney(c.car_price)}</option>
  `).join('');

  select.addEventListener('change', calculateLoan);

  document.getElementById('calc-down-range')?.addEventListener('input', (e) => {
    document.getElementById('calc-down-percent').innerText = `${e.target.value}%`;
    calculateLoan();
  });

  document.getElementById('calc-period-select')?.addEventListener('change', calculateLoan);
  document.getElementById('calc-interest')?.addEventListener('input', calculateLoan);
}

function calculateLoan() {
  const price = parseFloat(document.getElementById('calc-car-select')?.value) || 750000;
  const downPercent = parseFloat(document.getElementById('calc-down-range')?.value) || 20;
  const months = parseInt(document.getElementById('calc-period-select')?.value) || 60;
  const interestRate = parseFloat(document.getElementById('calc-interest')?.value) || 2.59;

  const downAmount = price * (downPercent / 100);
  const loanPrinciple = price - downAmount;
  const years = months / 12;
  const totalInterest = loanPrinciple * (interestRate / 100) * years;
  const totalLoanWithInterest = loanPrinciple + totalInterest;
  const monthlyInstallment = Math.round(totalLoanWithInterest / months);

  if (document.getElementById('calc-down-amount')) {
    document.getElementById('calc-down-amount').innerText = formatMoney(downAmount);
  }
  if (document.getElementById('calc-loan-principle')) {
    document.getElementById('calc-loan-principle').innerText = formatMoney(loanPrinciple);
  }
  if (document.getElementById('calc-total-interest')) {
    document.getElementById('calc-total-interest').innerText = formatMoney(totalInterest);
  }
  if (document.getElementById('calc-monthly-installment')) {
    document.getElementById('calc-monthly-installment').innerText = formatMoney(monthlyInstallment);
  }
}

function scrollToLoan(carId) {
  const select = document.getElementById('calc-car-select');
  const car = getCars().find(c => c.car_id === carId);
  if (select && car) {
    select.value = car.car_price;
    calculateLoan();
  }
  document.getElementById('loan-calculator')?.scrollIntoView({ behavior: 'smooth' });
}

// Modal Closer
function closeModal() {
  document.querySelectorAll('.modal-backdrop').forEach(m => m.classList.remove('active'));
}

// Toast Alert
function showToast(message, type = 'info') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <i class="fas ${type === 'success' ? 'fa-check-circle' : (type === 'error' ? 'fa-exclamation-triangle' : 'fa-info-circle')}"></i>
    <span>${message}</span>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
