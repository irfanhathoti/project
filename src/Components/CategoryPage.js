import React from 'react'
import Advertisement from './Advertisement'
import './CategoryPage.css'
import LatestArticle from './LatestArticle'
import Toppost from './Toppost'

const CategoryPage = () => {
    return (
        <div className='my-4'>
            <div className='merii'>
                <div>
                    <LatestArticle />
                </div>
                <div>
                    <Toppost />
                    <Advertisement/>
                </div>
            </div>
        </div>
    )
}
export default CategoryPage