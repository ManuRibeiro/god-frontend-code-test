import { NextApiRequest,NextApiResponse } from "next";
import data from '../../public/api/cars.json';


export async function GET(req:NextApiRequest,res:NextApiResponse){
    
    res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader('Access-Control-Allow-Credentials','true')
    res.setHeader('Access-Control-Allow-Methods','GET,OPTIONS,PATCH,DELETE,POST,PUT')
    res.setHeader('Access-Control-Allow-Headers','X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version,Access-Control-Allow-Origin' )
    res.status(200).json(data)
    
}