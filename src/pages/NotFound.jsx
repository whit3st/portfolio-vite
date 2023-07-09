import Container from "../components/Container";
import Headline from "../components/Headline";
import SubHeadline from "../components/SubHeadline";

export default function NotFound() {
    return (
        <Container>
            <Headline>Opps!</Headline>
            <SubHeadline>Page Not Found</SubHeadline>
            <img src="/404.gif" className="absolute right-0 md:top-0 top-52 w-96" alt="" loading="lazy" />
        </Container>
    );
}
