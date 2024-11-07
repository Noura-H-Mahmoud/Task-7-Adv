export default function TitleFooter({ h4, classh4 }: { h4: string, classh4?: string }) {
    return (
        <h4 className={`text-center md:text-start text-white text-xl font-extrabold leading-line30 mb-5 ${classh4}`}>
            {h4}
        </h4>
    )
}
