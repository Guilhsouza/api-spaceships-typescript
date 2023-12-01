create table if not exists spaceship (
    id serial primary key, 
    name_of_spaceship varchar(255),
    total_crew smallint,
    mission default false
);

create table if not exists crew (
    id serial primary key,
    spaceship_id int references spaceship(id),
    name_of_crew varchar(255)
);