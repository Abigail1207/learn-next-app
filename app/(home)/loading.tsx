export default function Loading(){
    return <h2>Loading....</h2>
}    

// 백엔드가 로딩될때까지 UI에 아무것도 안보일것이기 때문에 Loading이 필요하다. 프레임워크가 server component가 fetch하는 동안 로딩파일이 페이지에 뜨고 fetch가 끝나면 loading componenet를 바꿔줄 것이다.  
// layout - loading (백엔드 아직 안끝나 - 회전원, 브라우저는 로딩 끝날때까지 기다림) - 페이지의 일부분만 - 응답 결과값보여주고 -  
// streaming을 사용하면서 next JS 는 우리의 페이지를 작은 html 부분으로 나눠서 준비된 HTML 부분을 브라우저에 줄 수 있다. 
// 이 html 부분들은 브라우저에 즉시 전달된다. 브라우저에게 백엔드에서 통신이 아직 마무리되지 않았고 기다려줘야한다고 하는것이다. 우리는 componenet를 await하고있다. 그래서 이건 async여야하고. await가 끝나면 브라우저에게 마지막 HTML 부분을 전달해주는것이다. 그러면 프레임워크가 loading componenet를 await된 component로 바꿔주는것이다. 
// <Loading/>
// const html = await Homepage()
// isLoading? <Loading />:html 
// Streaming은 작은 html부분으로 나누고 준비된 부분들을 하나씩 보여준다는것이다. 동시에 많은 것을 fetch할 수 있다는 의미이기때문이다. 
// 네임은 loading이 되어야한다는것이다. 