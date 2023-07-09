import PropTypes from 'prop-types';
import { motion } from "framer-motion";
import { variants } from "../assets/animations/Animations";
export default function ProjectImage({ src }) {
  return (
    <motion.img loading='lazy' variants={variants} src={src} alt={src} className='max-w-[280px] md:max-w-[450px] self-center'/>
  )
}
ProjectImage.propTypes = {
    src: PropTypes.string.isRequired
  }