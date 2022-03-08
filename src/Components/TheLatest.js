import React, { useContext } from 'react'
import { Datacontext } from './DataContext';
import Item from './Item';
import './TheLatest.css'

const TheLatest = () => {
    const [data] = useContext(Datacontext);
    return (
        <div className='container' >
            <h2 style={{ marginTop: '50px' }}>Top Today News</h2>


            <div className='row mymainro' >
                {data.filter((value) => value.source.id >= 6 && value.source.id <= 8).map((element) => {

                    return <div className='col-md-4 ' key={element.source.id} >
                        <Item title={element.title.slice(0, 50)} description={element.description.slice(0, 100)} imgurl={element.urlToImage} newsurl={element.url} author={element.author}
                            publishedAt={element.publishedAt} source={element.source.id} category={element.category} />
                    </div>
                })
                }
            </div>

        </div>
    )
}

export default TheLatest