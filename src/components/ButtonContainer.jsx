import PropTypes from 'prop-types';
import { motion } from "framer-motion";
import { variants } from "../assets/animations/Animations";

export default function ButtonContainer({ children }) {
  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={variants} className='flex gap-10 justify-end' >
      {children}
    </motion.div>
  )
}
ButtonContainer.propTypes = {
    children: PropTypes.array.isRequired
  }