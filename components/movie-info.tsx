import potato from "../styles/movie.info.module.css";
import { API_URL } from ".././app/constants";

export async function getMovie(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(`${API_URL}/${id}`); // 한번 fetch하고 나서 더이상 로딩이 필요하지 않다.
  return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <div className={potato.container}>
      <img src={movie.poster_path} alt={movie.title} />
      <div className={potato.info}>
        <h1 className={potato.title}>{movie.title} </h1>
        <h3>⭐️{movie.vote_average.toFixed(1)} </h3>
        <p>{movie.overview}</p>
        <a href={movie.HomePage} target={"_blank"}>
          Homepage &rarr;
        </a>
      </div>
    </div>
  );
}
