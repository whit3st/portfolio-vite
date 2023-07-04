import { motion } from "framer-motion";
import { variants } from "../assets/animations/Animations";
import PropTypes from 'prop-types';

export default function Description({ children }) {
    return (
        <motion.p
            variants={variants}
            className="tracking-wide text-xl"
        >
            {children}
        </motion.p>
    );
}
Description.propTypes = {
    children: PropTypes.string.isRequired
  }