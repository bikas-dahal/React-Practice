import { app } from './app.js'
import dotenv from 'dotenv'
import { initDb } from './db/init.js'

dotenv.config()

try {
    await initDb()
    const PORT = process.env.PORT
    app.listen(PORT)
    console.info(`express server running on http://localhost:${PORT}`)
  } catch (err) {
    console.error('error connecting to database:', err)
  }