"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_KEY);

export const sendEmail = async (prevState: any, formData: FormData) => {
    const senderName = formData.get("senderName");
    const senderEmail = formData.get("senderEmail");
    const subject = formData.get("subject");
    const message = formData.get("message");

    if (!validateString(senderName)) {
        console.log("invalid name");
        return {
            message: "invalid name",
        };
    }

    if (!validateString(senderEmail)) {
        console.log("invalid email");
        return {
            message: "invalid email",
        };
    }

    if (!validateString(subject)) {
        console.log("invalid subject");
        return {
            message: "invalid subject",
        };
    }

    if (!validateString(message)) {
        console.log("invalid message");
        return {
            message: "invalid message",
        };
    }

    try {
        await resend.emails.send({
            from: "Website Contact Form <onboarding@resend.dev>",
            to: "danclubb18@gmail.com",
            subject: subject as string,
            replyTo: senderEmail as string,
            text: `${message as string} \n from ${senderName as string} - ${
                senderEmail as string
            }`,
        });
        return { message: "success" };
    } catch (e) {
        return { message: "failed" };
    }
};

const validateString = (value: unknown) => {
    if (!value || typeof value !== "string") return false;
    else return true;
};
