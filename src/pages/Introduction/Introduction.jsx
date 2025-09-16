import React from "react";
import "./Introduction.css";
import me from "../../it'sme.png";
import {useTypewriter , Cursor} from 'react-simple-typewriter'
function Introduction(){
    const [text] = useTypewriter({
        words: ["Electrical Engineer",
            "Front-End Web Developer",
            "Gamer",
            "C++ Programmer",
            "Competitive Programmer",
            "Artist",
            "Youtuber",
            "Chess Player",
            "SMVDU Student"
        ]
        ,loop:true,
        typeSpeed:100,
        deleteSpeed:50,
        delaySpeed:1000
    });
    return(
        <>
            <div className="Content">
                <div className="about-me">
                    <div className="me">
                        <h3>Hey,<br /> I’m Ansh Sharma.</h3>
                        <p>An {' '}
                            <span>{text}</span>
                        <span>
                            <Cursor cursorStyle='|' fontWeight='bold'/>
                        </span>
                        </p>
                    </div>
                    <div className="links">
                        <a
                            href="https://www.instagram.com/ans123115?igsh=MW9jeWs5djN2OG4wdQ=="
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fa-brands fa-instagram" title="Instagram"></i>
                        </a>
                        <a
                            href="https://www.youtube.com/@SharmaGaming-c2q"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fa-brands fa-youtube" title="YouTube"></i>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/ansh-sharma-bb0778338"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fa-brands fa-linkedin" title="LinkedIn"></i>
                        </a>
                        <a
                            href="https://github.com/Anshsh713"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fa-brands fa-github" title="GitHub"></i>
                        </a>
                        <a
                            href="https://leetcode.com/u/Anshshar/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fa-solid fa-code" title="LeetCode"></i>
                        </a>
                        <a
                            href="https://www.chess.com/member/anshsharma1234567890"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fa-solid fa-chess-pawn" title="Chess.com"></i>
                        </a>
                    </div>
                </div>
                <div className="image">
                    <img src={me} alt="me" className="me"/>
                </div>
            </div>
        </>
    )
}
export default Introduction;
