import React from 'react'

const siteText = [
    {
        text: ["make", "2차 포트폴리오", "S7"],
        title: "웹표준을 준수한 웹사이트",
        code: "/",
        view: "/",
        info: ["site coding", "production perriod : 10 day", "use stack : HTML5 / CSS3 / SCSS / FIGMA / PHOTOSHOP / Javasctipt / Jquery"]
    },
    {
        text: ["make", "팀프로젝트", "무모한도전"],
        title: "팀의 합작품",
        code: "/",
        view: "/",
        info: ["site coding", "production perriod : 15 day", "use stack : HTML5 / CSS3 / SCSS / FIGMA / PHOTOSHOP / Javasctipt / Jquery"]
    },
    {
        text: ["make", "1차 포트폴리오", "S7"],
        title: "나의 첫작품",
        code: "/",
        view: "/",
        info: ["site coding", "production perriod : 20 day", "use stack : HTML5 / CSS3 / PHOTOSHOP / Jquery"]
    },
    {
        text: ["make", "리디자인", "S7"],
        title: "지원회사 리디자인",
        code: "/",
        view: "/",
        info: ["site coding", "production perriod : 5 day", "use stack : HTML5 / CSS3 / SCSS / FIGMA / PHOTOSHOP / Javasctipt / Jquery"]
    },
]

const Site = () => {
    return (
        <section id='site'>
            <div className="site_inner">
                <div className="site_title">
                    Site coding <em>나의 작품</em>
                </div>
                <div className="site_wrap">
                    {
                        siteText.map((site, key) => (
                            <article className={`site_item s${key+1}`} key={key}>
                                <span className='num'>{key+1}. </span>
                                <div className="text">
                                    <div>{site.text[0]}</div>
                                    <div>{site.text[1]}</div>
                                    <div>{site.text[2]}</div>
                                </div>
                                <h3 className="title">
                                    {site.title}
                                </h3>
                                <div className="btn">
                                    <a href={site.code}>사이트바로가기</a>
                                    <a href={site.view}>자세히보기</a>
                                </div>
                                <div className="info">
                                    <span>{site.info[0]}</span>
                                    <span>{site.info[1]}</span>
                                    <span>{site.info[2]}</span>
                                </div>
                            </article>
                        ))
                    }


                </div>
            </div>
        </section>
    )
}

export default Site
