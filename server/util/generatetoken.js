import jwt from 'jsonwebtoken';
const SECRET_KEY = 'NOTES_API_JAINSS'

const generateToken = (id) => {
    const JWT_KEY = SECRET_KEY;
    return jwt.sign({ id }, JWT_KEY, { expiresIn: '30d' })
}
export default generateToken;