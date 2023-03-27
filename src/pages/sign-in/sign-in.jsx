import { useContext } from "react";
import { Navigate } from "react-router-dom";
import SignInForm from "../../components/sign-in-form/sign-in-form";
import SignUpForm from "../../components/sign-up-form/sign-up-form";
import { UserContext } from "../../contexts/user.context.user";
import "./sign-in.css"

const SignIn = () => {

    const { currentUser } = useContext(UserContext)

    return (
        <div className="authentication-container">
            {currentUser && (
                <Navigate to="/" />
            )}
            <SignInForm />
            <SignUpForm />
        </div>

    )
}

export default SignIn;