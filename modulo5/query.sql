-- 1.- obtener el nombre de la moneda elegida por un usuario específico.
select t.transaction_id, t.sender_user_id , c.currency_name, u.name     
from transactions t 
inner join currencies c 
on t.currency_id = c.currency_id 
inner join users u
on u.user_id = t.sender_user_id 
where t.sender_user_id = 12;    

-- 2.- obtener todas las transacciones registradas.
select * from transactions t 
order by t.transaction_date desc;

-- 3.- obtener todas las transacciones realizadas por un usuario específico.
select * from transactions t 
where t.sender_user_id = 12;

-- 4.- Sentencia DML para modificar el campo correo electrónico de un usuario específico.
-- user 12 = liamj_personal@yahoo.com
select email from users u 
where u.user_id = 12;  

update users set email = 'new_email@gmail.com' where user_id = 12;

-- 5.- eliminar los datos de una transacción (eliminado de la fila completa)
select * from transactions;

delete from transactions where transaction_id = 2;

select * from transactions; 

-- 6.- Unir las tablas transaccion y usuario mediante INNER JOIN.
select * from transactions;
select * from users;

with user_data as (
select u.user_id, u.name, u.email 
from users u
) 
select 
    t.*,
    ud.name,
    ud.email
from transactions t
inner join user_data ud
on t.sender_user_id = ud.user_id;

-- 7.- sub‐consultas para obtener el total de transacciones por usuario, transactions > 2.
-- The correct clause order is always: FROM → JOIN → WHERE → GROUP BY → HAVING → ORDER BY

with total_transactions as (
	select t.sender_user_id , count(*)
	from transactions t 
	group by t.sender_user_id 
	HAVING COUNT(*) >= 2  -- filters BEFORE the join happens
)
select * from total_transactions tt
inner join users u on tt.sender_user_id = u.user_id;

-- 8.- Crear una vista que muestre usuarios con saldo > a xxx.

drop view if exists filter_balance;
create view filter_balance as
select * from users u
where
	u.balance > 1000;

select * from filter_balance;

-- 9.- Crear una vista que muestre el top‐5 de usuarios con mayor saldo.

drop view if exists top_balance;
create view top_balance as
select u.user_id, u.name, u.email, round(u.balance, 0) as balance
from users u;

select * from top_balance
order by balance desc
limit 5;

-- 10.- Transactions (by AI)

select * from users order by user_id asc;

-- DO: runs an anonymous PL/pgSQL block without needing to create a function
DO $$
-- DECLARE: section where you define variables to use in the block
DECLARE
    -- variable to store the balance after the update
    new_balance NUMERIC;
BEGIN
    -- subtract 500 from user 1 and capture the resulting balance
    UPDATE users SET balance = balance - 500
    WHERE user_id = 1
    RETURNING balance INTO new_balance;

    -- check if the new balance is valid (no debt allowed)
    IF new_balance >= 0 THEN
        -- save the changes permanently
        COMMIT;
        RAISE NOTICE 'Transaction successful. New balance: %', new_balance;
    ELSE
        -- undo the update, balance stays unchanged
        ROLLBACK;
        RAISE NOTICE 'Insufficient funds. Transaction cancelled.';
    END IF;
END;
$$;




