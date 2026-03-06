DROP TABLE IF EXISTS transactions CASCADE;
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS currencies CASCADE;

CREATE TABLE IF NOT EXISTS users (
    user_id     SERIAL          PRIMARY KEY,
    name        VARCHAR(100)    NOT NULL,
    email       VARCHAR(255)    NOT NULL UNIQUE,
    password    VARCHAR(255)    NOT NULL,
    balance     NUMERIC(12, 2)  NOT NULL DEFAULT 0.00
);

CREATE TABLE IF NOT EXISTS currencies (
	currency_id SERIAL PRIMARY KEY,
	currency_name VARCHAR(50) NOT NULL UNIQUE,
	currency_symbol VARCHAR(5) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS transactions (
    transaction_id    SERIAL          PRIMARY KEY,
    sender_user_id    INT             NOT NULL,
    receiver_user_id  INT             NOT NULL,
    amount            NUMERIC(12, 2)  NOT NULL,
    currency_id		  INT             NOT NULL,
    transaction_date  TIMESTAMP       NOT NULL DEFAULT NOW(),

    CONSTRAINT fk_sender   FOREIGN KEY (sender_user_id)   REFERENCES users(user_id),
    CONSTRAINT fk_receiver FOREIGN KEY (receiver_user_id) REFERENCES users(user_id),
    CONSTRAINT fk_currency FOREIGN KEY (currency_id) REFERENCES currencies(currency_id)
);

-- ==================
-- CURRENCIES (20)
-- ==================
INSERT INTO currencies (currency_name, currency_symbol) VALUES
('Chilean Peso',         'CLP'),
('Argentine Peso',       'AR$'),
('US Dollar',            '$'),
('Euro',                 '€'),
('British Pound',        '£'),
('Japanese Yen',         '¥'),
('Swiss Franc',          'CHF'),
('Canadian Dollar',      'CA$'),
('Australian Dollar',    'AU$'),
('Chinese Yuan',         'CN¥'),
('Swedish Krona',        'kr'),
('Norwegian Krone',      'NOK'),
('Mexican Peso',         'MX$'),
('Brazilian Real',       'R$'),
('South Korean Won',     '₩'),
('Indian Rupee',         '₹'),
('Russian Ruble',        '₽'),
('Turkish Lira',         '₺'),
('South African Rand',   'ZAR'),
('Singapore Dollar',     'S$');



-- ==================
-- USERS (20)
-- ==================
INSERT INTO users (name, email, password, balance) VALUES
('Alice Johnson',    'alice.johnson@gmail.com',      'hashed_pw_001',    37.80),
('Bob Smith',        'bsmith_94@hotmail.com',         'hashed_pw_002', 12450.00),
('Carol White',      'carol.w@yahoo.com',             'hashed_pw_003',   310.55),
('David Brown',      'd.brown_work@email.com',        'hashed_pw_004',  5980.20),
('Eva Martinez',     'eva_mtz@gmail.com',             'hashed_pw_005',     0.00),
('Frank Wilson',     'frankwilson@outlook.com',       'hashed_pw_006',  1024.99),
('Grace Lee',        'g.lee77@gmail.com',             'hashed_pw_007', 88300.50),
('Henry Taylor',     'htaylor@protonmail.com',        'hashed_pw_008',   150.00),
('Isla Anderson',    'isla_and@email.com',            'hashed_pw_009',  3005.75),
('Jack Thomas',      'jackthomas@hotmail.com',        'hashed_pw_010', 22430.60),
('Karen Harris',     'k.harris@gmail.com',            'hashed_pw_011',    89.10),
('Liam Jackson',     'liamj_personal@yahoo.com',     'hashed_pw_012',  7600.00),
('Mia Garcia',       'mia.garcia99@gmail.com',        'hashed_pw_013',   500.25),
('Noah Martinez',    'noahmtz@outlook.com',           'hashed_pw_014', 41220.00),
('Olivia Davis',     'olivia.d@protonmail.com',       'hashed_pw_015',    15.90),
('Paul Robinson',    'probinson@email.com',           'hashed_pw_016',  9340.00),
('Quinn Clark',      'quinn.clark@gmail.com',         'hashed_pw_017',   275.25),
('Rachel Lewis',     'rlewis_88@hotmail.com',         'hashed_pw_018', 63890.00),
('Sam Walker',       'samwalker@yahoo.com',           'hashed_pw_019',  1405.40),
('Tina Hall',        'tina.hall_biz@gmail.com',       'hashed_pw_020', 17610.75);

-- ==================
-- TRANSACTIONS (20)
-- ==================
INSERT INTO transactions (sender_user_id, receiver_user_id, amount, currency_id, transaction_date) VALUES
(7,  3,    55.00, 1, '2024-01-03 07:12:33'),
(14, 1,  8000.00, 11, '2024-01-09 22:47:05'),
(2,  19,   12.99, 1,'2024-01-11 14:03:55'),
(12, 5,  3500.50, 1,'2024-01-17 09:28:41'),
(10, 6,   740.00, 14,'2024-01-23 18:55:10'),
(4,  15, 2200.75, 1,'2024-02-02 11:34:22'),
(12, 8,    30.00, 17,'2024-02-07 06:10:09'),
(1,  20, 9999.99, 9,'2024-02-11 23:59:00'),
(16, 11,  415.60, 1,'2024-02-14 13:45:30'),
(6,  17,   88.20, 1,'2024-02-19 10:22:17'),
(13,  14,  120.00, 8,'2024-02-25 08:05:44'),
(20, 12,  5300.00, 1,'2024-03-01 17:30:00'),
(9,  13,   67.50, 1,'2024-03-06 12:48:55'),
(5,  18, 1800.00, 5,'2024-03-10 20:15:33'),
(11, 7,   999.99, 1,'2024-03-13 09:02:11'),
(12, 4,   250.25, 2,'2024-03-18 15:37:48'),
(8,  10,   45.00, 2,'2024-03-22 07:55:20'),
(13, 16, 7200.00, 1,'2024-03-26 16:20:05'),
(13, 3,   310.80, 19,'2024-03-29 11:11:11'),
(15, 12, 4450.00, 20,'2024-03-31 19:44:59');















