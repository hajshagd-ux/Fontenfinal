-- =======================================================
-- Database: car_system_db
-- โครงการ: ระบบโชว์รูมซื้อ-ขายรถยนต์ (Car Showroom System)
-- สร้างตามโครงสร้าง Relation & Attribute ในข้อสอบ 100%
-- =======================================================

CREATE DATABASE IF NOT EXISTS `car_system_db` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `car_system_db`;

-- --------------------------------------------------------
-- 1. ตารางข้อมูลสาขา (branch)
-- --------------------------------------------------------
DROP TABLE IF EXISTS `sale`;
DROP TABLE IF EXISTS `employee`;
DROP TABLE IF EXISTS `branch`;

CREATE TABLE `branch` (
  `branch_id` VARCHAR(10) NOT NULL PRIMARY KEY,
  `branch_name` VARCHAR(100) NOT NULL,
  `branch_address` VARCHAR(100) NOT NULL,
  `branch_open_hour` VARCHAR(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `branch` (`branch_id`, `branch_name`, `branch_address`, `branch_open_hour`) VALUES
('B001', 'สาขารัชดา', '123 ถ.รัชดาภิเษก กทม.', '09:00-18:00'),
('B002', 'สาขาบางนา', '88 ถ.บางนา-ตราด กทม.', '09:00-18:00'),
('B003', 'สาขาเชียงใหม่', '99 ถ.นิมมานเหมินท์ เชียงใหม่', '09:00-17:30'),
('B004', 'สาขาหาดใหญ่', '45 ถ.เพชรเกษม สงขลา', '10:00-18:00'),
('B005', 'สาขานครราชสีมา', '77 ถ.มิตรภาพ โคราช', '09:30-18:30');

-- --------------------------------------------------------
-- 2. ตารางข้อมูลรถยนต์ (car)
-- --------------------------------------------------------
DROP TABLE IF EXISTS `car`;

CREATE TABLE `car` (
  `car_id` VARCHAR(10) NOT NULL PRIMARY KEY,
  `car_brand` VARCHAR(100) NOT NULL,
  `car_price` INT NOT NULL,
  `car_color` VARCHAR(100) NOT NULL,
  `car_engine_size` VARCHAR(100) NOT NULL,
  `car_fuel_type` VARCHAR(100) NOT NULL,
  `car_year` INT NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `car` (`car_id`, `car_brand`, `car_price`, `car_color`, `car_engine_size`, `car_fuel_type`, `car_year`) VALUES
('C001', 'Toyota', 750000, 'ขาว', '1.5L', 'เบนซิน', 2021),
('C002', 'Honda', 820000, 'ดำ', '1.8L', 'เบนซิน', 2022),
('C003', 'BMW', 2500000, 'เทา', '2.0L', 'เบนซิน', 2023),
('C004', 'Nissan', 700000, 'แดง', '1.2L', 'เบนซิน', 2020),
('C005', 'Mazda', 880000, 'น้ำเงิน', '2.0L', 'เบนซิน', 2021),
('C006', 'MG', 770000, 'ขาว', '1.5L', 'เบนซิน', 2022),
('C007', 'Tesla', 3200000, 'ดำ', 'ไฟฟ้า', 'ไฟฟ้า', 2023),
('C008', 'Ford', 1000000, 'ส้ม', '2.0L', 'ดีเซล', 2022),
('C009', 'Isuzu', 950000, 'บรอนซ์', '1.9L', 'ดีเซล', 2021),
('C010', 'Suzuki', 690000, 'เหลือง', '1.2L', 'เบนซิน', 2020),
('C011', 'Chevrolet', 890000, 'น้ำเงินเข้ม', '1.6L', 'เบนซิน', 2021),
('C012', 'Volvo', 2800000, 'เงิน', '2.0L', 'ไฮบริด', 2023);

-- --------------------------------------------------------
-- 3. ตารางข้อมูลลูกค้า (customer)
-- --------------------------------------------------------
DROP TABLE IF EXISTS `customer`;

CREATE TABLE `customer` (
  `cust_id` VARCHAR(10) NOT NULL PRIMARY KEY,
  `cust_name` VARCHAR(100) NOT NULL,
  `cust_email` VARCHAR(50) NOT NULL,
  `cust_phone` VARCHAR(100) NOT NULL,
  `cust_dob` VARCHAR(50) NOT NULL,
  `cust_occupation` VARCHAR(100) NOT NULL,
  `cust_address` VARCHAR(50) NOT NULL,
  `cust_register_date` VARCHAR(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `customer` (`cust_id`, `cust_name`, `cust_email`, `cust_phone`, `cust_dob`, `cust_occupation`, `cust_address`, `cust_register_date`) VALUES
('CU001', 'สมชาย ใจดี', 'somchai@email.com', '0812345678', '21/3/1985', 'วิศวกร', '123 ถ.สุขุมวิท กทม.', '10/1/2024'),
('CU002', 'สมทรง มีศรี', 'somsong@email.com', '0898765432', '11/7/1990', 'พนักงานบัญชี', '88 ถ.รามอินทรา กทม.', '5/11/2023'),
('CU003', 'วิชัย ตั้งแต่ดี', 'wichan@email.com', '0863339999', '5/12/1978', 'ข้าราชการ', '9 ถ.พหลโยธิน ลพบุรี', '15/2/2024'),
('CU004', 'อรุณา แสงทอง', 'ornuma@email.com', '0801234567', '30/4/1995', 'แพทย์', '55 ถ.ศรีนครินทร์ สมุทรปราการ', '1/9/2023'),
('CU005', 'ธีระวัฒน์ อินทรศรี', 'teerawat@email.com', '0912223334', '25/11/1980', 'ทนายความ', '102 ถ.เจริญกรุง กทม.', '20/3/2024'),
('CU006', 'ศิริพร มีสุข', 'siriporn@email.com', '0845556789', '14/2/1989', 'พนักงานขาย', '67 ถ.ประชาอุทิศ ขอนแก่น', '18/8/2023'),
('CU007', 'ปกรณ์ ศักดิ์ศรี', 'pakorn@email.com', '0856781234', '6/6/1986', 'นักธุรกิจ', '90 ถ.มิตรภาพ นครราชสีมา', '9/4/2024'),
('CU008', 'นภัสวรรณ สวยงาม', 'napaswan@email.com', '0834445566', '19/9/1993', 'ดีไซเนอร์', '111 ถ.ลาดพร้าว กทม.', '25/1/2024'),
('CU009', 'ณัฐพงษ์ เก่งกล้า', 'nattapong@email.com', '0822223331', '5/5/1982', 'วิศวกรโยธา', '32 ถ.รัตนาธิเบศร์ นนทบุรี', '10/10/2023'),
('CU010', 'วรรณา ประเสริฐสุข', 'wanna@email.com', '0817654321', '1/1/1991', 'ครู', '4 ถ.ประชาราษฎร์ พิษณุโลก', '1/6/2024'),
('CU011', 'กิตติศักดิ์ มีโชค', 'kittisak@email.com', '0819991112', '8/8/1988', 'เจ้าหน้าที่รัฐ', '76 ถ.ท่าพระ กทม.', '22/5/2024'),
('CU012', 'สุนิสา แก่นแก้ว', 'sunisa@email.com', '0820001111', '20/10/1996', 'พยาบาล', '25 ถ.ศรีราชา ชลบุรี', '12/12/2023');

-- --------------------------------------------------------
-- 4. ตารางข้อมูลพนักงาน (employee)
-- --------------------------------------------------------
CREATE TABLE `employee` (
  `emp_id` VARCHAR(10) NOT NULL PRIMARY KEY,
  `emp_name` VARCHAR(100) NOT NULL,
  `emp_position` VARCHAR(100) NOT NULL,
  `emp_salary` INT NOT NULL,
  `emp_phone` VARCHAR(15) NOT NULL,
  `emp_email` VARCHAR(100) NOT NULL,
  `branch_id` VARCHAR(10) NOT NULL,
  FOREIGN KEY (`branch_id`) REFERENCES `branch`(`branch_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `employee` (`emp_id`, `emp_name`, `emp_position`, `emp_salary`, `emp_phone`, `emp_email`, `branch_id`) VALUES
('E001', 'ปรีชา สายลม', 'ผู้จัดการ', 50000, '0811111111', 'preecha@email.com', 'B001'),
('E002', 'วิภา ดวงดี', 'พนักงานขาย', 30000, '0822222222', 'wipa@email.com', 'B001'),
('E003', 'มานพ เกิดผล', 'พนักงานขาย', 32000, '0833333333', 'manop@email.com', 'B002'),
('E004', 'จารุวรรณ พูนสุข', 'พนักงานขาย', 31000, '0844444444', 'jaruwan@email.com', 'B002'),
('E005', 'สุพจน์ แสนดี', 'ผู้จัดการ', 52000, '0855555555', 'supot@email.com', 'B002'),
('E006', 'กัลยา ใจเพชร', 'พนักงานขาย', 29500, '0866666666', 'kanlaya@email.com', 'B003'),
('E007', 'ธวัชชัย แข็งแรง', 'พนักงานขาย', 30500, '0877777777', 'thawatchai@email.com', 'B003'),
('E008', 'วิทยา สุขสันต์', 'ผู้จัดการ', 51000, '0888888888', 'witaya@email.com', 'B003'),
('E009', 'สราวุธ เกิดดี', 'พนักงานขาย', 29000, '0899999999', 'sarawut@email.com', 'B004'),
('E010', 'รัตนา งามวงศ์', 'พนักงานขาย', 30000, '0801234567', 'ratana@email.com', 'B004'),
('E011', 'อนงค์ สวยสด', 'พนักงานขาย', 31500, '0812345670', 'anong@email.com', 'B005'),
('E012', 'วิทวัส ธรรมดี', 'ผู้จัดการ', 55000, '0823456789', 'witawat@email.com', 'B005');

-- --------------------------------------------------------
-- 5. ตารางข้อมูลการขายรถยนต์ (sale)
-- --------------------------------------------------------
CREATE TABLE `sale` (
  `sale_id` VARCHAR(10) NOT NULL PRIMARY KEY,
  `sale_date` VARCHAR(50) NOT NULL,
  `sale_price_sold` INT NOT NULL,
  `sale_payment_method` VARCHAR(100) NOT NULL,
  `emp_id` VARCHAR(10) NOT NULL,
  `cust_id` VARCHAR(10) NOT NULL,
  `car_id` VARCHAR(10) NOT NULL,
  FOREIGN KEY (`emp_id`) REFERENCES `employee`(`emp_id`) ON DELETE CASCADE,
  FOREIGN KEY (`cust_id`) REFERENCES `customer`(`cust_id`) ON DELETE CASCADE,
  FOREIGN KEY (`car_id`) REFERENCES `car`(`car_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `sale` (`sale_id`, `sale_date`, `sale_price_sold`, `sale_payment_method`, `emp_id`, `cust_id`, `car_id`) VALUES
('S001', '15/1/2024', 740000, 'เงินสด', 'E002', 'CU001', 'C001'),
('S002', '20/2/2024', 800000, 'ผ่อน', 'E003', 'CU002', 'C002'),
('S003', '5/3/2024', 2450000, 'โอน', 'E004', 'CU003', 'C003'),
('S004', '10/4/2024', 680000, 'เงินสด', 'E006', 'CU004', 'C004'),
('S005', '1/5/2024', 860000, 'ผ่อน', 'E007', 'CU005', 'C005'),
('S006', '15/5/2024', 750000, 'โอน', 'E009', 'CU006', 'C006'),
('S007', '1/6/2024', 3100000, 'เงินสด', 'E011', 'CU007', 'C007'),
('S008', '10/6/2024', 980000, 'เงินสด', 'E012', 'CU008', 'C008'),
('S009', '11/6/2024', 940000, 'ผ่อน', 'E010', 'CU009', 'C009'),
('S010', '15/6/2024', 670000, 'โอน', 'E003', 'CU010', 'C010'),
('S011', '18/6/2024', 870000, 'เงินสด', 'E002', 'CU011', 'C011'),
('S012', '20/6/2024', 2700000, 'โอน', 'E004', 'CU012', 'C012');
