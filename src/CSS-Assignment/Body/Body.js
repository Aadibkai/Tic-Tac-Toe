import React from 'react';
import style from './Body.module.css';
import image from './banner.png';


export default function Body() {
     
    return (
        <>
            <div className={style.container}>
                <div className={style.left}>
                    <p>TOTALLY FREE</p>
                    <h1>Let's Bring Your Team Together in onClick</h1>
                    <p>We help you to manage all of your work and daily task in office</p>
                     <button>Get Started</button>
                </div>
                <div className={style.right}>
                    <img src={image}></img>
                </div>
            </div>

        </>
    )
}