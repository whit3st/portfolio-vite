import { motion } from "framer-motion";
import { variants } from "../assets/animations/Animations";
import PropTypes from 'prop-types';

export default function Container({ children }) {

  return (
    <motion.main
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex flex-col pt-[5vh] min-h-[95svh] gap-10 relative"
        >
            {children}
        </motion.main>
  )
}
Container.propTypes = {
    children: PropTypes.array.isRequired
  }