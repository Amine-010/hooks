import React from 'react'
import User from './User'

import PropTypes from "prop-types";


export default function Users({UsersData,title}) {
    return (

        <div>
            <h1>{title}</h1>
            {
                UsersData.map(element=>(
                   <User  info={element}/>
                ))
            }
        </div>
    )
}

Users.propTypes = {
    // ...prop type definitions here
   }