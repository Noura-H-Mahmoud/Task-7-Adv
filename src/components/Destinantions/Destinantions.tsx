import BlackTitle from "../BlackTitle/BlackTitle";
import MainSlider from "@/components/MainSlider/MainSlider";
import cardDes1 from '@/app/assets/images/cardDes1.png';
import cardDes2 from '@/app/assets/images/cardDes2.png';
import cardDes3 from '@/app/assets/images/cardDes3.png';
import cardDes4 from '@/app/assets/images/cardDes4.png';
const cardData = [
    {
        src: cardDes1.src,
        h3: 'Lucca Bike Tour',
        para: 'from',
        span: '34 €',
        para1: 'EVERY DAY',
        para2: '3-10 PP',
        text: 'A tour of the city and its surroundings led by a professional guide ...'
    },
    {
        src: cardDes2.src,
        h3: 'Wine tasting In Tuscany',
        para: 'from',
        span: '34 €',
        para1: 'MONDAY',
        para2: '10-30 PP',
        text: 'The real magic is here where you can enjoy the best Tuscan wine and eat ...'
    },
    {
        src: cardDes3.src,
        h3: 'Cinque Terre Tour',
        para: 'from',
        span: '34 €',
        para1: 'TO BE DECIDED',
        para2: '10-50 PP',
        text: 'Visiting the 5 Terre is a must, and you can never go there enough ...'
    },
    {
        src: cardDes4.src,
        h3: 'Siena and Surroundings',
        para: 'from',
        span: '34 €',
        para1: 'TO BE DECIDED',
        para2: '5-10 PP',
        text: 'Visit the beautiful Siena and the cities that surround it to experience ...'
    },
    {
        src: cardDes1.src,
        h3: 'Lucca Bike Tour',
        para: 'from',
        span: '34 €',
        para1: 'EVERY DAY',
        para2: '3-10 PP',
        text: 'A tour of the city and its surroundings led by a professional guide ...'
    },
    {
        src: cardDes2.src,
        h3: 'Wine tasting In Tuscany',
        para: 'from',
        span: '34 €',
        para1: 'MONDAY',
        para2: '10-30 PP',
        text: 'The real magic is here where you can enjoy the best Tuscan wine and eat ...'
    },
    {
        src: cardDes3.src,
        h3: 'Cinque Terre Tour',
        para: 'from',
        span: '34 €',
        para1: 'TO BE DECIDED',
        para2: '10-50 PP',
        text: 'Visiting the 5 Terre is a must, and you can never go there enough ...'
    },
    {
        src: cardDes4.src,
        h3: 'Siena and Surroundings',
        para: 'from',
        span: '34 €',
        para1: 'TO BE DECIDED',
        para2: '5-10 PP',
        text: 'Visit the beautiful Siena and the cities that surround it to experience ...'
    }
]
export default function Destinantions() {
    return (
        <div className="max-w-1920 m-auto mt-60 md:mt-123 pr-6 pl-6 md:pr-8 
        md:pl-8 lg:pr-10 lg:pl-10 desctopHuge:pl-250 desctopHuge:pr-250">
            <BlackTitle h2="Explore Our Popular Destinantions " />
            <MainSlider slides={cardData} />
        </div>
    )
}
