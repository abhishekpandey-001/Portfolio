import React from "react";

const Info = ()=>{
    return(
        <div className="about__info grid">
            <div className="about__box">
                <i className='bx  bx-code about__icon' ></i> 
                <h3 className="about__title">Coding</h3>
                <span className="about__subtitle">Solved 100+ challenges</span>
            </div>

            <div className="about__box">
                <i className='bx  bx-briefcase-alt about__icon'  ></i> 
                <h3 className="about__title">Projects</h3>
                <span className="about__subtitle">30+ mini & major</span>
            </div>

            <div className="about__box">
                <i className='bx  bx-git-repo-forked about__icon'  ></i> 
                <h3 className="about__title">Development</h3>
                <span className="about__subtitle">Frontend, Software, Web</span>
            </div>
        </div>
    )
}

export default Info;