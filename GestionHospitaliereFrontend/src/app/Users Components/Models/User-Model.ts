import { RoleModel } from "./Role-Model"
import { TokenModel } from "./Token-Model"

export class UserModel {
    idUser!:number
    lastName!:string
    firstName!:string
    username!:string
    email!:string
    password!:string
    phoneNumber!:number
    dateNaissance!:Date
    dateInscription!:Date
    role!:RoleModel
    tokens!:TokenModel[]
    
   }
   
      