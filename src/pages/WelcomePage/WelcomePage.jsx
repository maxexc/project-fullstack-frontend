import WelcomePageHero from "components/WelcomePageHero";
import AuthNav from "components/AuthNav";
import { Container } from "./WelcomePage.styled";

const WelcomePage = () => {
    return (
        <Container>
            <WelcomePageHero />
            <AuthNav />
        </Container>
    );
}

export default WelcomePage;