export default function Loading(){
    return <h2>Loading.....</h2>
}

//여전히 위에서는 - 상단 바에서는 로딩되고 있지만 백엔드에서 데이터 fetch가 진행되고 있기에 그러나 적어도 로딩컴퍼넌트가 id에 있기때문에 사용자가 로딩 상태를 볼 수 있다. 
//page에서 await하고 있는게 아무것도 없기 때문에 loading이 쓰이지 않는다. 전체 페이지를 대체한다. 요청이 마무리 되어야 페이지가 표시되었다 하지만 페이지는 사용자에게 표시된다. 만약 await하고 있다면 
// 구체적으로 페이지의 어떤 부분이 로딩되어야 하는지 보여주고 있다. suspnse를 통해서. fetch해야하는 component만 loading을 가지게 되었다.   
// server component이기 때문에 남이 볼 걱정을 하지 않아도 되었다.  