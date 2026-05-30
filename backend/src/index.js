const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()

const app = express()
app.use(cors())
app.get('/', (req, res) => {
  res.json({ message: 'GetIt API is running', endpoints: ['/api/health', '/api/products'] })
})

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' })
})

// Products route (will add later)
app.get('/api/products', (req, res) => {
  res.json({ message: 'Products endpoint - coming soon' })
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
})