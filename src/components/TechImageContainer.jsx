import PropTypes from "prop-types"
import { motion } from "framer-motion"
import { variants } from "../assets/animations/Animations"
export default function TechImageContainer({children}) {
    const widthLength = children.length;

  return (
    <motion.div style={{maxWidth: 90 * widthLength + 'px'}} className="flex justify-between mb-10" initial="initial" animate="animate" exit="exit" variants={variants}>
        {children}
    </motion.div>
  )
}

TechImageContainer.propTypes = {
  children: PropTypes.array.isRequired
}
