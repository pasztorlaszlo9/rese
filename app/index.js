//Pásztor László, II/E, 2025-10-22

import express from 'express'
import router from './routes/api.js'

const app = express()

app.use('/api', router)

const PORT = 8000
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

