import {ProductModel, IProducts} from '../models'

export class ProductRepository{

    async CreateProduct({
      name,
      desc,
      banner,
      type,
      unit,
      price,
      available,
      suplier}:IProducts){
      try{
         const product = new ProductModel({
          name,
          desc,
          banner,
          type,
          unit,
          price,
          available,
          suplier
         })

         const productResult = await product.save()
         return productResult 
      }  catch(err){
        console.log(err)
      }
    }

    // async FindCustomer({email}:{email:string}){
    //  const existingCustomer = await CustomerModel.findOne({email});
    //  return existingCustomer;
    // }
}