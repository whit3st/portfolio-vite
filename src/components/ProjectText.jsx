import PropTypes from 'prop-types';
import { motion } from "framer-motion";
import { variants } from "../assets/animations/Animations";

export default function ProjectText({ children }) {

  return (
    <motion.div variants={variants} className='flex flex-col justify-between gap-5'>
      {children}
    </motion.div>
  )
}
ProjectText.propTypes = {
    children: PropTypes.array.isRequired
  }