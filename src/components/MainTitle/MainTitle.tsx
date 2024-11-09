
export default function MainTitle({ content }: { content: string }) {
    return (
        <h1 className="text-white font-podcast text-5xl md:text-7xl md:leading-[72.65px] mx-5 desctopHuge:mx-0 text-center">
            {content}
        </h1>
    )
}
