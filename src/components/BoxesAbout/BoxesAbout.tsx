import bg from '@/app/assets/images/bg.png'
import Box from './Box'
import map from '@/app/assets/images/bigMap.svg'
import iconEx from '@/app/assets/images/iconExperience.svg'
import guide from '@/app/assets/images/iconGuide.svg'
import price from '@/app/assets/images/PriceBig.svg'
export default function BoxesAbout() {
    const boxes = [
        {
            src: map,
            title: 'Complete Packages For All Your Wishes'
        },
        {
            src: iconEx,
            title: 'Over 30 Years Of Experience'
        },
        {
            src: guide,
            title: 'Expert Guides For You'
        },
        {
            src: price,
            title: 'Guaranteed fun at the best price!'
        }
    ]
    return (
        <div className="w-full bg-cover bg-center pr-6 pl-6 md:pr-8 
        md:pl-8 lg:pr-10 lg:pl-10 desctopHuge:pl-250 desctopHuge:pr-250 
        py-[83px]  my-60 md:mt-120 md:mb-123 "
            style={{ backgroundImage: `url(${bg.src})` }}
        >
            <div className='max-w-1420 m-auto'>
                <Box boxes={boxes} />
            </div>
        </div>
    )
}
