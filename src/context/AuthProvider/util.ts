import { Api } from "../../service/api";
import { IUser } from "./types";

export function setUserLocalStorage(user: IUser | null){
    localStorage.setItem('u', JSON.stringify(user));
}

export function getUserLocalStorage(){
    const json = localStorage.getItem('u');
    if (!json){
        return null;
    }
    const user = JSON.parse(json);
  return user;
}

export async function LoginRequest(email:string, senha: string){
    try {
        const request = await Api.post('auth', {email, senha});
        return request.data;
    } catch (error) {
        return null;
    }
}