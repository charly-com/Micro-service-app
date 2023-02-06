import { CustomerRepository } from "../database";
import { IUser } from "./customer-service.dto";
import { GenerateSalt, GeneratePassword,GenerateSignature, FormatData } from "../utils";

// Business logic

class CustomerService {
  repository;

  constructor() {
    this.repository = new CustomerRepository();
  }
  async SignUp(userInput: IUser) {
    const { email, password, phone } = userInput;

    try {
      const existingCustomer = await this.repository.FindCustomer({ email });

      if (existingCustomer) {
        throw new Error("Customer already exist");
      }

      // Generate salt
      let salt = await GenerateSalt();

      let userPassword = await GeneratePassword(password, salt);

      const customer = await this.repository.CreateCustomer({
        email,
        password: userPassword,
        phone,
        salt
      });

      const token = await GenerateSignature({email})

      return FormatData({customer, token})
    } catch (err) {
      throw new Error(`${err}`);
    }
  }
}

export default CustomerService
