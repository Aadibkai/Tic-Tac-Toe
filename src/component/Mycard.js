      import React from 'react';
      import style from './Mycard.module.css';
      
      export default function Mycard({people}) {
       
        return (
        <>
        <div className={style.Wrapper}>
          {people.map((item)=>{
           return(
            <article className={style.slider}>
            <img src={item.image} alt='' className={style.img}></img>
            <h3>{item.name}</h3>
            <p className={style.title}>{item.title}</p>
            <p className={style.exp}>{item.exp}</p>
          </article>
           )
          })}
          </div>
        </>
         
        )
      }
                                                                            