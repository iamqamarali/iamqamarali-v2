CREATE DATABASE IF NOT EXISTS 'iamqamarali-blog';
use 'iamqamarali-blog';


CREATE TABLE IF NOT EXISTS users (
    id integer primary key auto_increment,
    first_name varchar(255) NULL,
    last_name varchar(255) NULL,
    bio text null,
    email varchar(255) not null unique,
    password varchar(255) NULL,
    avatar text null,
    created_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp on update current_timestamp
    
);

CREATE TABLE IF NOT exists posts(
    id integer primary key auto_increment,
    title text null,
    description text null,
    body text null,
    slug varchar(250) null,
    user_id integer null,
    seo_data JSON null,
    featured boolean default false,
    published boolean default false,
    main_image text null,
    images JSON default null,
    created_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp on update current_timestamp,

    is_project boolean default false,

    Index (is_project),
    Index (slug),
    Index (user_id),
    INDEX (featured),
    Index (published) 
);


CREATE VIEW projects as 
select * from posts where is_project = true;



CREATE TABLE IF NOT exists comments(
    id integer primary key auto_increment,
    body text null,
    user_id integer null,
    post_id integer null,
    created_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp on update current_timestamp,
    
    INDEX (user_id),
    INDEX (post_id)
);

