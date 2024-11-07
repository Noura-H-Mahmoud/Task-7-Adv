'use client'
import Button from "../AuthButtons/Button";

export default function ButtonHero() {
    const data = {
        link: '#',
        textLink: 'View our Tour Packages',
        className: 'border-[1.5px] border-white text-white px-2.5 md:!w-[278.25px]'
    }
    return (
        <div>
            <Button data={data} />
        </div>
    )
}
