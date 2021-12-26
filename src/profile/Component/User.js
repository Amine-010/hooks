import React from 'react'

export default function User({info}) {
    return (
        <div>
            <p>
                fullname : {info.fullName} 
            </p>
            
            <p>
                profession : {info.profession}
            </p>

            <p>
                profession : {info.bio}
            </p>
            <br></br>

        </div>
    )
}

// Set default props
User.defaultProps = {


info:{
      fullName:"nadim",
      profession:"Formateur",
      bio:"ABC", 
    }
   };