import React from 'react'
import NavBar from '../NavBar'

const BaseLayout = (props) => {
    return (
        <div>
            <NavBar/>
            {
                props.children
            }
            
        </div>
    )
}

export default BaseLayout
