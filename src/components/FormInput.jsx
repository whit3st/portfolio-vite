import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { variants } from "../assets/animations/Animations";
export default function FormInput({ type, name, placeholder }) {
    return (
        <>
        <label htmlFor={name} className="self-start">{placeholder}</label>
        <motion.input
            variants={variants}
            type={type}
            name={name}
            placeholder={placeholder}
            className="bg-transparent h-[42px] px-2 border border-[#424874]"
        />
        </>
        
    );
}

FormInput.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired
};
