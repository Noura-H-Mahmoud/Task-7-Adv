import bg from '@/app/assets/images/bg.png'
import BlackTitle from '../BlackTitle/BlackTitle'
import Image from 'next/image'
import bike from '@/app/assets/images/bike.png'
import Form from '../Form/Form'

export default function BookBike() {
    return (
        <div className="w-full bg-cover bg-center pr-6 pl-6 md:pr-8 
        md:pl-8 lg:pr-10 lg:pl-10 desctopHuge:pl-250 desctopHuge:pr-250
        flex justify-start pt-60 pb-[200px] 600:pb-[275px] 
        md:pb-[410.77px] lg:pb-60"
            style={{ backgroundImage: `url(${bg.src})` }}
        >
            <div className='w-full desctopHuge:max-w-1420 m-auto relative '>
                <div className='w-full lg:w-[51.69014%] flex flex-col items-center gap-9'>
                    <BlackTitle h2='Book Now Bike' />
                    <Form />
                </div>
                <Image src={bike} alt='Bike' loading="lazy"
                    className='max-w-[50.98592%] absolute 
                    -bottom-[29%] 600:-bottom-[38%] 
                    md:-bottom-[82%]  lg:-right-5  lg:-bottom-24' />
            </div>
        </div>
    )
}