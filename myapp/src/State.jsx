import React, { useState } from 'react'
import { Breadcrumb } from 'react-bootstrap'

const State = () => {
    var [name, setname] = useState("inkipinkiponki")
    return (
        <div><h1>KERALA STATE(God's Own Country)</h1>
            <h3>(ninak keralathile pillere ariyilla){name}</h3>
            <img src="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2018/05/pjimage-1-1527156121.jpg" />

        </div >
    )
}

export default State