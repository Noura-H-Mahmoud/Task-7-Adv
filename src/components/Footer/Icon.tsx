import Image from "next/image";
export default function Icon({ src }: { src: string }) {
    return (
        <a href="http://"
            target="_blank"
            rel="noopener noreferrer"
            className="w-50 h-50 rounded-full bg-mainColor 
            flex items-center justify-center">
            <Image src={src} alt="icon" loading="lazy" className="bg-blackColor rounded-full w-50 h-50" />
        </a>
    )
}
