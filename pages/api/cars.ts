import { NextApiRequest,NextApiResponse } from "next";
import data from '../../public/api/cars.json';

export default async function handler(req:NextApiRequest,res:NextApiResponse){
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Credentials","true");
    res.status(200).json(data);
}