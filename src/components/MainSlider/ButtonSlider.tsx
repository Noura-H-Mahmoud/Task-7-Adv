interface DataProps {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    ariaLabel: string;
    component: React.ReactNode;
    className: string;
}
export default function ButtonSlider({ onClick, ariaLabel, component, className }: DataProps) {
    return (
        <button
            onClick={onClick}
            className={`w-50 h-50 flex items-center justify-center transition rounded-full bg-garyColor ${className}`}
            aria-label={ariaLabel}
        >
            <div className="w-3.5 h-[7px] flex items-center justify-center ">{component}</div>
        </button>
    )
}
