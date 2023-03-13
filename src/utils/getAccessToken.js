import storage from "./storage";

export default function getAccessToken(){
    const storageAccessToken =  storage.local.get('sb-nhkvwuswzpljtvdsajkg-auth-token')?.access_token 
    const urlAccessToken = new URLSearchParams(window.location.hash).get('access_token');
    const accessToken = storageAccessToken || urlAccessToken
    return accessToken
}