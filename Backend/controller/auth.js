import { query } from "../database/Db.js";
import bcrypt from "bcrypt";

const saltRounds = 10;

const getUser = async () => {
    const command = 'SELECT * FROM user'; // Select all users
    const result = await query(command);
    return result;
};



async function login (username, password) {
    try {
        // Validate input
        if (!username || !password) {
            throw new Error('Email and password are required');
        }

        const users = await getUser();

        // Fetch user from database
        const user = users.find(user => user.username === username);

        // Check if user exists and password matches
        if (user && await bcrypt.compare(password, user.password)) {
            return { success: true, message: 'Login successful' };
        } else {
            throw new Error('Invalid email or password');
        }
    } catch (error) {
        // Handle errors
        return { success: false, message: error.message };
    }
}
async function register(username, password) {
    try {
        // Validate input
        if (!username || !password) {
            throw new Error('Username and password are required');
        }

        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const existingUser = await query('SELECT * FROM user WHERE username = ?', [username]);
        if (existingUser.length > 0) {
            throw new Error('Username is already taken');
        }

        // Add new user to the database
        const command = 'INSERT INTO user (username, password) VALUES (?, ?)';
        await query(command, [username, hashedPassword]);

        return { success: true, message: 'Registration successful' };
    } catch (error) {
        // Handle errors
        return { success: false, message: error.message };
    }
}
export {login, register, getUser};