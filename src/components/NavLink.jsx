import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { navbar } from "../assets/animations/Animations";
import { Link } from "react-router-dom";
export default function NavLink({ children, to }) {
    return (
        <motion.h2 variants={navbar} className="mix-blend-darken hover:text-[#323757] font-medium">
            <Link to={to.length > 0 ? to : '/'}>{children}</Link>
        </motion.h2>
    );
}
NavLink.propTypes = {
    children: PropTypes.any.isRequired,
    to: PropTypes.string.isRequired
};
