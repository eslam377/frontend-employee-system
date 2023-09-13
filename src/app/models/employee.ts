import {Job} from "./job";

export interface Employee {

  id?:number;
  firstName:string;
  lastName:string;
  email:string;
  salary:number;
  phoneNumber: string,
  hireDate: Date,
  job: Job

}
