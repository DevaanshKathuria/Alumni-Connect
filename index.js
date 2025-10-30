const express = require('express');
const { PrismaClient } = require('@prisma/client/edge');
const dotenv = require('dotenv');
const { signup, signin } = require('./controllers/auth');
const { withAccelerate } = require('@prisma/extension-accelerate');

dotenv.config();

const app = express();

const prisma = new PrismaClient().$extends(withAccelerate())

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Alumni Connect API is running!' });
});

app.post('/api/auth/signup', signup);
app.post('/api/auth/signin', signin);

// Export for Vercel serverless
module.exports = app;

// Only listen locally (not on Vercel)
if (process.env.NODE_ENV !== 'production') {
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}
