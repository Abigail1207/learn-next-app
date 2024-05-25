
import Link from "next/link";
import Movie from "../../components/movie"
export const metadata = {
    title: "Homepage",
  };

  
  
  export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";
  import styles from "../../styles/home.module.css"


  async function getMovies() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await fetch(API_URL); // 첫번째 Fetch만 기억하는것이다. 그래서 로딩이 빠르다. 첫번째 요청에서 fetch된 캐싱된 데이터만 받는것이다.
    const json = await response.json();
    return json;
  }
  
  export default async function HomePage() {
    const movies = await getMovies();
    return <div className={styles.container}>
    {movies.map((movie) => (
     <Movie 
     key={movie.id} 
     id={movie.id} 
     poster_path={movie.poster_path}
     title={movie.title}
     />
    ))}
    </div>
    }

/*
    import {useEffect, useState} from "react";
  
    export default function Page(){
    const [isLoading, setIsLoading] = useState(true)
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
    const response = await fetch ("https://nomad-movies.nomadcoders.workers.dev/movies") // await 키워드는 Promise가 이행될 때까지 코드의 실행을 일시 중지하고, 이행된 Promise의 결과를 반환합니다
    const json = await response.json(); 
    // const jsonData = '{"name": "John", "age": 30, "city": "New York"}';
      console.log(jsonData.name); // undefined 이렇게 하면 JSON 데이터가 그냥 문자열로 취급되어, 객체 속성에 직접 접근할 수 없습니다. 따라서 jsonData.name은 undefined가 됩니다.
      그러나 JSON 데이터를 파싱하여 JavaScript 객체로 변환한 후에는 다음과 같이 사용할 수 있습니다
    const jsonData = '{"name": "John", "age": 30, "city": "New York"}';
    const obj = JSON.parse(jsonData); // parse는 스트링을 오브젝트로 // stringfy에는 함수 사용 불가능하다.
    console.log(obj.name); // John 
   // 이렇게 하면 JSON 데이터가 JavaScript 객체로 변환되어, 객체 속성에 직접 접근할 수 있게 됩니다. obj.name은 이제 "John"을 반환합니다.

    setMovies(json);
    setIsLoading(false);
    };
    useEffect(() => {
      getMovies();
    },[]);;
    return <div>{isLoading?"Loading...":JSON.stringfy(movies)}</div>;
    }

 */ 
  
    /* 
".json() 메서드는 JSON 응답을 JavaScript 객체 리터럴로 구문분석합니다."라는 문장은 다음을 의미합니다:

response.json() 메서드는 서버에서 받은 JSON 형식의 응답을 JavaScript 객체로 변환합니다.

JSON 응답: 서버에서 보내주는 데이터 형식 중 하나로, 텍스트 형식이며 특정한 구조를 가집니다. 예를 들어, {"name": "John", "age": 30}와 같은 형식입니다.
JavaScript 객체 리터럴: JSON 데이터를 파싱(parsing)하여 JavaScript에서 사용할 수 있는 객체로 변환한 것. 예를 들어, {name: "John", age: 30}와 같은 형식입니다.
구문분석: 여기서는 문자열 형태의 JSON 데이터를 JavaScript에서 이해할 수 있는 객체로 변환하는 과정입니다.
따라서, response.json() 메서드는 서버로부터 받은 JSON 형식의 응답을 JavaScript 객체로 변환하는 역할을 합니다. 이렇게 변환된 객체를 사용하여 JavaScript 코드 내에서 데이터에 접근하고 조작할 수 있습니다<div className=""></div>*/