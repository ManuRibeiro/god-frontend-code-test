import { NextApiRequest,NextApiResponse } from "next";
import data from '../../public/api/cars.json';


export async function GET(req:NextApiRequest,res:NextApiResponse){
    
    //res.setHeader('Access-Control-Allow-Origin', `${req.headers.origin}`)
    res.status(200).json(data)
    
}