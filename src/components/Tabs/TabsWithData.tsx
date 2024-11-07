'use client'
import Earth from "@/app/assets/images/svgFiles/Earth";
import Tabs from "./Tabs"
import Users from "@/app/assets/images/svgFiles/Users";
import TitleTab from "../TitleTab/TitleTab";
import ContentTap from "../ContentTap/ContentTap";
const data1 = {
    component: (isActive: boolean) => <Earth isActive={isActive} />,
    title: 'Public Tours'
};
const data2 = {
    component: (isActive: boolean) => <Users isActive={isActive} />,
    title: 'Private Tours'
};

const tabData = [
    { title: (isActive: boolean) => <TitleTab data={{ ...data1 }} isActive={isActive} />, content: <ContentTap /> },
    { title: (isActive: boolean) => <TitleTab data={{ ...data2 }} isActive={isActive} />, content: <ContentTap /> }
];

export default function TabsWithData() {
    return (
        <>
            <Tabs tabs={tabData} />
        </>
    )
}
