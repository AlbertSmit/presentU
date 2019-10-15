import React from 'react'

export default function VideoSource({ videoSrcURL, videoTitle, ...props }) {
    return (
        <>
            <iframe 
                className='source'
                src={videoSrcURL}
                title={videoTitle}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                frameBorder="0"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                allowFullScreen
            />
      </>
    )
}
