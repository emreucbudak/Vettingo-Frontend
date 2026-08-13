import { cookies } from "next/headers";
export async function setToken(accessToken:string,refreshToken:string){
  const cookieStore = await cookies();
  await cookieStore.set("access_token",accessToken,{
    maxAge:60*15,
    sameSite:"lax"  
  });
  await cookieStore.set("refresh_token",refreshToken,{
    maxAge:60*60*24,
    sameSite:"lax"
  })
  
}
export async function getToken() : Promise<string>{
  const cookieStore = await cookies();
  const accessToken = await cookieStore.get("access_token");
  if(accessToken?.value === undefined) {
    throw new Error("Token Bulunamadı!")
  }
  return accessToken.value;
}
export async function getRefreshToken(): Promise<string> {
  const cookieStore = await cookies();
  const refreshToken = await cookieStore.get("refresh_token");
  if(refreshToken?.value === undefined) {
    throw new Error("Refresh Token bulunamadı!");
  }
  return refreshToken.value;
}

