import Headline from "../components/Headline";
import Container from "../components/Container";
import SubHeadline from "../components/SubHeadline";
import TechImage from "../components/TechImage";
import TechImageContainer from "../components/TechImageContainer";
import Description from "../components/Description";
export default function About() {
    return (
        <Container>
            <Headline>About Me</Headline>
            <SubHeadline>
                Hi. My name is Alican. Currently I am residing in Turkey. After
                various job experiences, such as photography, translation and
                interpretation, I decided to try coding and fell in love with
                it.
            </SubHeadline>
            <SubHeadline>
                My journey started in November 2022. Since then, with
                determination and ambition, I have been working hard to become a
                developer. I love all sorts of knowledge and always hungry to
                learn more.
            </SubHeadline>
            <Headline>Tech</Headline>
            <SubHeadline>
                Programming Languages
                <TechImageContainer>
                    <TechImage src={"/tech/html5.svg"} alt="HTML5 Logo" />
                    <TechImage src={"/tech/css3.svg"} alt="CSS3 Logo" />
                    <TechImage
                        src={"/tech/javascript.svg"}
                        alt="JavaScript Logo"
                    />
                </TechImageContainer>
            </SubHeadline>
            <SubHeadline>
                Frontend Frameworks
                <TechImageContainer>
                    <TechImage src={"/tech/react.svg"} alt="React Logo" />
                </TechImageContainer>
            </SubHeadline>
            <SubHeadline>
            Static Site Generators
            <TechImageContainer>
                <TechImage src={"/tech/vitejs.svg"} alt="ViteJS Logo" />
                <TechImage src={"/tech/nextjs.svg"} alt="NextJS Logo" />
            </TechImageContainer>
            </SubHeadline>
            <SubHeadline>
                UI Libraries and Component Libraries
                <TechImage src={"/tech/tailwindcss.svg"} alt="Tailwind Logo" />
            </SubHeadline>
            <Description>
                I have some experience working with Redux, Context API, Axios,
                Zustand, Framer Motion etc.
            </Description>
        </Container>
    );
}
