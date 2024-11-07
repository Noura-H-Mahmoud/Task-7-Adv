interface DataProps {
    span: string;
    para: string;
}
export default function CompanyInfo({ items }: { items: DataProps[] }) {
    return (
        <div className="w-full sm:w-[68.42857%] h-[90px] flex gap-4 desctopHuge:gap-[50px]">
            {items.map((item, index: number) => (
                <div key={index}>
                    <span className="text-xl sm:text-[32px] text-mainColor font-bold">{item.span}</span>
                    <p className="leading-[26px] text-xs sm:text-base mt-1.5 opacity-60">{item.para}</p>
                </div>
            ))}
        </div>
    )
}
