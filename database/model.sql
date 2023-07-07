create table users(
    id serial not null primary key,
    name varchar(255) not null,
    username varchar(255) not null,
    password text not null,
    created_at timestamp not null default current_timestamp
);

create table category(
    id serial not null primary key,
    name varchar(255) not null,
    image varchar(255) not null,
    volume varchar(255) not null
);

create table popular(
    id serial not null primary key,
    image varchar(255) not null,
    cost varchar(255) not null,
    profession varchar(255) not null
);

create table expert(
    id serial not null primary key,
    image varchar(255) not null,
    name varchar(255) not null,
    profession varchar(255) not null
);
