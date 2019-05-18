import React from 'react'
import './StarWars.css'


const StarWarsList = props => {

  return (
    <div className="char-card">
      <h1 className="char-name">{props.charName}</h1>
      <p className="char-info">
        Born on {props.birth_year} and is {props.height}cm tall and weighs {props.mass} kg. {props.charName}'s skin tone is {props.skin_color}
      </p>
    </div>
  )
}

export default StarWarsList