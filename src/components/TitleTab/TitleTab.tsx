interface DataProps {
    component: (isActive: boolean) => React.ReactNode;
    title: string;
}

export default function TitleTab({ data, isActive }: { data: DataProps; isActive: boolean }) {
    return (
        <div className="flex items-center gap-3">
            {data.component(isActive)}
            <p>{data.title}</p>
        </div>
    );
}
