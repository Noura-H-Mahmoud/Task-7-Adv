'use client'
import CalendarMonth from '@/app/assets/images/svgFiles/CalendarMonth';
import Button from '../AuthButtons/Button';
import Inputs from './Inputs';
import Clock from '@/app/assets/images/svgFiles/Clock';
const data = {
    link: '#',
    textLink: 'Contact Us',
    className: 'w-123 sm:w-[31.831832%] bg-mainColor text-white'
}
const inputData = [
    {
        label: "Name and Surname",
        placeholder: "Enter your name and surname",
        type: "text",
        name: "name",
    },
    {
        label: "Email Address",
        placeholder: "Enter your email address",
        type: "email",
        name: "email",
    },
    {
        label: "Telephone Number",
        placeholder: "Enter your telephone number",
        type: "tel",
        name: "telephone",
    },
    {
        label: "Service Type",
        placeholder: "Select the service type",
        type: "select",
        name: "service",
        options: ["Buses", "Cars", "Trains", "Planes", "Ships", "Bicycles"],
    },
    {
        label: "Date",
        placeholder: "Select the date",
        type: "date",
        name: "date",
        Class: 'h-[52px] text-xs 1200:text-base text-grayCustom',
        classMain: 'h-[85px]',
        component: <CalendarMonth color='rgba(51, 51, 51, 0.5)' />,
    },
    {
        label: "Time",
        placeholder: "Select the time",
        type: "time",
        name: "time",
        Class: 'h-[52px] text-xs 1200:text-base text-grayCustom',
        classMain: 'h-[85px]',
        component: <Clock color='rgba(51, 51, 51, 0.5)' />,
    },
];
const Form: React.FC = () => {
    return (
        <div className="w-full py-4 px-6 sm:py-30 sm:px-[34px] bg-[#FFFFFF4D] rounded-3xl">
            <Inputs inputs={inputData} />
            <div className='flex justify-center mt-30'>
                <Button data={data} />
            </div>
        </div>
    );
};

export default Form;
