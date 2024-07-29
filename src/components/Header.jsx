import React, { useState } from 'react'

// headerNav의 배열만들기 - const로 지정
const headerNav = [
    // 첫번째 배열
    {
        title:"intro",
        url:"#intro",
    },
    // 두번째 배열
    {
        title:"skill",
        url:"#skill",
    },
    // 세번째 배열
    {
        title:"site",
        url:"#site",
    },
    // 네번째 배열
    {
        title:"port",
        url:"#port",
    },
    // 다섯번째 배열
    {
        title:"contact",
        url:"#contact",
    },
]

const Header = () => {
    
    const [show,setShow] = useState(false);
    // 리액트의 변수 지정방법 
    // [show(변수), setShow(한번더 지정- show의 값을 가지고 있는 추가변수)]
    // 직접접인 변수보다 추가변수를 위주로 사용(아래 setShow 사용한 이유)
    // useState(false)  => 현재 상태 - 거짓
    
    const toggleMenu = () => {
    // toggleMenu = 익명함수 사용
        setShow( (prevShow) => !prevShow );
        // !  => 반대  >> show가 없으면 넣어주고, 있으면 빼주기
    }

    return (
        <header id='header' role='banner'>
            <div className="header_inner">
                <div className="header_logo">
                    <a href="/">portfolio<em>react</em></a>
                </div>
                <div 
                    // className = "header_nav show" 초기값. 아래 삼항연산으로 변경
                    className={`header_nav ${show ? "show" : ""}` }
                    // show ? "show" > show가 있으면 "show" 넣고 : (없으면) "" 비워놓기  3항연산자.
                    // {``} => 백킥사용. 계산문으로 사용하기 위해 {}안에 ``지정
                    
                    role='navigation'
                    aria-label='메인메뉴'
                >
                    <ul>
                        {/* headerNav를 .map으로 뿌리기, nav=변수, key=index */}
                        {headerNav.map( (nav,key)=>(
                            
                            <li key={key}>
                                {/* [배열에 있는 .url, .title 넣기, '좌 > 우(좌측에 포함)'] */}
                                <a href="{nav.url}">{nav.title}</a>
                            </li>
                        ) )}

                        {/*
                        배열을 안썼을때
                        <li><a href="#intro">intro</a></li>
                        <li><a href="#skill">skill</a></li>
                        <li><a href="#site">site</a></li>
                        <li><a href="#port">port</a></li>
                        <li><a href="#contact">contact</a></li> */}
                    </ul>
                </div>
                <div 
                    className="header_nav_mobile"
                    id="headerToggle"
                    aria-controls="primary_menu"
                    
                    // aria-expanded="false" 초기값.  -아래는 삼항연산 사용
                    aria-expanded={show ? "true" : "false"}
                    
                    role='button'
                    tabIndex="0"
                    onClick={toggleMenu}
                >
                    <span></span>
                </div>
            </div>
        </header>
    )
}

export default Header
