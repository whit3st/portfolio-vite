import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { buttons } from "../assets/animations/Animations";
import PropTypes from 'prop-types';

export default function Button({children,to}) {
    return (
        <motion.button
            variants={buttons}
            className="text-lg font-medium sm:text-2xl border border-[#424874] hover:bg-[#424874] active:scale-[0.95] hover:text-[#F4EEFF] py-1 px-5 w-max mt-16 transition-all self-end"
        >
             <Link to={to}>{children}</Link>
        </motion.button>
    );
}
Button.propTypes = {
    children: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
  }