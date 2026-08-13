import { getToken, setToken } from "../auth";
import { getRefreshToken } from "../auth/auth-token";
const basePath = "https://localhost:3000";
interface Auth{
  email : string,
  password : string,
}
interface RegisterRequest {
  name: string;
  surname: string;
  email: string;
  password: string;
  role: "Worker" | "Company";
}
export async function getJWTToken(loginCredentials:Auth) : Promise<string>{
  
  const response = await fetch(basePath+"/api/auth/login",{
    body: JSON.stringify(loginCredentials),
  });
  const token = await response.json();
  await setToken(token.AccessToken,token.RefreshToken);
  return token.AccessToken;
  

}
export async function apiRequest (path:string,method:string,options?:RequestInit):Promise<Response> {
  const headers = new Headers(options?.headers);
  const accessToken = await getToken();
  headers.set('Authorization', `Bearer ${accessToken}`);  
  headers.set('Content-Type', 'application/json');
  const response = await fetch(basePath+path,{
    method: method,
    
    headers: headers
    
  });
  const apiResponse = await response.json();
  return apiResponse; 
}
export async function getNewJwtFromRefresh() {
  const refresh_token = await getRefreshToken();
  const newTokens = await fetch(basePath+"/api/auth/refresh-token",{
    body: JSON.stringify(refresh_token) 
  });
  const newTokenJson = await newTokens.json();
  await setToken(newTokenJson.AccessToken,newTokenJson.RefreshToken);
}
export async function register(request:RegisterRequest) {
  try {
    const registerRequest = await fetch(basePath+"/api/auth/register",{
      body: JSON.stringify(request),
    });
    if(!registerRequest.ok){
      throw new Error("Kayıt sırasında bir hatayla karşılaşıldı!");
    }
}
catch {

}}
