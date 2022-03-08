import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Datacontext } from './DataContext'
import style from './LatestArticle.module.css'

const LatestArticle = () => {
    const { ctname } = useParams();
    const [data] = useContext(Datacontext)
    const [loadMore, setLoadMore] = useState(true)
    console.log(loadMore)
    
    const Navigate = useNavigate()
    return (
        <div>
            <h2>{ctname == undefined ? "Latest News" : ctname}</h2>
            {data
                .filter((fil) => (ctname == undefined ? loadMore ? fil.source.id > 6 : fil.source.id >= 2 : fil.category == ctname))
                .map((vall, index) => (
                    <div className={style.maindiv} key={index} onClick={() => Navigate(`/news/${vall.category}/${vall.source.id}`)}>
                        <div className={style.maindiv1} style={{ cursor: "pointer" }}>
                            <img src={vall.urlToImage} />
                            <div className={style.maindiv2}>
                                <h6>{vall.title.slice(0, 65)}...</h6>
                                <p>
                                    <small>{vall.description.slice(0, 100)}</small>
                                </p>
                                <p>
                                    <small>
                                        <strong>{vall.category}</strong> / {vall.publishedAt}
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                ))}

            <button className={style.button} onClick={() =>setLoadMore(false) }>Load More</button>
        </div>
    )
}
export default LatestArticle