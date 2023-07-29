import React from 'react'
import './HeaderOption.css'
import { Avatar } from '@mui/material';

function HeaderOption( {avatar, Icon , title} ) {
  return (
    <div className='headerOption'>
        {Icon && <Icon fontSize='small'  className='headerOption_Icon'/>}
        {avatar && <Avatar className='headerOption_Icon' src={avatar}/>}
        <h3 className='headerOption_title'>{title}</h3>
    </div>
  )
}

export default HeaderOption;