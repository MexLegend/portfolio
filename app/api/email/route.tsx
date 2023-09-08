import { NextResponse } from "next/server";
import { render } from '@react-email/render';

import ContactEmailTemplate from '@/app/components/ContactEmailTemplate';
import { transporter } from "@/helpers/nodemailer";

export async function POST(request: Request) {
    const { email, message, firstName, lastName } = await request.json();

    console.log(transporter);
    

    const options = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: "Portfolio Contact Form",
        html: render(<ContactEmailTemplate email={email} message={message} firstName={firstName} lastName={lastName} />)
    }

    try {

        const response = await transporter.sendMail(options);

        return NextResponse.json({ success: true, response });

    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: error });
    }
}