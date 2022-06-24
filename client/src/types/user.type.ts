import ITransaction from "./transaction.type";

export default interface IUser {
  id?: any | null,
  username: string,
  email: string,
  password: string,
  firstName: string,
  lastName: string,
  balance: Number,
  budget: Number,
  transactions: Array<ITransaction>
}