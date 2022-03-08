import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Datacontext } from './DataContext'
import style from './Gallery.module.css'

const Gallery = () => {
  const [data] = useContext(Datacontext);
  const Navigate = useNavigate()
  return (
    <div className={style.maindiv}>
      <div className={style.child}>
        {data.filter((filt) => filt.source.id <= 1).map((myp, i) => (
          <div style={{ cursor: "pointer" }} key={i} onClick={() => Navigate(`/news/${myp.category}/${myp.source.id}`)}>
            <img className={style.redius} height="410px" width="688px" src={myp.urlToImage} />
            <h5 className={style.title} >{myp.title}</h5>
            <p className={style.text}><strong>{myp.category}</strong> / {myp.publishedAt}</p>
          </div>
        ))}
      </div>
      <div className={style.parent}>
        <div className= {style.child1}>
          {
            data.filter((CurEl) => CurEl.source.id == 2).map((CurEle, index) => (
              <div key={index} onClick={() => Navigate(`/news/${CurEle.category}/${CurEle.source.id}`)} >
                <img className={style.redius} height="198px" width="400px" src={CurEle.urlToImage} />
                <h5 className={style.title1}> {CurEle.title} </h5>
                <p className={style.text1}> <strong> {CurEle.category} </strong>/{CurEle.publishedAt} </p>
              </div>
            ))
          }
        </div>
        <div className={style.child2}>
          {
            data.filter((CurEl) => CurEl.source.id == 3).map((CurEle, index) => (
              <div key={index} onClick={() => Navigate(`/news/${CurEle.category}/${CurEle.source.id}`)} >
                <img className={style.redius} height="198px" width="400px" src={CurEle.urlToImage} />
                <h5 className={style.title1}> {CurEle.title} </h5>
                <p className={style.text1}> <strong> {CurEle.category} </strong>/{CurEle.publishedAt} </p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
export default Gallery