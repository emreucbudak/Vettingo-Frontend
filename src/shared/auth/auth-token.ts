import { cookies } from "next/headers";
interface Tokens {
  accessToken? : string
  refreshToken?: string
}
export async function setToken(accessToken:string,refreshToken:string){
  const cookieStore = await cookies();
  await cookieStore.set("access_token",accessToken,{
    expires:60*15,
    sameSite:"lax"  
  });
  await cookieStore.set("refresh_Token",refreshToken,{
    expires:60*60*24,
    sameSite:"lax"
  })
  
}
export async function getToken() : Promise<Tokens>{
  const cookieStore = await cookies();
  return {
    accessToken: cookieStore.get("access_token")?.value,
    refreshToken: cookieStore.get("refresh_token")?.value,
  }
}
