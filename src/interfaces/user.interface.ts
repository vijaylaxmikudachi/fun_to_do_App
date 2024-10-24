import { Document } from 'mongoose';

export interface IUser extends Document {
  _id: string | number;
  name: string;
  email: String;
  username:String;
  password:String;
}
