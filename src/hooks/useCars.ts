import axios from "axios";
import { useEffect,useState } from "react";
import { Car } from "../Types/car.interface";

export function useCars(){
    const [cars,setCars] = useState<Car[]>([]);

    useEffect(()=>{
        axios.get(process.env.NEXT_PUBLIC_API_URL+`/api/cars`,{headers:{
            'Access-Control-Allow-Origin':'*',
            
        }})
        .then(res => {
            setCars(res.data);
        })
    },[])

    return {
        cars
    }
}