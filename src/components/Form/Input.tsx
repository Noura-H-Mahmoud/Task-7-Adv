import ArrowDown from "@/app/assets/images/svgFiles/ArrowDown";

interface InputProps {
    label: string;
    placeholder: string;
    type: string;
    name: string;
    Class?: string;
    classMain?: string;
    options?: string[];
    component?: React.ReactNode;
    src?: string;
}

const Input: React.FC<InputProps> = ({ label, placeholder, type, name, Class, classMain, options, component, src }) => {
    return (
        <div className={`h-[83px] flex flex-col ${classMain}`}>
            <label htmlFor={name} className="mb-2 font-semibold leading-[24.51px]">
                {label}
            </label>
            {type === "select" && options ? (
                <div className="relative flex items-center">
                    <select
                        id={name}
                        name={name}
                        className="h-50 w-full px-6 text-base rounded-lg focus:outline-none focus:ring-2 focus:ring-mainColor text-grayCustom appearance-none text-left"
                        defaultValue=""
                    >
                        <option value="" disabled hidden>
                            {placeholder}
                        </option>
                        {options.map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                    <div className="absolute right-6 pointer-events-none flex items-center">
                        <ArrowDown color="#333333" />
                    </div>
                </div>
            ) : (
                <div className="relative flex items-center">
                    <input
                        type={type}
                        id={name}
                        name={name}
                        placeholder={placeholder}
                        className={`h-50 pr-10 pl-4 w-full text-base text-left rounded-lg focus:outline-none focus:ring-2 focus:ring-mainColor ${Class}`}
                    />
                    <div className="absolute right-6 pointer-events-none flex items-center">
                        {component}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Input;
