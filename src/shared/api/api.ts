import { getToken, setToken } from "../auth";
import { getRefreshToken } from "../auth/auth-token";
const basePath = "https://localhost:3000";
interface Auth{
  email : string,
  password : string,
}
export async function getJWTToken(loginCredentials:Auth){
  
  let response = await fetch(basePath+"/api/auth/login",{
    body: JSON.stringify(loginCredentials),
  });
  let token = await response.json();
  await setToken(token.AccessToken,token.RefreshToken);
}
export async function apiRequest (path:string,method:string,options?:RequestInit):Promise<Response> {
  const headers = new Headers(options?.headers);
  let accessToken = await getToken();
  headers.set('Authorization', `Bearer ${accessToken}`);  
  headers.set('Content-Type', 'application/json');
  let response = await fetch(basePath+path,{
    method: method,
    
    headers: headers
    
  });
  let apiResponse = await response.json();
  return apiResponse; 
}
export async function getNewJwtFromRefresh() {
  let refresh_token = await getRefreshToken();
  let newTokens = await fetch(basePath+"/api/auth/refresh-token",{
    body: JSON.stringify(refresh_token) 
  });
  let newTokenJson = await newTokens.json();
  await setToken(newTokenJson.AccessToken,newTokenJson.RefreshToken);
}
