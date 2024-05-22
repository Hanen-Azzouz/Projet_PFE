import { UserModel } from "./User-Model"

export class TokenModel{

    id!:number
    accessToken!:string
    refreshToken!:string
    loggedOut!:boolean
    user!:UserModel



}