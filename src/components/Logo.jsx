import { motion } from "framer-motion";
import { navbar } from "../assets/animations/Animations";
export default function Logo() {

    return (
        <motion.img
            initial="initial"
            animate="animate"
            exit="exit"
            variants={navbar}
            src="/LogoDefault.svg"
            alt="logo"
            className={"min-w-[80px] sm:min-w-[120px] mix-blend-difference"}
        />
    );
}
