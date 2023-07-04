import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { navbar } from "../assets/animations/Animations";
export default function HeaderContainer({ children, isScrolled }) {
    return (
        <motion.header
            variants={navbar}
            className={
                "flex sticky top-0 mx-auto transition-all gap-5 items-center rounded-b-md sm:pr-5 pr-1 text-[#323757] text-md sm:text-xl h-[70px] z-50" + 
                (isScrolled ? " bg-[#ffffff91]" : "")
            }
        >
            {children}
        </motion.header>
    );
}

HeaderContainer.propTypes = {
    children: PropTypes.array.isRequired,
    isScrolled: PropTypes.bool.isRequired,
};