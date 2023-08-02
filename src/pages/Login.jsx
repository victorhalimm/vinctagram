import HomeIllust from '../assets/Home/home-illust.png'
import * as Form from '@radix-ui/react-form';
import RoundedButton from '../components/shared/RoundedButton';
import EmailInput from '../components/shared/EmailInput';
import PasswordInput from '../components/shared/PasswordInput';
import { useState } from 'react';
import {signInWithEmailAndPassword} from "firebase/auth"
import {auth } from '../firebase-config'
import * as Separator from '@radix-ui/react-separator';
import { Link } from 'react-router-dom';


const Login = () => {
    const [loginEmail, setloginEmail] = useState("")
    const [loginPassword, setloginPassword] =  useState("")

    const handleEmailInput = (newVal) => {
        setloginEmail(newVal)
    }

    const handlePasswordInput = (newVal) => {
        setloginPassword(newVal)
    }

    const doLogin = async () => {
        console.log("doing login")
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            )
            
            console.log(user)
        }
        catch(error) {
            console.log(error.message)
        }
    }
    
    return (
        <div className="h-screen w-full flex">
            <div className="basis-1/2">
                <img src={HomeIllust} className='w-full h-full object-cover' alt="" />
            </div>
            <div className='basis-1/2 flex flex-col justify-center gap-10 items-stretch'>
                <div className="text-4xl font-extrabold">Hey, Hello!</div>
                <div className='text-xl opacity-50'>Enter the credentials you have registered!</div>
                <div className='flex flex-col gap-3'>
                    <Form.Root className='flex flex-col gap-4'>
                        <EmailInput onEmailInput={handleEmailInput} email={loginEmail}/>
                        <PasswordInput onPasswordInput={handlePasswordInput} password={loginPassword}/>
                        <RoundedButton click={doLogin} text="Login"/>
                    </Form.Root>
                    <Separator.Root className='w-1 bg-gray-300 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-2/3'></Separator.Root>
                    <RoundedButton color="light" text="Continue with Google" icon="https://img.icons8.com/color/48/google-logo.png"/>
                    <div className='w-full'>
                        <div className='text-gray-400 hover:text-gray-700 duration-100'>
                            <Link to='/register'>Don't have an account? Register Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;