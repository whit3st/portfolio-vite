import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { variants } from "../assets/animations/Animations";
export default function FormTextArea({ name }) {
    return (
        <>
            <label htmlFor={name} className="self-start">{'Message'}</label>
            <motion.textarea
                variants={variants}
                placeholder="Message"
                name={name}
                className="resize-none border p-2 h-40 border-[#424874] bg-transparent"
            ></motion.textarea>
        </>
    );
}

FormTextArea.propTypes = {
    name: PropTypes.string.isRequired,
};
