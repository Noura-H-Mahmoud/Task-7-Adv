export default function Text({ text }: { text: string }) {
    return (
        <div className="text-white md:text-2xl font-bold md:leading-[32.68px] px-[47.63px] text-center">
            {text}
        </div>
    )
}
