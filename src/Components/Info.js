import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Datacontext } from './DataContext'
import './Info.css'

const Info = () => {
    const [data] = useContext(Datacontext);
    const Navigate = useNavigate();
    const { id } = useParams();
    return (
        <div>
            {data
                .filter((value) => value.source.id == id)
                .map((CurElem, index) => (
                    <div key={index}>
                        <div key={index} className="maindiv">
                            <div className="smdiv1">
                                <h4>{CurElem.title}</h4>
                                <div className="profile">
                                    <img src="https://uybor.uz/borless/uybor/img/user-images/user_no_photo_600x600.png" alt='' height={'50px'} width={'50px'} />
                                    <div className="postnews">
                                        <span>{CurElem.author}</span>
                                        <p>
                                            <span>{CurElem.publishedAt}</span>
                                        </p>
                                    </div>
                                    <div className="socialme">
                                        <p>
                                            <i className="fab fa-facebook"></i>
                                            <i className="fab fa-instagram"></i>
                                            <i className="fab fa-twitter"></i>
                                            <i className="fab fa-facebook-messenger"></i>
                                        </p>
                                    </div>
                                </div>
                                <br />

                                <div className="post">
                                    <img className="potimg" src={CurElem.urlToImage} />
                                    <h6>{CurElem.description}</h6>
                                    <img className="potimg" src={CurElem.postimg === "" ? CurElem.urlToImage : CurElem.postimg} />
                                    <h6>{CurElem.fulldescription}</h6>
                                </div>

                                <div className="">
                                    <p>
                                        <i className="fa-solid fa-hands-clapping"  > </i> {CurElem.likes}{" "}
                                        Claps{" "}
                                    </p>
                                    <div className="profile">
                                        <img src="https://uybor.uz/borless/uybor/img/user-images/user_no_photo_600x600.png" />
                                        <div className="postnews">
                                            <strong>written by</strong>
                                            <br />
                                            <span>{CurElem.author}</span>
                                            <p>
                                                <span>{CurElem.publishedAt}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                        <h3>More Posts by {CurElem.author}</h3>

                        <div className="holadiv">
                            {data
                                .filter(
                                    (CurElem) => CurElem.source.id !== id && CurElem.author == CurElem.author
                                )
                                .map((mar,i) => (
                                    <div key={i}  className="reletedcard" style={{ cursor: "pointer" }} onClick={() => Navigate(`/news/${mar.category}/${mar.source.id}`)}>
                                        <div className="maincard">
                                            <img className="img1" src={mar.urlToImage} />
                                            <h6 className="martil">{mar.title}</h6>
                                            <br />

                                            <div className="profile prof1">
                                                <img
                                                    className="imgg"
                                                    src="https://uybor.uz/borless/uybor/img/user-images/user_no_photo_600x600.png"
                                                />
                                                <div className="postnews">
                                                    <span className="artau">{CurElem.author}</span>
                                                    <p>
                                                        <span className="artii">{CurElem.publishedAt}</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <br />
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default Info