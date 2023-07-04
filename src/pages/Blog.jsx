import { motion } from "framer-motion";
import { variants } from "../assets/animations/Animations";
import Container from "../components/Container";
import Headline from "../components/Headline";
import SubHeadline from "../components/SubHeadline";
export default function Blog() {
    return (
        <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <Container>
                <Headline>Blog</Headline>
                <SubHeadline>Work in progress.</SubHeadline>
            </Container>
        </motion.div>
    );
}
