import React from 'react'
import './newsElement.css'
function NewsElement({heading,description,newsLink}) {
  return (
    <div className='newsElement'>
        <h4>{heading}</h4>
        <h6>{description}</h6>
        <a href={newsLink} target='_blank'>Read More.</a>
    </div>
  )
}

export default NewsElement