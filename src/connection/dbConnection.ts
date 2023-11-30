import knex from 'knex'

const db = knex({
    client: process.env.DB_CLIENTE,
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
    }
})

export = knex