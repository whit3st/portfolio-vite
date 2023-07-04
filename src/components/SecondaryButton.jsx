import { motion } from "framer-motion";
import { buttons } from "../assets/animations/Animations";
import PropTypes from "prop-types";

export default function SecondaryButton({ children, to }) {
    return (
        <motion.a
            className="text-lg font-medium sm:text-xl border border-[#424874] hover:bg-[#424874] active:scale-[0.95] hover:text-[#F4EEFF] py-1 px-5 w-max mt-16 transition-all self-end"
            variants={buttons}
            href={to}
            target="_blank"
            rel="noreferrer"
        >
            {children}
        </motion.a>
    );
}
SecondaryButton.propTypes = {
    children: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
};
