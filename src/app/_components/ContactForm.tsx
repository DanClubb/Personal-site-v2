"use client";

import { sendEmail } from "@/actions/sendEmail";
import { MouseEvent, useRef, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import styles from "../styles/contact-form.module.css";

const initialState = {
    name: "",
    email: "",
    subject: "",
    message: "",
};

export default function ContactForm() {
    const [state, formAction] = useFormState(sendEmail, initialState);
    const formRef = useRef<HTMLFormElement>(null);
    return (
        <form
            className={styles.form}
            action={(formData) => {
                formAction(formData);
                if (state.message === "success") formRef.current?.reset();
            }}
            ref={formRef}
        >
            <h1>Contact Me</h1>
            <input
                type="text"
                placeholder="Name"
                name="senderName"
                className={styles.formInput}
                required
            />
            <input
                type="email"
                placeholder="Email"
                name="senderEmail"
                className={styles.formInput}
                required
            />
            <input
                type="text"
                placeholder="Subject"
                name="subject"
                className={styles.formInput}
            />
            <textarea
                placeholder="Message"
                name="message"
                className={styles.formInput}
                required
            ></textarea>
            <SubmitButton />
        </form>
    );
}

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <>
            <button
                type="submit"
                disabled={pending}
                style={pending ? { backgroundColor: "white" } : {}}
                className={styles.submitButton}
            >
                {pending ? "Loading..." : "Submit"}
            </button>
        </>
    );
}
