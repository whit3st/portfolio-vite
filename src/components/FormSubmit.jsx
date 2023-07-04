import { motion } from "framer-motion";
import { buttons } from "../assets/animations/Animations";
export default function FormSubmit() {
    return (
        <motion.input
            type="submit"
            variants={buttons}
            className="text-lg cursor-pointer font-medium sm:text-2xl border border-[#424874] hover:bg-[#424874] active:scale-[0.95] hover:text-[#F4EEFF] py-1 px-5 w-max transition-all self-end"
        />
    );
}
