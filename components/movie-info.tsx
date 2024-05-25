import { API_URL } from "../app/(home)/page";


async function getMovie(id:string){
    await new Promise((resolve) => setTimeout(resolve,5000));
    const response = await fetch(`${API_URL}/${id}`);// 한번 fetch하고 나서 더이상 로딩이 필요하지 않다. 
    return response.json();
}

export default async function MovieInfo({id}:{id:string}){
    const movie = await getMovie(id);
    return <div>
     <img src={movie.poster_path} />
     <div>
     <h1>{movie.title} </h1>
    <h3>{movie.vote_average} </h3>
    <p>{movie.overview}</p>
    </div>  
    </div>
    }