import React from 'react'

export default function Card({item}) {
  return (
    <div>
        <h3>{item.title}</h3>
        <span>{item.date}</span>
        <p>{item.desc}</p>
    </div>
  )
}
