import jwt from "jsonwebtoken"

export const createToken = async (data) => {
    try {
        const token = await jwt.sign(data, process.env.SECRET, { expiresIn: '7d' });
        console.log('Token Created:', token); // Log the token
        return token;
    } catch (error) {
        console.error('Error creating token:', error);
    }
};
