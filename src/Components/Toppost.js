import React, { useContext } from 'react'
import { useNavigate,useParams } from 'react-router-dom';
import { Datacontext } from './DataContext'
import style from './Toppost.module.css'
const Toppost = () => {
    const [data] = useContext(Datacontext);
    const Navigate = useNavigate()
    const {ctname} = useParams()
    return (
        <div className="">
            <h2>Top Posts</h2>
            {data
                .filter((fil) =>
                    ctname == undefined
                        ? fil.likes >= 100
                        : fil.category == ctname && fil.likes >= 100
                )
                .map((vall, index) => (
                    <div
                        className={index == 0 ? style.maindivm : style.maindiv}
                        key={index}
                        onClick={() => Navigate(`/news/${vall.category}/${vall.source.id}`)}>
                        <div
                            className={index == 0 ? style.maindiv3 : style.maindiv1}
                            style={{ cursor: "pointer" }}>
                            <img src={vall.urlToImage} />
                            <div className={style.maindiv2}>
                                <h6>{vall.title.slice(0, 35)}...</h6>

                                <p>
                                    <small>
                                        {vall.category} / {vall.publishedAt}
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default Toppost