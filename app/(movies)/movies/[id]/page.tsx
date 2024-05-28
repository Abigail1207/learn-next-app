// [id]를 사용함으로써 이것은 movies 뒤에 무엇이 들어가도 괜찮다는 것을 알려주는 것이다. next js가 이 폴더를 확인할 것이다.
// about-us는 정적인 route 그리고 about-us/1999 등 이런 것은 dynamic route이다
// [id]에 []를 넣지 않으면 not found 페이지를 보여줄 것이다.
// movies로 이동했을때 사용자들이 무언가를 보게하거나 하고 싶지 않다. 사용자들이 목록표시되고 영화 클릭시 이동하게.
// 이제 아이디로 영화의 정보를 가져와야 합니다.

import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";
interface IParams {
  params: { id: string };
}

export default async function MovieDetailPage({ params: { id } }: IParams) {
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
// { params: { id }, searchParams } 부분을 분해해 봅시다:
// params: { id }: 전달된 객체에서 params 속성을 추출하고, 그 내부의 id 속성을 변수 id로 할당합니다.
// 어떤 세부정보페이지에 어떤 prop을 받는지 확인하자. 백엔드에서 렌더링 된것이다. 콘솔에서 볼 수 없다. 아이디는 []에서 온다. searchparam은 ?뒤에 region =  등에 온다. Params는 URL에서 변수이다. 아이디가 대괄호로 표시되는 것이다.

// movies : List popular movies
// movies/:id : Get movie by :id
// movies/:id/videos: Get videos
// movies/:id/providers // 영화 제공 업체에 대한 정보.
// movies/:id/similar // 비슷한 영화에 대한 정보.
// movies/:id/credits: 영화에 참여한 모든 사람들에 관한 목록을 불러온다. 그 사람의 이름, 사진 같은 것도 포함할 것이다.

// suspense는 component가 await되는 동안 표시할 메세지를 render할 수 있게 해준다.
// promise all은 두가지 fetch가 끝나야 ui에 표시됩니다. 둘다 동시에 시작해서 먼저 fetch끝나면 UI보여주기. 그래서 분리해야한다. 스트리밍을 이용해서 결과가 준비되면 이 테이터와 연결된 UI가 사용자에게 보내지도록 해야한다. 비디오가 로딩중이여도 말이다.
// 가장 편한 방법은 page 파일에서 데이터를 fetch하는 것이다.왜냐하면 자동적으로 loading component가 화면에 생기고
