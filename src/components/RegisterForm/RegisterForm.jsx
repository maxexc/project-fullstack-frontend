import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { authOperations } from "../../redux/users";
import { 
    FiUser, 
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
} from "./RegisterForm.styled";

const RegisterForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const handleChange = event => {
        const { name, value } = event.currentTarget;
        switch (name) {
            case 'username':
                return setUsername(value);
            case 'email':
                return setEmail(value);
            case 'password': 
                return setPassword(value);
            default:
                return;
        }
    };
    
    const handleSubmit = async event => {
        event.preventDefault();
        const userData = { username, email, password };
        const registration = await dispatch(authOperations.register(userData));
        
        if (registration.meta.requestStatus === "fulfilled") {
            dispatch(authOperations.logIn({ email, password }));
        }

        reset();
    }

    const reset = () => {
        setUsername('');
        setEmail('');
        setPassword('');
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <FormTitle>Registration</FormTitle>
                <List>
                    <ListItem>
                        <Label
                            htmlFor="usernameInput"
                        >
                            <FiUser />
                        </Label>
                        <Input 
                            type="text"
                            name="username"
                            placeholder="Name"
                            id="usernameInput"
                            required
                            value={username}
                            onChange={handleChange}
                        />
                    </ListItem>
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
                <Button type='submit'>Sign Up</Button>
            </Form>
            <Link to={"/login"}>
                <Redirect>Sign In</Redirect>
            </Link>
        </Container>
    )
}

export default RegisterForm;