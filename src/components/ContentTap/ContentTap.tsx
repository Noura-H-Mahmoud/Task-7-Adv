import Users from "@/app/assets/images/svgFiles/Users"
import DropdownField from "../Dropdown/Dropdown"
import tour from '@/app/assets/images/tour.svg'
import car from '@/app/assets/images/car.svg'
import SearchBtn from "../SearchBtn/SearchBtn"
import CalendarMonth from "@/app/assets/images/svgFiles/CalendarMonth"
import Clock from "@/app/assets/images/svgFiles/Clock"


export default function ContentTap() {
    return (
        <div className="flex justify-center gap-4 md:gap-0 flex-col md:flex-row">
            <div className="flex gap-3 max-[1275px]:grid max-[1275px]:grid-cols-1 md:grid-cols-2">
                <DropdownField
                    icon={<Users colorMain="#333333" />}
                    label="Number of people"
                    options={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
                    placeholder="Choose number"
                    className="pr-[3.5px]"
                    ClassSpan='w-[175px]'
                />
                <DropdownField
                    icon={<CalendarMonth color="#333333" />}
                    label="Date"
                    options={["1 June", "2 June", "3 June", "4 June", "5 June", "6 June", "7 June", "8 June", "9 June", "10 June"]}
                    placeholder="Choose Date"
                    className="pr-3 1410:pr-[42.5px] border-r-[1px] border-blackColor max-[1275px]:border-none"
                    ClassSpan='w-[147px]'
                />
                <DropdownField
                    icon={<Clock color="#333333" />}
                    label="Time"
                    options={["1 AM", "2 AM", "3 AM", "4 AM", "5 AM", "6 AM", "7 AM", "8 AM", "9 AM", "10 AM"]}
                    placeholder="Choose Time"
                    className="pr-3 1410:pr-[27px] border-r-[1px] border-blackColor max-[1275px]:border-none"
                    ClassSpan='w-[149px]'
                />
                <DropdownField
                    icon={tour.src}
                    label="Tour"
                    options={["City Tour", "Safari Tour", "Museum Tour"]}
                    placeholder="Select Tour"
                    className="pr-3 1410:pr-[27px] border-r-[1px] border-blackColor max-[1275px]:border-none"
                    ClassSpan='w-[134px]'
                />
                <DropdownField
                    icon={car.src}
                    label="Transportation"
                    options={["Cars", "Buses", "Trains", "Planes", "Ships", "Bicycles"]}
                    placeholder="Select Transportation"
                    className="pr-3 1410:pr-7"
                    ClassSpan='w-[220px]'
                />
            </div>
            <SearchBtn />
        </div>
    )
}
