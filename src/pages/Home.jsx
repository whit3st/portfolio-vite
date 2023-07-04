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
        <>
            <Container>
                <Headline>Alican Akyıldız</Headline>
                <SubHeadline>Jr. Frontend Developer</SubHeadline>
                <Button to="/contact">Contact Me</Button>
                <ScrollDownAnimation />
            </Container>
            <Headline>Projects</Headline>
            <ProjectContainer>
                <ProjectImage src="skyvibes.webp" />
                <ProjectText>
                    <SubHeadline>skyvibes.app</SubHeadline>
                    <Description>
                        Skyvibes.app is a forecast website that displays current
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
        </>
    );
}
