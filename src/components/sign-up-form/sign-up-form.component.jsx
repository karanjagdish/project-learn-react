import {
    //  useContext,
    useState,
} from "react";
import FormInput from "../form-input/form-input.component";
import "./sign-up-form.styles.scss";
import Button from "../button/button.component";
import { useDispatch } from "react-redux";
import { signUpStart } from "../../store/user/user.action";
// import { UserContext } from "../../contexts/user.context";

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
};

const SignUpForm = () => {
    const dispatch = useDispatch();
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    // const { setCurrentUser } = useContext(UserContext);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (confirmPassword.localeCompare(password) !== 0) {
            alert("Password does not match");
            return;
        }

        //Check if user exists
        //Create user
        try {
            dispatch(signUpStart(email, password, displayName));
            // const { user } = await creathAuthUserWithEmailAndPassword(
            //     email,
            //     password
            // );
            // await createUserDocumentFromAuth(user, { displayName });
            // setCurrentUser(user);
            resetFormFields();
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                alert("Cannot create user, email already in user");
            } else {
                console.log("User creation encountered an error", error);
            }
        }
    };

    // Helper function that renders form input to the screen
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Display Name"
                    type="text"
                    name="displayName"
                    id="displayName"
                    onChange={handleChange}
                    value={displayName}
                    required
                />
                <FormInput
                    label="Email"
                    type="email"
                    name="email"
                    id="email"
                    onChange={handleChange}
                    value={email}
                    required
                />
                <FormInput
                    label="Password"
                    type="password"
                    name="password"
                    id="password"
                    onChange={handleChange}
                    value={password}
                    required
                />
                <FormInput
                    label="Confirm Password"
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    onChange={handleChange}
                    value={confirmPassword}
                    required
                />
                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    );
};

export default SignUpForm;
