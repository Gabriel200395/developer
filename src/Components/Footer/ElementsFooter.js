import React from 'react'
import { Icons } from './Styles'


export default function ElementsFoooter(props) {

    return (
        <Icons>
            {props.IconsElements.map(icon => (
                <div  key={`${icon.id}`}>
                    <img src={icon.url} alt={icon.alt} />
                </div>
            ))}
        </Icons>

    );

}