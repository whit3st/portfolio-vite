import { motion } from "framer-motion";
import { variants } from "../assets/animations/Animations";
import Button from "../components/Button";
import ButtonContainer from "../components/ButtonContainer";
import Container from "../components/Container";
import Description from "../components/Description";
import Headline from "../components/Headline";
import ProjectContainer from "../components/ProjectContainer";
import ProjectImage from "../components/ProjectImage";
import ProjectText from "../components/ProjectText";
import ScrollDownAnimation from "../components/ScrollDownAnimation";
import SecondaryButton from "../components/SecondaryButton";
import SubHeadline from "../components/SubHeadline";
export default function Home() {
    return (
        <motion.div variants={variants} initial="initial" animate="animate" exit="exit">
            <Container>
                <Headline>Alican Akyıldız</Headline>
                <SubHeadline>Jr. Frontend Developer</SubHeadline>
                <Button to="/contact">Contact Me</Button>
                <ScrollDownAnimation />
            </Container>
            <Headline>Projects</Headline>
            <ProjectContainer>
                <ProjectImage src="lotrdle.webp" />
                <ProjectText>
                    <SubHeadline>Lotrde</SubHeadline>
                    <Description>
                        Lotrdle is a Lord of the Rings wordle game.
                        Each day, game selectes a different character from Lord of the Rings and you try to guess the character.
                    </Description>
                    <ButtonContainer>
                        <SecondaryButton to="https://lotrdle.vercel.app/">
                            Website
                        </SecondaryButton>
                        <SecondaryButton to="https://github.com/whit3st/wordle-lotr">
                            Code
                        </SecondaryButton>
                    </ButtonContainer>
                </ProjectText>
            </ProjectContainer>
            <ProjectContainer>
                <ProjectImage src="skyvibes.webp" />
                <ProjectText>
                    <SubHeadline>Skyvibes</SubHeadline>
                    <Description>
                        Skyvibes is a forecast website that displays current
                        weather conditions and provides a seven-day forecast.
                    </Description>
                    <ButtonContainer>
                        <SecondaryButton to="https://skyvibes.vercel.app/">
                            Website
                        </SecondaryButton>
                        <SecondaryButton to="https://github.com/whit3st/skyvibes">
                            Code
                        </SecondaryButton>
                    </ButtonContainer>
                </ProjectText>
            </ProjectContainer>
            <ProjectContainer>
                <ProjectImage src="theeaters.webp" />
                <ProjectText>
                    <SubHeadline>The Eaters</SubHeadline>
                    <Description>
                        The Eaters is a simple and user-friendly website that
                        provides you with the recipes of the given dish or
                        cocktail. With The Eaters, you can easily learn how to
                        create a dish of your choice!
                    </Description>
                    <ButtonContainer>
                        <SecondaryButton to="https://theeaters.vercel.app/">
                            Website
                        </SecondaryButton>
                        <SecondaryButton to="https://github.com/whit3st/recipe-next">
                            Code
                        </SecondaryButton>
                    </ButtonContainer>
                </ProjectText>
            </ProjectContainer>
        </motion.div>
    );
}
