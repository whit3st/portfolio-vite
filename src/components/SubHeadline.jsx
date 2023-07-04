import { motion } from "framer-motion";
import { variants } from "../assets/animations/Animations";
import PropTypes from 'prop-types';

export default function SubHeadline({ children }) {
    return (
        <motion.h2
            variants={variants}
            className="text-2xl sm:text-4xl tracking-wide"
        >
            {children}
        </motion.h2>
    );
}
SubHeadline.propTypes = {
    children: PropTypes.string.isRequired
  }