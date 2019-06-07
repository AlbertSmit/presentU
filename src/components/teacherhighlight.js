import React from 'react'
import { Link } from 'gatsby'
import './teacherhighlight.css'

const textsus = "Sus Verbruggen is afgestudeerd aan de Mime opleiding op de Theaterschool in Amsterdam als fysiek acteur. Hij speelde onder andere bij Boukje Schweigman, MAAS Theater en Dans, Het Houten Huis en op de Parade bij TG WAK. Door zijn brede interesse stond en staat hij in veel verschillende producties, van kindertheater tot abstract bewegingstheater en van klassieke tekststukken tot festival voorstellingen in een weiland."
const textmaarten = "Maarten van den Berg is afgestudeerd aan de Koningstheateracademie in Den Bosch als cabaretier en behaalde zijn bachelor Humanistiek aan de Universiteit voor Humanistiek. Hij werkte mee aan Zondag met Lubach en aan Panache met Janjaap van der Wal en Tim Fransen. Hij is aangesloten bij Bos Theaterproducties en speelt met zijn eigen cabaretprogramma in theaters door het hele land. Maarten maakt maatschappelijk cabaret, ten koste van de politiek en zichzelf."

export default function TeacherHighlight(props) {
    return (
        <div className='presentu-fn-comp-teacherhighlight' >
            <div className='content-width-rule'>
                <div className='presentu-teacherhighlight-teachers'>
                    <div className='presentu-teacherhighlight-left' >
                        <h1 className='teacher-name text-pU-red' >Sus Verbruggen</h1>
                        <p className='text-gray' >{textsus}</p>
                        <Link to="/page-2/">Meer</Link>
                    </div>
                    <div className='presentu-teacherhighlight-right' >
                        <h1 className='teacher-name text-pU-red' >Maarten van den Berg</h1>
                        <p className='text-gray' >{textmaarten}</p>
                        <Link to="/page-2/">Meer</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
