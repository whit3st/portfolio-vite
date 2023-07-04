import { motion } from "framer-motion";
import { variants } from "../assets/animations/Animations";
import Headline from "../components/Headline";
import Container from "../components/Container";
import SubHeadline from "../components/SubHeadline";
export default function About() {
    return (
        <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <Container>
                <Headline>About Me</Headline>
                <SubHeadline>
                    Hi. My name is Alican. Currently I am residing in Turkey.
                    After various job experiences, such as photography, translation and interpretation,
                    I decided to try coding and
                    fell in love with it.
                </SubHeadline>
                <SubHeadline>
                    My journey started in November 2022. Since then, with
                    determination and ambition, I have been working hard to
                    become a developer. I love all sorts of knowledge and always hungry
                    to learn more.
                </SubHeadline>
                <SubHeadline>
                    
                </SubHeadline>
            </Container>
        </motion.div>
    );
}
