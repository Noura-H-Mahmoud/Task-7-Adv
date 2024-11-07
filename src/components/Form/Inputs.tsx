import Input from "./Input";

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

export default function Inputs({ inputs }: { inputs: InputProps[] }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 md:gap-30">
            {inputs.map((input, index: number) => (
                <Input
                    key={index}
                    label={input.label}
                    placeholder={input.placeholder}
                    type={input.type}
                    name={input.name}
                    options={input.options}
                    Class={input.Class}
                    classMain={input.classMain}
                    component={input.component}
                    src={input.src}
                />
            ))}
        </div>
    );
}
