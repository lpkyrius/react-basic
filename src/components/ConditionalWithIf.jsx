import React from 'react'
import If from './If'

export default props => {
    
    return (
        <div>
            <h2>The number {props.number} is</h2>
            <If test={props.number % 2 == 0}>
                <spam>Even</spam>
            </If>
            <If test={props.number % 2 == 1}>
                <spam>Odd</spam>
            </If>
        </div>
    )
}