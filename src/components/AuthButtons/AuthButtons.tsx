'use client'
import { useState } from "react";
import ButtonAuth from "./ButtonAuth";
import FormAuth from "../FormAuth/FormAuth";
import CheckBox from "../FormAuth/CheckBox";
import QuestionPassword from "../FormAuth/QuestionPassword";

export default function AuthButtons() {
    const [showPopUp, setShowPopUp] = useState(false);
    const [activeButton, setActiveButton] = useState('Sign Up');

    const handleShow = (buttonName: string) => {
        setShowPopUp(true);
        setActiveButton(buttonName);
    };

    const handleClose = () => {
        setShowPopUp(false);
        setActiveButton('Sign Up');
    };

    const links = [
        { text: 'Login', onClick: () => handleShow('Login') },
        { text: 'Sign Up', onClick: () => handleShow('Sign Up') },
    ];
    const dataSignUp = {
        h2: 'Create Account',
        text: 'Sign Up',
        textGoogle: 'Sign In with Google',
        question: 'Already have an account? ',
        clickNavigate: () => handleShow('Login'),
        linkNavigate: 'Log In',
        component: <CheckBox />,
        onClick: handleClose,
        inputs: [
            {
                label: 'Name and Surname',
                placeholder: 'Enter your name and surname',
                name: 'name',
                type: 'text',
            },
            {
                label: 'Email Address',
                placeholder: 'Enter your email address',
                name: 'email',
                type: 'email',
            },
            {
                label: 'Password',
                placeholder: 'Enter your password',
                name: 'password',
                type: 'password',
            },
        ]
    }
    const dataLogin = {
        h2: 'Login',
        text: 'Sign In',
        textGoogle: 'Sign In with Google',
        question: 'Don’t have an account ?  ',
        clickNavigate: () => handleShow('Sign Up'),
        linkNavigate: ' Sign Up',
        classh2: 'mb-6',
        classLastLine: 'mt-6',
        component: <QuestionPassword />,
        onClick: handleClose,
        inputs: [
            {
                label: 'Email Address',
                placeholder: 'Enter your email address',
                name: 'email',
                type: 'email',
            },
            {
                label: 'Password',
                placeholder: 'Enter your password',
                name: 'password',
                type: 'password',
            },
        ]
    }
    return (
        <div>
            <div className="flex items-center gap-2.5">
                {links.map((link, index) => (
                    <ButtonAuth
                        key={index}
                        onClick={link.onClick}
                        textButton={link.text}
                        isActive={activeButton === link.text}
                    />
                ))}
            </div>
            {showPopUp && (
                <div className="h-screen absolute inset-0 flex items-center justify-center bg-blackColor bg-opacity-80">
                    <div className="w-[488px] relative z-10">
                        {activeButton === 'Login' && <FormAuth data={dataLogin} />}
                        {activeButton === 'Sign Up' && <FormAuth data={dataSignUp} />}
                    </div>
                </div>
            )}
        </div>
    )
}

