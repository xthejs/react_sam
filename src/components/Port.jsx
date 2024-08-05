import React, { useEffect, useRef } from 'react'
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import port01 from '../assets/img/mbc_prot01_code_99.png'
import port02 from '../assets/img/mbc_prot02_eof.png'
import port03 from '../assets/img/mbc_prot03__joteam.png'
import port04 from '../assets/img/mbc_prot04__scoops.png'
import port05 from '../assets/img/mbc_prot05_tamyok.png'

const portText = [
    {
        num: "01",
        title: "code_99팀",
        img: port01,
        img_alt: "1팀_code_99",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsa blanditiis, enim eius accusamus officiis vero cumque quam! Iste ut, iure molestiae id dolor nesciunt sit porro eius quaerat atque.",
        site: "http://tnwjd3887.dothome.co.kr/port1_5",
    },
    {
        num: "02",
        title: "code_99팀",
        img: port02,
        img_alt: "2팀_eof",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsa blanditiis, enim eius accusamus officiis vero cumque quam! Iste ut, iure molestiae id dolor nesciunt sit porro eius quaerat atque.",
        site: "http://tjsdudis.dothome.co.kr/team",
    },
    {
        num: "03",
        title: "조현호와 아이들 팀",
        img: port03,
        img_alt: "3팀_조현호와 아이들",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsa blanditiis, enim eius accusamus officiis vero cumque quam! Iste ut, iure molestiae id dolor nesciunt sit porro eius quaerat atque.",
        site: "http://tlswnsxor.dothome.co.kr/joteam/",
    },
    {
        num: "04",
        title: "2의 10승 팀",
        img: port04,
        img_alt: "4팀_2의10승",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsa blanditiis, enim eius accusamus officiis vero cumque quam! Iste ut, iure molestiae id dolor nesciunt sit porro eius quaerat atque.",
        site: "http://mieum0915.dothome.co.kr/scoops/",
    },
    {
        num: "05",
        title: "무모한도전 팀",
        img: port05,
        img_alt: "5팀_무모한도전",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsa blanditiis, enim eius accusamus officiis vero cumque quam! Iste ut, iure molestiae id dolor nesciunt sit porro eius quaerat atque.",
        site: "http://ds1djs.dothome.co.kr/mainpage",
    },
    {
        num: "06",
        title: "code_99팀",
        img: port01,
        img_alt: "1팀_code_99",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsa blanditiis, enim eius accusamus officiis vero cumque quam! Iste ut, iure molestiae id dolor nesciunt sit porro eius quaerat atque.",
        site: "http://tnwjd3887.dothome.co.kr/port1_5",
    },
    {
        num: "07",
        title: "code_99팀",
        img: port02,
        img_alt: "2팀_eof",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsa blanditiis, enim eius accusamus officiis vero cumque quam! Iste ut, iure molestiae id dolor nesciunt sit porro eius quaerat atque.",
        site: "http://tjsdudis.dothome.co.kr/team",
    },
    {
        num: "08",
        title: "조현호와 아이들 팀",
        img: port03,
        img_alt: "3팀_조현호와 아이들",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsa blanditiis, enim eius accusamus officiis vero cumque quam! Iste ut, iure molestiae id dolor nesciunt sit porro eius quaerat atque.",
        site: "http://tlswnsxor.dothome.co.kr/joteam/",
    },
    {
        num: "09",
        title: "2의 10승 팀",
        img: port04,
        img_alt: "4팀_2의10승",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsa blanditiis, enim eius accusamus officiis vero cumque quam! Iste ut, iure molestiae id dolor nesciunt sit porro eius quaerat atque.",
        site: "http://mieum0915.dothome.co.kr/scoops/",
    },
    {
        num: "10",
        title: "무모한도전 팀",
        img: port05,
        img_alt: "5팀_무모한도전",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsa blanditiis, enim eius accusamus officiis vero cumque quam! Iste ut, iure molestiae id dolor nesciunt sit porro eius quaerat atque.",
        site: "http://ds1djs.dothome.co.kr/mainpage",
    },
]

const Port = () => {
    const horizontalRef = useRef(null);
    // horizontalRef 라는 변수생성. useRef훅으로 초기화(하나만사용)
    // 이 변수는 가로 스크롤이 적용될 부모 요소를 참조하는데 사용됩니다.
//     훅이란? 
// - 클래스형 컴포넌트(Class Component)의 단점을 보안하여, 함수형 컴포넌트(Functional Component)를 사용 할 수 있도록 등장한 것이 바로 React Hook(리액트 훅)이다. 
// - 대표적인 것이 useState(유즈스테이), useEffect(유즈이팩트), useReducer(유즈리듀서)


    const sectionsRef = useRef([]);
    // sectionRef 변수생성. useRef훅으로 빈배열로 초기화(배열로 여러개사용)
    // - 이 배열은 각 포트폴리오 아이템 요소들을 참조하는데 사용됩니다.


    useEffect(()=>{
        // - 컴포넌트가 렌더링된 후에 실행되는 부수 효과를 정의하는 코드 블록입니다. 
        // - useEffect 내부에서는 gsap 라이브러리의 ScrollTrigger를 등록하고, 가로 스크롤 애니메이션을 구성합니다.
     
     
        gsap.registerPlugin(ScrollTrigger);
        // 라이브러리를 사용할 수 있도록 안정화시켜주는 명령어
        // >>  gsap 라이브러리에서 ScrollTrigger를 사용할 수 있도록 플러그인을 등록합니다.


        const horizontal = horizontalRef.current;
        // horizontalRef.current : horizontalRef의 현재값
        // 이 값은 의도적으로 변이 가능하므로 읽기와 쓰기가 모두 가능합니다


        const sections = sectionsRef.current;

        let scrollTween = gsap.to(sections,{
            // - gsap의 to 메서드를 사용하여 sections 배열에 있는 요소들에 대한 가로 스크롤 애니메이션을 설정합니다. 
            // - sections 배열은 sectionsRef를 통해 각 포트폴리오 아이템 요소들을 참조합니다.
         
            xPercent: -120 * (sections.length-1),
            ease:"none",
            scrollTrigger:{
                //    - gsap의 ScrollTrigger를 이용하여 스크롤 이벤트를 트리거로 하는 애니메이션을 설정합니다. 해당 설정으로 스크롤 이벤트가 horizontal 요소가 시작되고 끝날 때까지 트리거되며, 스크롤 위치에 따라 가로로 이동하는 애니메이션을 적용합니다.

                trigger:horizontal,
                start:"top 56px",
                end: ()=>"+="+horizontal.offsetWidth,
                pin:true,
                scrub:1,
            }
        })
        return()=>{

        // return () => { ... }
        // - 컴포넌트가 언마운트될 때(clean-up) 실행되는 함수를  정의합니다. 
        // - scrollTween.kill()를 사용하여 스크롤 애니메이션을 제거합니다. 
        // - 이렇게 하면 컴포넌트가 언마운트될 때 메모리 누수를 방지할 수 있습니다.



            scrollTween.kill();

        }
    },[]);
    
    
    return (
        <section id='port' ref={horizontalRef}>
            <div className="port_inner">
                <div className="port_title">
                    portfolio <em>나의 작품들</em>
                </div>
                <div className="port_wrap">
                    {portText.map((port, key) => (
                        
                    // portText.map((port, key) => ... )
                    // - portText 배열을 map 메서드를 사용하여 포트폴리오 아이템들을 렌더링합니다. 각 포트폴리오 아이템은 이미지, 제목, 설명 등의 정보를 가지고 있습니다.

                        <div
                            className={`port_item s${key+1}`}
                            key={key}
                            ref={(el)=>(sectionsRef.current[key]=el)}
                        >
                            <span className="num">{port.num}. </span>
                            <a href={port.site} className='img'>
                                <img src={port.img} alt={port.img_alt} />
                            </a>
                            <h3 className={port.title}></h3>
                            <p className={port.desc}></p>
                            <a href={port.site} className='site'>사이트보기</a>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default Port
