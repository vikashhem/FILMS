import React from 'react'

import AddIcon from '../static/images/add.svg'
import PlayIcon from '../static/images/play-button.svg'

const MovieDetails = ({
  movie: {
    id,
    title,
    name,
    vote_average,
    release_date,
    first_air_date,
    runtime,
    episode_run_time,
    number_of_episodes,
    number_of_seasons,
    overview,
  },
}) => {
  return (
    <div className='modal__container'>
      <h1 className='modal__title'>{title || name}</h1>
      <p className='modal__info'>
        <span className='modal__rating'>Rating: {vote_average * 10}% </span>
        Release date: {release_date || first_air_date} Runtime:{' '}
        {runtime || episode_run_time}
      </p>
      <p className='modal__episode'>
        {number_of_episodes ? ' Episodes: ' + number_of_episodes : ''}
        {number_of_seasons ? ' Seasons: ' + number_of_seasons : ''}
      </p>
      <p className='modal__overview'>{overview}</p>
      <button
        className='modal__btn modal__btn--red'
        onClick={() => console.log(id)}
      >
        <PlayIcon className='modal__btn--icon' />
        Play trailer
      </button>
    </div>
  )
}

export default MovieDetails
