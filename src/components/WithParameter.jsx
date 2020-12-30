import React from 'react'

export default props =>
    <>
        <h3>{props.title}</h3>
        <p>{props.subtitle}</p>
        <p>{Array(10).fill(0)}</p>
    </>