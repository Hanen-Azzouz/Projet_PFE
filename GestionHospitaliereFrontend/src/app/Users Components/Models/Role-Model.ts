import { UserModel } from "./User-Model"

export class RoleModel{

    idRole!:number
    roleName!:string
    users!:UserModel[]
}