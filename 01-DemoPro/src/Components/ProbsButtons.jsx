export function ProbsButtons({text,color}){
    return (
       <button className={`px-3 py-1 ${color} text-zinc-100 m-4 rounded-full`}>{text}</button>
    );
}