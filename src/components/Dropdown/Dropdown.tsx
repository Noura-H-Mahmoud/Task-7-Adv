import ArrowDown from "@/app/assets/images/svgFiles/ArrowDown";
import Image from "next/image";
import { useState } from "react";
import { ReactNode } from "react";

interface DropdownFieldProps {
    icon: ReactNode | string;
    label: string;
    options: string[];
    placeholder?: string;
    className?: string;
}

const DropdownField: React.FC<DropdownFieldProps> = ({ icon, label, options, placeholder = "Select an option", className }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block">
            <div className={`flex items-start gap-[7px] my-1 md:my-4 pl-0 md:pl-2.5 1410:pl-4 ${className}`}>
                {typeof icon === "string" ? (
                    <Image src={icon} loading="lazy" alt={`${label} Icon`} width={24} height={24} />
                ) : (
                    icon
                )}
                <div>
                    <span className="font-semibold text-blackColor mb-1.5">
                        {label}
                    </span>
                    <button
                        onClick={toggleDropdown}
                        className="flex justify-between items-center 
                        gap-5 w-full text-blackColor opacity-80"
                    >
                        {selectedOption || placeholder}
                        <ArrowDown color="#333333" />
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="absolute mt-2 w-full rounded-md shadow-lg 
                bg-white ring-1 ring-black ring-opacity-5 z-10">
                    <div className="py-1">
                        {options.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => handleOptionClick(option)}
                                className="w-full text-left px-4 py-2 text-lg
                                text-gray-700 hover:bg-gray-100"
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default DropdownField;
