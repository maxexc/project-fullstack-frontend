import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { authOperations } from "../../redux/users";
import {  
    FiMail, 
    FiLock 
} from "react-icons/fi";
import {
    Container,
    Form,
    FormTitle,
    List,
    ListItem,
    Label,
    Input,
    Button,
    Redirect
} from "./SigninForm.styled";

const SigninForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const handleChange = event => {
        const { name, value } = event.currentTarget;
        switch (name) {
            case 'email':
                return setEmail(value);
            case 'password': 
                return setPassword(value);
            default:
                return;
        }
    };
    
    const handleSubmit = event => {
        event.preventDefault();
        const userData = { email, password };
        dispatch(authOperations.logIn(userData));
        reset();
    }

    const reset = () => {
        setEmail('');
        setPassword('');
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <FormTitle>Sign In</FormTitle>
                <List>
                    <ListItem>
                        <Label
                            htmlFor="emailInput"
                        >
                            <FiMail />
                        </Label>
                        <Input 
                            type="email"
                            name="email"
                            placeholder="Email"
                            id="emailInput"
                            required
                            title="Must be a valid email address"
                            value={email}
                            onChange={handleChange}
                        />
                    </ListItem>
                    <ListItem>
                        <Label
                            htmlFor="passwordInput"
                        >
                            <FiLock />
                        </Label>
                        <Input 
                            type="password"
                            name="password"
                            placeholder="Password"
                            id="passwordInput"
                            required
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                            title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
                            value={password}
                            onChange={handleChange}
                        />
                    </ListItem>
                </List>
                <Button type='submit'>Sign In</Button>
            </Form>
            <Link to={"/register"}>
                <Redirect>Registration</Redirect>
            </Link>
        </Container>
    )
}

export default SigninForm;