export default function CheckBox() {
    return (
        <div className="flex items-center gap-2.5 mb-5">
            <input type="checkbox" name="terms" className="h-18 w-18" />
            <p className="h-[19px] flex items-center gap-1 text-sm leading-[19.07px]">
                I agree with
                <a href="http://" target="_blank" rel="noopener noreferrer" className="text-mainColor">Terms</a>
                and
                <a href="http://" target="_blank" rel="noopener noreferrer" className="text-mainColor">Privacy</a>
            </p>
        </div>
    )
}
