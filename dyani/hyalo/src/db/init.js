import mongoose from 'mongoose'

export function initDb() {
    const DB_URL = process.env.DATABASE_URL
    mongoose.connection.on('open', () => {
        console.info('Connected to database ' + DB_URL)
    })
    const connection = mongoose.connect(DB_URL)
    return connection
}

