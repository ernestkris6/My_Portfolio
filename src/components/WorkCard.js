import React from 'react'
import './WorkCardStyle.css'

import { NavLink } from 'react-router-dom'

const WorkCard = (props) => {
  return (
    <div>
            <div className=''>
                <div className='project-card'>
                    <img src={props.imgsrc} alt="pro1"/>
                    <h2 className='project-title'>{props.title}</h2>
                    <div className='pro-details'>
                        <p>{props.text}</p>
                        <div className='pro-btns'>
                            <NavLink to={props.view} className="btn">
                                VIEW
                            </NavLink>

                            <NavLink to={props.source} className="btn">
                                SOURCE
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>

                     
    </div>
  )
}

export default WorkCard;