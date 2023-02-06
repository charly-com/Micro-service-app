import {CustomerModel,ICustomer} from '../models'

export class CustomerRepository{

    async CreateCustomer({ email,
        password,
        salt,
        phone}:ICustomer){
      try{
         const customer = new CustomerModel({
        email,
        password,
        salt,
        phone
         })

         const customerResult = await customer.save()
         return customerResult 
      }  catch(err){
        console.log(err)
      }
    }

    async FindCustomer({email}:{email:string}){
     const existingCustomer = await CustomerModel.findOne({email});
     return existingCustomer;
    }
}