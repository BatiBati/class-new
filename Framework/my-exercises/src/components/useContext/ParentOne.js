import { Childe } from "./Childe"

export const ParentOne = ({ step }) => {
    return (<div className="w-[400px] h-[250px] l rounded-2xl bg-amber-400 shadow-2x flex flex-col justify-center items-center">
        I'm ParentOne
        <Childe step={step}/>
    </div>)
}