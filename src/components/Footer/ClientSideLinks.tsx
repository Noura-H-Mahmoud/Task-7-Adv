'use client'
import Link from "next/link";
interface Data {
    href: string;
    text?: string;
}
export default function ClientSideLinks({ href, text }: Data) {
    return (
        <Link href={href}>
            {text}
        </Link>
    )
}
