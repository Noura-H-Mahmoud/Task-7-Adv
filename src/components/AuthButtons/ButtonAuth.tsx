'use client'
interface DataProps {
    onClick: () => void;
    textButton: string;
    isActive: boolean;
}

export default function Button({ textButton, onClick, isActive }: DataProps) {
    return (
        <button
            onClick={onClick}
            className={`flex justify-center items-center desctopHuge:text-xl
                rounded-50raduis h-47 font-medium desctopHuge:font-semibold
                ${isActive ? 'w-120 2xl:w-[168px] bg-mainColor':'w-[77px]'}`}
        >
            {textButton}
        </button>
    );
}