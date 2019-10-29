import React from 'react'
import './teacherhighlight.scss'

export default function TeacherHighlight(props) {
    return (
        <div className='presentu-fn-comp-teacherhighlight'>
            <div className='content-width-rule'>
                <div className='teachers' id='teachers'>
                    
                    {props.data.allPrismicTeacher.edges.map(i => {
                        return(
                            <div id='highlight' className='highlight' key={i.node.data.name.text}>
                                <div className='image'>
                                    <img 
                                        alt={i.node.data.image.alt} 
                                        src={i.node.data.image.url}/>
                                </div>
                                <div className='body'>
                                    <h1>{i.node.data.name.text}</h1>
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: i.node.data.story.html,
                                        }}
                                    />
                                </div>
                            </div>
                        )
                    })}
                    
                </div>
            </div>
        </div>
    )
}
