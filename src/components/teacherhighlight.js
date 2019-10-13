import React from 'react'
import './teacherhighlight.scss'

const textsus = "Sus Verbruggen is afgestudeerd aan de Mime opleiding op de Theaterschool in Amsterdam als fysiek acteur. Hij speelde onder andere bij Boukje Schweigman, MAAS Theater en Dans, Het Houten Huis en op de Parade bij TG WAK. Door zijn brede interesse stond en staat hij in veel verschillende producties, van kindertheater tot abstract bewegingstheater en van klassieke tekststukken tot festival voorstellingen in een weiland."
const textmaarten = "Maarten van den Berg is afgestudeerd aan de Koningstheateracademie in Den Bosch als cabaretier en behaalde zijn bachelor Humanistiek aan de Universiteit voor Humanistiek. Hij werkte mee aan Zondag met Lubach en aan Panache met Janjaap van der Wal en Tim Fransen. Hij is aangesloten bij Bos Theaterproducties en speelt met zijn eigen cabaretprogramma in theaters door het hele land. Maarten maakt maatschappelijk cabaret, ten koste van de politiek en zichzelf."

const imgtemp = "https://presentu.nl/images/Middel-14d.png";
const temp2 = 'https://presentu.nl/images/Middel-13d-p-800.png';

export default function TeacherHighlight(props) {
    return (
        <div className='presentu-fn-comp-teacherhighlight'>
            <div className='content-width-rule'>
                <div className='teachers' id='teachers'>
                    
                    {props.data.allPrismicTeacher.edges.map(i => {
                        return(
                            <div id='highlight' className='highlight' >
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
