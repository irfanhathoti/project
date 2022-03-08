import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Datacontext } from './DataContext'
import style from './Story.module.css'

const Story = () => {
    const [data] = useContext(Datacontext)
    const [viewMore,setViewMore] = useState(true)
    const Navigate = useNavigate()
    return (
        <div>
            <h2 className="my-2">Latest Stories</h2>

            <div className={style.maindi}>
                {data
                    .filter((ytt) => viewMore ? ytt.story == true && ytt.source.id <= 3 : ytt.story == true && ytt.source.id >= 1)
                    .map((neu, i) => (
                        <div style={{ cursor: "pointer" }} className={style.div} key={i} onClick={() => Navigate(`news/${neu.category}/${neu.source.id}`)}>
                            <h5>{neu.title.slice(0, 70)}</h5>
                            <p>{neu.description.slice(0, 150)}</p>
                            <br />
                            <p>
                                <strong>{neu.category} </strong>/{neu.publishedAt}
                            </p>
                        </div>
                    ))}
            </div>
            <button className="btn btn-primary" onClick={() => setViewMore(false)}>
                View More
            </button>
        </div>
    )
}

export default Story