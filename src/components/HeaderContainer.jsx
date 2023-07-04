import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { navbar } from "../assets/animations/Animations";
export default function HeaderContainer({ children, isScrolled }) {
    let newScrolled = isScrolled / 3
    return (
        <motion.header
            variants={navbar}
            style={{ backgroundColor: `rgba(255,255,255,0.${newScrolled > 99 ? '99': newScrolled})`} }
            className={
                "flex sticky top-0 mx-auto transition-all gap-5 items-center rounded-b-md sm:pr-5 pr-1 text-[#323757] text-md sm:text-xl h-[70px] z-50"
                //  + (isScrolled ? " bg-[rgba(255,255,255,0.95)]" : "")
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
