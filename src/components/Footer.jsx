import React from 'react'

const Footer = () => {
    return (
        <footer id='footer' role='contentinfo'>
            <div className="footer_inner">
                <div className="footer_text">
                    <span>Son kangmu</span>
                    <span>H.P: 010-5668-1994</span>
                </div>
                <div className="footer_info">
                    <div className="left">
                        <div className="title">
                            <a href="/">포트폴리오 마무리영역</a>
                        </div>
                        <p>그동안 너무 고생하셨습니다.</p>
                    </div>
                    <div className="right">
                        <h3>목록</h3>
                        <ul>
                            <li>
                                <a href="/">1차 포트폴리오</a>
                                <em>1차 포트폴리오 내용기입</em>
                            </li>
                            <li>
                                <a href="/">팀프로젝트</a>
                                <em>팀프로젝트 내용기입</em>
                            </li>
                            <li>
                                <a href="/">2차 포트폴리오</a>
                                <em>2차 포트폴리오 내용기입</em>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer_bottom">
                    &copy; 2024 ds1djs<br/>
                    개인 포트폴리오입니다. 상업목적으로 사용하지 않습니다.
                </div>
            
            </div>
        </footer>
    )
}

export default Footer
