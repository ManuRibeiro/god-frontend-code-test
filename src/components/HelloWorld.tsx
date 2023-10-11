import React from "react";
import { Block, Button } from "vcc-ui";
import { useCars } from "../hooks/useCars";
import { CarCard } from "./carCard";


export const HelloWorld: React.FC = () => {

  const { cars } = useCars();
  console.log(cars);

  return <Block extend={{padding: 20}}>
    {cars.map((car) =>{return(<CarCard key={car.id} car={car}/>)})}
  </Block>;
};
