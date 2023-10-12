import style from "../../public/css/PaginationMobile.module.css"
interface PaginationMobileProps {
    total : number,
    onClick: (i:number)=> void;
    selected: number
}
export default function PaginationMobile({total,onClick,selected} : PaginationMobileProps){
    return(
        <div className={style.btnWrapper}>
            {Array.from({length: total})
            .map((element,i)=>{
                return(
                    <button
                        className={i === selected ? style.btnSelected : style.btn}
                        key={i}
                        onClick={()=>onClick(i)}>
                    </button>)
                })}
        </div>
    )
}