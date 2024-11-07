import eyeFailed from '@/app/assets/images/eyeFailed.svg'
import eyeOpened from '@/app/assets/images/eyeOpened.svg'
import Image from 'next/image';
import { useState } from 'react';
interface InputProps {
    label: string;
    placeholder: string;
    type: string;
    name: string;
    Class?: string;
}
export default function Inputs({ inputs }: { inputs: InputProps[] }) {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div>
            {inputs.map((input, index: number) => (
                <div key={index}>
                    <label htmlFor={input.name} className="h-25 mb-2.5 inline-block font-semibold opacity-60">
                        {input.label}
                    </label>
                    <div className="relative mb-5">
                        <input
                            type={input.name === 'password' && showPassword ? 'text' : input.type}
                            id={input.name}
                            name={input.name}
                            placeholder={input.placeholder}
                            className={`h-50 px-6 w-full text-base text-left rounded-lg focus:outline-none focus:ring-2 focus:ring-mainColor border border-[#33333333] opacity-50 ${input.Class} ${input.name === 'password' ? 'h-[52px]' : ''}`}
                        />
                        {input.name === 'password' && (
                            <Image
                                src={showPassword ? eyeOpened : eyeFailed}
                                alt={showPassword ? 'opened eye icon' : 'closed eye icon'}
                                onClick={togglePasswordVisibility}
                                className="absolute right-6 top-1/2 transform -translate-y-1/2 cursor-pointer"
                            />
                        )}
                    </div>
                </div>
            ))}
        </div>
    )
}
