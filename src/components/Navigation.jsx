import { motion } from "framer-motion";
import PropTypes from 'prop-types';
import { navbar } from "../assets/animations/Animations";

export default function Navigation({ children }) {
    return (
        <motion.nav
            initial="initial"
            animate="animate"
            exit="exit"
            variants={navbar}
            className="flex w-full max-w-[300px] hover:text-gray-400 md:max-w-[450px] justify-between ml-auto transition-all"
        >
            {children}
        </motion.nav>
    );
}

Navigation.propTypes = {
    children: PropTypes.array.isRequired
  }