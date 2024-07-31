import React from 'react'

// 이미지를 링크(개별로 다 임포트하고 밑에서 연결해야함)
import about from '../assets/img/about.png';

const Intro = () => {
    return (
        <section id='intro'>
            <div className="intro_inner">
            <h1 className='intro_title'>
                    mbc_academy portfolio
                </h1>
                <div className="intro_lines" aria-hidden="true">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>

                <div className="intro_text">
                    <div className="text">
                        <div>종강 8월 9일</div>
                        <div>2차포폴 8월 2일</div>
                        <div>프로필 8월 5일</div>
                    </div>
                    <div className="img">
                        <img src={about} alt="이미지연결" />
                    </div>
                </div>

                <div className="intro_lines bottom" aria-hidden="true">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>

            </div>
                
                
        </section>
    )
}

export default Intro
