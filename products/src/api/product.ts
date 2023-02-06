import ProductService from "../services/product-service";
import express,{Request, Response, NextFunction} from 'express'

export const Product = (app:express.Application)=>{
   const service = new ProductService()

   app.post('/product/create', async(req:Request, res:Response, next:NextFunction)=>{
     try{
     const {  name,
      desc,
      banner,
      type,
      unit,
      price,
      available,
      suplier} = req.body

     const data = await service.ProductsCreate({  name,
      desc,
      banner,
      type,
      unit,
      price,
      available,
      suplier})

     return res.status(201).json(data)

     }catch(err){
        next(err)
     }
   })
}
