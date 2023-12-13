import React from 'react'
import Cardname from './Cardname'
import FormComponent from './HeaderForm'
import Icons from './Icons'

export default function Header() {
    return(
        <div>
            <Cardname/>
            <FormComponent/>
            <Icons/>
        </div>
    );
}