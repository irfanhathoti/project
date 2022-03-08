import React from 'react'
import Advertisement from './Advertisement'
import Body from './Body'
import LatestArticle from './LatestArticle'
import TheLatest from './TheLatest'
import Toppost from './Toppost'
import './Style.css'

const MainData = () => {
  return (
    <div>
        <TheLatest/>
        <div className='parent'>
           <div>
               <LatestArticle/>
               <Body/>
           </div>
           <div>
               <Advertisement/>
               <Toppost/>
           </div>
        </div>
    </div>
  )
}

export default MainData