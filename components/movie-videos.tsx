
// Video만 렌더링하는 component 

import { API_URL } from "../app/(home)/page";

async function getVideos(id:string){
    await new Promise((resolve) => setTimeout(resolve,5000))
    const response = await fetch(`${API_URL}/${id}/videos`); // 한번 fetch하고 나서 더이상 로딩이 필요하지 않다. 
    return response.json();
} 

export default async function MovieVideos({id}:{id:string}){
const videos = await getVideos(id);
return <h6>{JSON.stringify(videos)}</h6>
}