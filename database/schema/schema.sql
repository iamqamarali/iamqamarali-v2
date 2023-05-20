CREATE DATABASE IF NOT EXISTS 'iamqamarali-blog';
use 'iamqamarali-blog';


/* users table */
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

/* posts table */
CREATE TABLE IF NOT exists posts(
    id integer primary key auto_increment,
    title text null,
    description text null,
    body text null,
    slug text null,
    main_image text null,
    user_id integer null,
    seo_data JSON null,
    featured boolean default false,
    created_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp on update current_timestamp,

    Index (slug),
    INDEX (featured),
    FOREIGN KEY (user_id) REFERENCES users(id) on delete set null
);

/* comments */
CREATE TABLE IF NOT exists comments(
    id integer primary key auto_increment,
    body text null,
    user_id integer null,
    post_id integer null,
    created_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp on update current_timestamp,

    INDEX (user_id),
    FOREIGN KEY (post_id) REFERENCES posts(id) on delete cascade,
);

/* Projects */
CREATE TABLE IF NOT exists projects(
    id integer primary key auto_increment,
    title text null,
    body text null,
    main_image text null,
    user_id integer null,
    created_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp on update current_timestamp,

    FOREIGN KEY (user_id) REFERENCES users(id) on delete set null
);