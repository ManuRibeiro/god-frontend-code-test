import React from "react";
import { Flex, Spacer, Text } from "vcc-ui";
import { useCars } from "../hooks/useCars";
import { CarCard } from "./carCard";


export const HelloWorld: React.FC = () => {

  const { cars } = useCars();
  console.log(cars);
  <Text>Volvo Cars</Text>
  return(
 <div className="homeWrapper">
  <Text extend={{textAlign:"center",marginBottom:"30px"}} variant={"cook"}>Volvo Cars</Text>
  <Flex extend={{
    flexDirection:"row",
    overflow :'hidden',
    justifyContent:"flex-start",
    minWidth: "250px",
    gap:"24px",
    height: "100%"
  }}>
    {cars.map((car) =>{return(<CarCard key={car.id} car={car}/>)})}
  </Flex>)
  </div>) 
  
};

