const bcrypt = require('bcryptjs');
const { PrismaClient } = require('@prisma/client/edge');
const { withAccelerate } = require('@prisma/extension-accelerate');
const generateToken = require('../utils/generateToken');

const prisma = new PrismaClient().$extends(withAccelerate());

const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) return res.status(400).json({ error: 'User already exists' });

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await prisma.user.create({ data: { name, email, password: hashedPassword } });

        const token = generateToken(user.id);
        
        res.status(201).json({ message: 'Signup successful', token });
    } catch (error) {
        console.error('Signup error:', error);
        res.status(500).json({ error: 'Internal server error', details: error.message });
    }
};

const signin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }

        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) return res.status(400).json({ error: 'Invalid credentials' });

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) return res.status(400).json({ error: 'Invalid credentials' });

        const token = generateToken(user.id);
        res.status(200).json({ message: 'Signin successful', token });
    } catch (error) {
        console.error('Signin error:', error);
        res.status(500).json({ error: 'Internal server error', details: error.message });
    }
};

module.exports = { signup, signin };