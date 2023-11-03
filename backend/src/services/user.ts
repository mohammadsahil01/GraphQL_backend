import prismadb from "../utils/prismadb"
import {createHmac,randomBytes} from "node:crypto"
import  JWT from "jsonwebtoken";


const JWT_SECRET = "khan1234" 
export interface CreateUserPayLoad {
    name:string
    password:string
    email:string
}

export interface getUserTokenPayload{
    email:string
    password:string
}

export class UserService {

    private static getHashedContent(password:string,salt:string)
    {
        const hashedPassword = createHmac("sha256",salt).update(password).digest('hex')
        return hashedPassword;
    }

    private static async getUserbyEmail(email:string){
        return await prismadb.user.findUnique({where:{email}})
    }

    public static async getUserbyID(id:string){
        return await prismadb.user.findUnique({where:{id}})
    }

    public static async createUser(payLoad:CreateUserPayLoad){
        const {name,password,email} = payLoad
        const salt = randomBytes(32).toString('hex')
        const hashedPassword = UserService.getHashedContent(password,salt)
        
        return await prismadb.user.create({
            data:{
                name,
                password:hashedPassword,
                email,
                salt
            }
        })
    }

    public static async getUserToken(payLoad:getUserTokenPayload){
        const {email,password} = payLoad
        const user = await UserService.getUserbyEmail(email)
        
        if(!user) throw new Error('user not found');

        const userSalt = user.salt
        const hashedPassword = UserService.getHashedContent(password,userSalt)

    if(hashedPassword!==user.password){
            throw new Error ('Incorrect Password')
        };

        const token = JWT.sign({id:user.id,email:user.email},JWT_SECRET);

        return token;

    }

    public static decodeJWT(token:string){
        return JWT.verify(token,JWT_SECRET)
    }
}
