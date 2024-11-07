import CalendarMonth from "@/app/assets/images/svgFiles/CalendarMonth";
import Users from "@/app/assets/images/svgFiles/Users";

interface DataProps {
    para1: string;
    para2: string;
}
export default function CardDetailsDes({ para1, para2 }: DataProps) {
    return (
        <div className="w-full flex items-center justify-between text-base text-mainColor font-semibold">
            <div className="flex items-center gap-1.5">
                <CalendarMonth color="#FA8B02" />
                <p>{para1}</p>
            </div>
            <div className="flex items-center gap-1.5">
                <Users colorMain="#FA8B02" />
                <p>{para2}</p>
            </div>
        </div>
    )
}
