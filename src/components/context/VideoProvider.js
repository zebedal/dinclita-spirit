import React, { useState } from 'react'

const VideoContext = React.createContext({
    opened: false,
    toggleVideo: () => { }
})

const VideoProvider = props => {

    const [opened, setOpened] = useState(false);

    return (
        <VideoContext.Provider value={{openVideo: setOpened}} >
            {props.children}
        </VideoContext.Provider>
    )
}




export default VideoProvider