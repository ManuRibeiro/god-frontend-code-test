import React from "react";
import { Flex, Spacer, Text } from "vcc-ui";
import { useCars } from "../hooks/useCars";
import { CarCard } from "./CarCard";
import PaginationDesktop from "./PaginationDesktop";
import style from "../../public/css/Pagination.module.css"


export const HomeComponent: React.FC = () => {

  const { cars } = useCars();

  const onClickLeft = () =>{
    let cardList = document.getElementById("card-list");
    let card = cardList?.firstElementChild;
    let cardSize = (card?.clientWidth?? 0)+24;
    let scrollSize = cardList?.scrollWidth ?? 0;
    let scrollPosition= cardList?.scrollLeft ?? 0;
    if(scrollPosition  <= scrollSize){
      cardList?.scrollTo({left: scrollPosition - cardSize})
    }
  };
  const onClickRight = () =>{
    let cardList = document.getElementById("card-list");
    let card = cardList?.firstElementChild;
    let cardSize = (card?.clientWidth ?? 0)+24;
    let scrollSize = cardList?.scrollWidth ?? 0;
    let scrollPosition= cardList?.scrollLeft ?? 0;
    if(scrollPosition + cardSize <= scrollSize){
      cardList?.scrollTo({left: scrollPosition + cardSize})
    }
  };



  console.log(cars);
  <Text>Volvo Cars</Text>
  return(
 <div className="homeWrapper">
  <Text extend={{textAlign:"center",marginBottom:"30px"}} variant={"cook"}>Volvo Cars</Text>
  <div id="card-list" className={style.cardWrapper}>
        {cars.map((car) =>{return(<CarCard key={car.id} car={car}/>)})}
  </div>
  <PaginationDesktop onClickLeft={onClickLeft} onClickRight={onClickRight}></PaginationDesktop>
  </div>) 
  
};
/*
flexDirection:"row",
overflow :'hidden',
justifyContent:"flex-start",
minWidth: "250px",
gap:"24px",
height: "100%"
*/