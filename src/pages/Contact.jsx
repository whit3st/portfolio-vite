import { useState } from "react";
import { motion } from "framer-motion";
import { variants } from "../assets/animations/Animations";
import FormInput from "../components/FormInput";
import FormTextArea from "../components/FormTextArea";
import FormSubmit from "../components/FormSubmit";
import Container from "../components/Container";
import SubHeadline from "../components/SubHeadline";
import Headline from "../components/Headline";
export default function Contact() {
    const [result, setResult] = useState("");
    if (result.length > 0) {
        setTimeout(() => {
            setResult("");
        }, 4500);
    }
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");
        if (!name) {
            setResult("Name can not be empty.");
        } else if (!email) {
            setResult("Email can not be empty.");
        } else if (!message) {
            setResult("Message can not be empty.");
        } else {
            setResult("Sending....");

            formData.append(
                "access_key",
                "7cd7ea6c-d58f-4fd8-a935-aedbd796e217"
            );

            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            }).then((res) => res.json());

            if (res.success) {
                console.log("Success", res);
                setResult('Your message has been sent.');
            } else {
                console.log("Error", res);
                setResult(res.message);
            }
        }
    };
    return (
        <Container>
            <Headline>Contact Me</Headline>
            <motion.form
                variants={variants}
                onSubmit={onSubmit}
                className="flex flex-col gap-5 text-center"
            >
                <FormInput type="text" name="name" placeholder="Name" />
                <FormInput type="email" name="email" placeholder="Email" />
                <FormTextArea name="message"></FormTextArea>
                <FormSubmit />
                <SubHeadline>{result}</SubHeadline>
            </motion.form>
        </Container>
    );
}
