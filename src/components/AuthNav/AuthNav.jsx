import { Link } from "react-router-dom";
import {
    NavContainer,
    RegisterBtn,
    SigninBtn
} from "./AuthNav.styled";

const AuthNav = () => {
    return (
        <NavContainer>
            <Link to={"/register"} style={{color: "inherit"}}>
                <RegisterBtn>
                    Registration
                </RegisterBtn>
            </Link>
            
            <Link to={"/login"} style={{color: "inherit"}}>
                <SigninBtn>
                    Sign in
                </SigninBtn>
            </Link>
        </NavContainer>
    )
}

export default AuthNav;