--
-- IMPORTANT
--
-- Must have DB named "backproj", 
-- And a user with username and password of "backproj"
--
--
-- Remove and Create all the tables
-- @block
create table brands (
	id int not null auto_increment,
	name varchar(255) not null,
	primary key (id)
);
create table users (
	id int not null auto_increment,
	name varchar(255) not null,
	primary key (id)
);
create table items (
	id int not null auto_increment,
	name varchar(255) not null,
	barcode varchar(255),
	image_url varchar(255),
	available_qty int,
	brand_id int not null,
	foreign key (brand_id) references brands(id),
	primary key (id)
);
--@block 
create table orders (
	id int not null auto_increment,
	date date not null,
	qty int not null,
	price int not null,
	item_id int not null,
	user_id int not null,
	primary key (id),
	foreign key (item_id) references items(id),
	foreign key (user_id) references users(id)
);
--
--
--
-- Create all the views
-- @block
-- items view
create view items_view as
select items.id as item_id,
	items.name as item_name,
	items.barcode as item_barcode,
	items.image_url as item_image_url,
	items.brand_id as brand_id,
	brands.name as brand_name,
	items.available_qty as item_available_qty
from items
	join brands on items.brand_id = brands.id;
--
-- orders view
create view orders_view as
select orders.id as order_id,
	orders.date as order_date,
	items.id as item_id,
	items.name as item_name,
	items.image_url as item_image_url,
	brands.id as brand_id,
	brands.name as brand_name,
	orders.qty as order_qty,
	orders.price as order_price,
	(orders.qty * orders.price) as total_price,
	orders.user_id as user_id
from orders
	join items on orders.item_id = items.id
	join brands on items.brand_id = brands.id;