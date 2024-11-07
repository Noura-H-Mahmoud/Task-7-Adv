import Image from "next/image";
import closeBtn from '@/app/assets/images/close.svg'
import Inputs from "./Inputs";
import google from '@/app/assets/images/google.svg'

interface InputProps {
  label: string;
  placeholder: string;
  type: string;
  name: string;
  Class?: string;
}
interface Data {
  h2: string;
  text: string;
  textGoogle: string;
  question: string;
  linkNavigate: string;
  clickNavigate: () => void;
  inputs: InputProps[];
  onClick?: () => void;
  component?: React.ReactNode;
  classh2?: string;
  classLastLine?: string;
}
export default function FormAuth({ data }: { data: Data }) {
  const { h2, inputs, onClick, text, textGoogle, clickNavigate, question, linkNavigate, component, classh2, classLastLine } = data;
  return (
    <div className="bg-white text-blackColor py-2.5 px-4 lg:py-10 lg:px-[59px] mx-5 rounded-24raduis">
      <div className={`flex justify-between mb-5 ${classh2}`}>
        <h2 className="min-h-11 leading-line43.58 text-32 font-bold">{h2}</h2>
        <button onClick={onClick}>
          <Image src={closeBtn} alt="close icon" />
        </button>
      </div>
      <Inputs inputs={inputs} />
      {component}
      <button className="text-white bg-mainColor rounded-50raduis w-full h-47">
        {text}
      </button>
      <p className="text-base h-[22px] text-center my-1.5 opacity-40">or</p>
      <button className="bg-white rounded-50raduis w-full h-[45px] border border-[#33333333] flex items-center gap-2.5 py-2.5 px-6">
        <Image src={google} alt="google icon" className="h-6" />
        <span className="w-[89.375%] opacity-40 font-semibold">{textGoogle}</span>
      </button>
      <div className={`h-7 flex mt-5 items-center justify-center gap-1 text-base ${classLastLine}`}>
        <p>{question}</p>
        <button onClick={clickNavigate} className="text-mainColor">{linkNavigate}</button>
      </div>
    </div>
  )
}
