import React from 'react'
import VideoSource from './videosource'
import './video.scss'

export default function Video(props) {
    return (
        <div className='presentu-fn-comp-video' >
            <div className='content-width-rule fc' >
                <div className='video'>
                    <VideoSource
                        videoSrcURL={props.data.prismicVideo.data.youtube.url}
                        videoTitle="PresentU Promo"
                    />
                </div>
            </div>
        </div>
    )
}
