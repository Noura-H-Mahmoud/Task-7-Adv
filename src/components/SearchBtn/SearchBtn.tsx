import icon from '@/app/assets/images/search.svg'
import Image from 'next/image'
export default function SearchBtn() {
    return (
        <button className='w-14 h-14 1410:w-20 1410:h-20 flex items-center justify-center bg-mainColor rounded-12raduis'>
            <Image src={icon} alt='icon' width={32} height={32} />
        </button>
    )
}
