import { createTransport } from 'nodemailer';

const email = process.env.EMAIL_USER;
const password = process.env.EMAIL_PASSWORD;

export const transporter = createTransport({
    service: "gmail",
    auth: {
        user: email,
        pass: password
    }
});