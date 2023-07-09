import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { variants } from "../assets/animations/Animations";
export default function TechImage({ src, alt }) {
    return (
        <div className="flex flex-col gap-3 items-center w-max">
            <motion.img
                name="techImage"
                className="mt-5"
                src={src}
                alt={alt}
                width={50}
                height={50}
                variants={variants}
                loading="lazy"
            />
            <motion.label className="text-2xl " htmlFor="techImage" variants={variants}>
                {alt.split(" ").shift()}
            </motion.label>
        </div>
    );
}

TechImage.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};
