import React from 'react'
import css from './AboutPage.css'

function AboutPage() {
    return (
        <div>
            <h1 className="heading">About Me</h1>
            <div className="aboutMe">
                <p>
                    Name: Yash Agarwal<br />
                    Roll: 1805314<br />
                    Github profile: <a href="https://www.github.com/yash6334">www.github.com/yash6334</a><br />
                    Skills: Javascript, HTML, CSS, React, Flutter, NodeJS, Java, Python, MYSQL, Unity Engine, etc.<br />
                    <br />
                    Projects:<br />
                        <ul>
                            <li>Chat Application(Flutter)</li>
                            <li>News Application(Flutter)</li>
                            <li>Zombie Apocalypse Game(Unity Engine)</li>
                        </ul>
                        <br />
                    My porfolio/personal website: <a href="https://www.linkedin.com/in/yash-agarwal-cse314/">https://www.linkedin.com/in/yash-agarwal-cse314/</a><br />
                    <br/>
                    I am currently learning mobile developmet and game development but looking for new opportunities.<br/>
                    Always interested and ready to learn new technologies.
                </p>
            </div>
        </div>
    )
}

export default AboutPage
