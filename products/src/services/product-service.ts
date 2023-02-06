import { ProductRepository } from "../database";
import { IProductDTO } from "./product-service.dto";
import {FormatData} from '../utils'


// Business logic

class ProductService {
  repository;

  constructor() {
    this.repository = new ProductRepository();
  }
  async ProductsCreate(productInput: IProductDTO) {
    const {    name,
      desc,
      banner,
      type,
      unit,
      price,
      available,
      suplier } = productInput;

    try {
      

      const products = await this.repository.CreateProduct({    
        name,
        desc,
        banner,
        type,
        unit,
        price,
        available,
        suplier })

     

      return FormatData(products)
    } catch (err) {
      throw new Error(`${err}`);
    }
  }
}

export default ProductService
