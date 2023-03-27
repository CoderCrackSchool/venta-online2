import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../contexts/user.context.user';
import { createUserDocumentFormAuth, signInAuthUserWithEmailAndPassword, signInWithGooglePopup } from '../../utils/firebase/firebase';
import Button from '../button/button';
import './sign-in-form.css';

const SignInForm = () => {

    const { setCurrentUser } = useContext(UserContext)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();


    const resetFormValues = () => {
        reset({
            email: "",
            password: "",
        })
    }

    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        await createUserDocumentFormAuth(response.user.uid, response.user.displayName, response.user.email);
        setCurrentUser(response.user)
    }

    const onHandleSubmit = async (data) => {
        try {
            const response = await signInAuthUserWithEmailAndPassword(data.email, data.password);
            setCurrentUser(response.user);
            resetFormValues();
        } catch (error) {
            console.log('user sign in failed', error);
        }
    }

    return (
        <div className='sign-in-container'>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit(onHandleSubmit)}>
                <div className='group'>
                    <label className='form-input-label'> Email </label>
                    <input
                        className='form-input'
                        {...register("email", { required: true, pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/ })}
                    />

                    {errors?.email?.type === "required" && <p>Email is required.</p>}
                    {errors?.email?.type === "pattern" && <p>Email is incorrect.</p>}
                </div>

                <div className='group'>
                    <label className='form-input-label'>Password</label>
                    <input
                        type="password"
                        className='form-input'
                        {...register("password", { required: true })}
                    />

                    {errors?.password?.type === "required" && <p>Password is required.</p>}

                </div>
                <div className='buttons-container'>
                    <Button text="Sign In" />
                    <Button type="button" text="Sign In with Google" buttonClass="google-sign-in" onClick={logGoogleUser} />
                </div>
            </form>

        </div>
    );
};

export default SignInForm;