import { NextApiRequest,NextApiResponse } from "next";
import data from '../../public/api/cars.json';

export default async function handler(req:NextApiRequest,res:NextApiResponse){
    res.setHeader("Access-Control-Allow-Origin","https://volvo-frontend-challenge-5rm7fnx9m-emanuel-ribeiros-projects.vercel.app/");
    res.setHeader("Access-Control-Allow-Credentials","true");
    res.status(200).json(data);
}