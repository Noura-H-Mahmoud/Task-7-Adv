'use client'
import Link from "next/link";

interface DataProps {
    link: string;
    textLink: string;
    className?: string;
}
export default function Button({ data }: { data: DataProps }) {
    return (
        <Link href={data.link}
            className={`flex justify-center items-center desctopHuge:text-xl
            rounded-50raduis h-47 font-medium desctopHuge:font-semibold
            hover:border hover:border-mainColor hover:text-mainColor
            hover:bg-[#FFFFFF4D] transition-all duration-300 ease-in-out
             ${data.className}`}>
            {data.textLink}
        </Link>
    )
}
