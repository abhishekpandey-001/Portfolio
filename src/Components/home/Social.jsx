import React from "react";


const Social = ()=>{

    window.addEventListener("scroll", function(){
        const scrollUp = this.document.querySelector(".scrollup");
        //when the scroll is higher than 500 viewport height, addd the scroll-show
        //class to a tag with scroll-top class

        if(this.scrollY>=560) scrollUp.classList.add("show-scroll");
            else scrollUp.classList.remove("show-scroll");
    });

    return(
        <div className="home__social">
            <a href="https://www.linkedin.com/in/abhishek-pandey001/" className="home__social-icon" target="_blank">
                <i className="uil uil-linkedin-alt"></i>
            </a>
            <a href="https://github.com/abhishekpandey-001" className="home__social-icon" target="_blank">
                <i className="uil uil-github-alt"></i>
            </a>
            <a href="https://x.com/syntax_buddy" className="home__social-icon" target="_blank">
                <i className="uil uil-twitter"></i>
            </a>
        </div>
    )
}


export default Social;