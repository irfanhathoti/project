import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import style from './Body.module.css'
import { Datacontext } from './DataContext'

const Body = () => {
    const [data] = useContext(Datacontext);
    const Navigate = useNavigate()
    return (
        <div className='my-3 bbb'>
            {data.filter((value) => value.foobanne == true).map((element, i) => (
                <div style={{ cursor: "pointer" }} className={style.apnadiv} key={i} onClick={() => Navigate(`/news/${element.category}/${element.source.id}`)}>
                    <img src={element.urlToImage} />
                    <h5 className={style.text}>{element.title}</h5>
                    <p className={style.textti}><strong>{element.category}</strong> / {element.publishedAt}</p>
                </div>
            ))}
        </div>
    )
}
export default Body