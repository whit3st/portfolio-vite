import { motion } from "framer-motion";
import { variants } from "../assets/animations/Animations";
import PropTypes from 'prop-types';

export default function Headline({ children }) {
    return (
        <motion.h1
            variants={variants}
            className="text-5xl sm:text-7xl mt-10 lg:text-8xl font-bold tracking-wide"
        >
            {children}
        </motion.h1>
    );
}
Headline.propTypes = {
    children: PropTypes.string.isRequired
  }