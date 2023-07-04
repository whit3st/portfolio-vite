import { motion } from "framer-motion";
import { variants } from "../assets/animations/Animations";
import Description from "./Description";
import FooterLink from "./FooterLink";
export default function Footer() {
    return (
        <motion.footer
            variants={variants}
            className="flex flex-col items-center gap-5 border-t border-[#424874] py-5"
        >
            <section className="flex flex-col items-center">
                <Description>Alican Akyıldız</Description>
                <Description>© 2023</Description>
            </section>

            <section className="flex gap-10">
                <FooterLink
                    href="https://github.com/whit3st"
                    src="github-original.svg"
                />
                <FooterLink
                    href="https://www.linkedin.com/in/alicanakyildiz/"
                    src="linkedin-original.svg"
                />
                <FooterLink
                    href="https://twitter.com/_AlicanAkyildiz"
                    src="twitter-original.svg"
                />
                <FooterLink
                    href="mailto:alican1503@hotmail.com"
                    src="envelope.svg"
                />
            </section>
        </motion.footer>
    );
}
