import { useState } from "react"
import UsernameInput from "../components/login/UsernameInput"
import * as Form from '@radix-ui/react-form';
import EmailInput from "../components/shared/EmailInput";
import PasswordInput from "../components/shared/PasswordInput";
import RoundedButton from "../components/shared/RoundedButton";
import RegisIllust from "../assets/SignUp & SignIn/regis-illustration-3.png"
import {Link} from 'react-router-dom'


const Register = () => {
    const [registerEmail, setRegisterEmail] = useState("")
    const [registerPassword, setRegisterPassword] =  useState("")
    const [registerUsername, setRegisterUsername] = useState("")

    const handleEmailInput = (newVal) => {
        setRegisterEmail(newVal)
    }

    const handlePasswordInput = (newVal) => {
        setRegisterPassword(newVal)
    }
    

    const handleUsernameInput = (newVal) => {
        setRegisterUsername(newVal)
    }
    return (
        <div className="flex h-screen w-full bg-black">
            <div className="basis-1/2 w-full flex flex-col px-16 gap-6">
                <div className="text-2xl text-white font-semibold py-14">Vinctagram</div>
                <div className="text-2xl text-white font-semibold">Create your Vinctagram Account</div>
                <div className="text-xl text-neutral-300 opacity-40">Sign up now to connect to the real world!</div>
                <Form.Root className="gap-4">
                    <UsernameInput username={registerUsername} onUsernameInput={handleUsernameInput}/> 
                    <EmailInput email={registerEmail} onEmailInput={handleEmailInput} />
                    <PasswordInput password={registerPassword} onPasswordInput={handlePasswordInput} />
                </Form.Root>
                <RoundedButton color="violet" text="Create Account"/>
                <div className="text-white hover:text-neutral-400 w-auto">
                    <Link to='/login'>
                        Already have an account? Login Now
                    </Link>
                </div>
            </div>
            <div className="basis-1/2 w-full h-full flex justify-center items-center px-8 py-8">
                <div className="bg-neutral-950 w-full h-full rounded-xl flex justify-center items-center">
                    <img src={RegisIllust} className="object-cover h-full opacity-75 rounded-xl" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Register;