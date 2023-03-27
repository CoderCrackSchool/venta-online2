import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../contexts/user.context.user';
import { createAuthUserWithEmailAndPassword, createUserDocumentFormAuth } from '../../utils/firebase/firebase';
import Button from '../button/button';
import './sign-up-form.css';

const defaultValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
};

const SignUpForm = () => {

    const { setCurrentUser } = useContext(UserContext)

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        reset
    } = useForm({ defaultValues });

    const resetFormValues = () => {
        reset({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        })
    }

    const onHandleSubmit = async (data) => {

        console.log(data)
        try {
            const response = await createAuthUserWithEmailAndPassword(data.email, data.password)
            await createUserDocumentFormAuth(response.user.uid, data.name, response.user.email)
            setCurrentUser(response.user)
            //resetFormValues()
            reset()
        } catch (error) {
            alert(error)
        }
    }



    return (
        <div className='sign-in-container'>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit(onHandleSubmit)}>

                <div className='group'>
                    <label className='form-input-label'> Name </label>
                    <input
                        className='form-input'
                        {...register("name", { required: true, pattern: /^\w+/ })}
                    />

                    {errors?.name?.type === "required" && <p>Email is required.</p>}
                    {errors?.name?.type === "pattern" && <p>Name is incorrect.</p>}
                </div>

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
                        {...register("password", { required: true, pattern: /(?=.*[0-9a-zA-Z]).{6,}/ })}
                    />

                    {errors?.password?.type === "required" && <p>Password is required.</p>}
                    {errors?.password?.type === "pattern" && <p>The password should have 6 caracter.</p>}


                </div>

                <div className='group'>
                    <label className='form-input-label'>Password</label>
                    <input
                        type="password"
                        className='form-input'
                        {...register("confirmPassword", { required: true, pattern: /(?=.*[0-9a-zA-Z]).{6,}/ })}
                    />

                    {errors?.confirmPassword?.type === "required" && <p>Password is required.</p>}
                    {watch("password") !== watch("confirmPassword") && <p>Passwords do not match.</p>}
                    {errors?.password?.type === "pattern" && <p>The password should have 6 caracter.</p>}


                </div>

                <div className='buttons-container'>
                    <Button type='submit' text="Sign Up" />
                </div>
            </form>

        </div>
    );
};

export default SignUpForm;