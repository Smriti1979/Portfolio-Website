import React from 'react'
import './Mywork.css'
import mywork_data from '../../assets/mywork_data'

const Mywork = () => {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My Work</h1>
        <img src="" alt=""/>
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return (
            <a key={index} href={work.w_link} target="_blank" rel="noopener noreferrer">
              <img src={work.w_img} alt={work.w_title || "My Work Image"} />
            </a>
          );
        })}
      </div>
    </div>
  )
}

export default Mywork
