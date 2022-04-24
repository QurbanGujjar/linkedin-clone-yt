import React from 'react'
import './Wigets.css'
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Wigets() {
    const newsArticle=(heading,subtitle)=>(
        <div className="wigets__article">
            <div className="wigets__articleLeft">
            <FiberManualRecordIcon/>

            </div>
            <div className="wigets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
  return (
    <div className='wigets'>
        <div className="wigets__header">
            <h2>LinkedIn News</h2>
            <InfoIcon/>
        </div>
        {newsArticle("PAPA React is Back","Top news - 9937 readers")}
        {newsArticle("PAPA React is Back","Top news - 9937 readers")}
        {newsArticle("PAPA React is Back","Top news - 9937 readers")}
    </div>
  )
}

export default Wigets