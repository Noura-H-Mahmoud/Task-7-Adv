import { useState } from 'react';
interface TabItem {
    title: (isActive: boolean) => React.ReactNode;
    content: React.ReactNode;
}

interface TabsProps {
    tabs: TabItem[];
}

export default function Tabs({ tabs }: TabsProps) {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="p-5 bg-bgTransparent rounded-12raduis mt-11">
            <div className="flex">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`px-4 h-[57px]
                        ${activeTab === index ? 'bg-white text-mainColor' : 'bg-[#FFFFFF66] text-white'}
                        ${index == 0 ? 'rounded-tl-12raduis' : 'rounded-tr-12raduis'}
                        `}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab.title(activeTab === index)}
                    </button>
                ))}
            </div>
            <div className="p-3 bg-white text-mainColor
            md:rounded-tr-12raduis rounded-br-12raduis rounded-bl-12raduis">
                <div>{tabs[activeTab].content}</div>
            </div>
        </div>
    );
}
