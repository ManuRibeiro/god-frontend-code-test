import { Flex, IconButton,Spacer} from "vcc-ui";
import style from "./../../public/css/Pagination.module.css"

interface PaginationDesktopProps {
    onClickLeft : ()=> void;
    onClickRight : ()=> void;

}

export default function PaginationDesktop({onClickLeft,onClickRight} : PaginationDesktopProps){
    return(
            <div className={style.btnWrapper}>
                <Flex extend={{flexDirection:"row",justifyContent:"flex-end"}}>
                    <IconButton variant="outline" onClick={onClickLeft} aria-label="left" iconName="navigation-chevronback" />
                    <Spacer/>
                    <IconButton variant="outline" onClick={onClickRight} aria-label="right" iconName="navigation-chevronforward" />
                </Flex>
            </div>
    )
}
