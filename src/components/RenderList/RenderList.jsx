import React from 'react'
import list from '/src/json'
import Card from '../Card/Card'
export default function RenderList() {
    list.writeFile('')
    console.log(list)
    return (
        <div>
            {list.map(item=> <Card item={item}/>)}
        </div>
    )
}
