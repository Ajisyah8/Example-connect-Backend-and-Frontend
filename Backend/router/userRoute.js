import express, { Router } from "express";
import { register, login, getUser } from "../controller/auth.js";

const router = express.Router();

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const result = await login(username, password);
    if (result.success) {
        res.status(200).json(result);
    } else {
        res.status(401).json(result);
    }
});

// Register endpoint
router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const result = await register(username, password);
    if (result.success) {
        res.status(201).json(result);
    } else {
        res.status(400).json(result);
    }
});

router.get('/user', async (req, res) => {
    const username = req.params.username;
    const user = await getUser(username);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ success: false, message: 'User not found' });
    }
});

export default router;