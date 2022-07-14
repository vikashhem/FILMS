import React from 'react'

import Backdrop from './Backdrop'

const Modal = ({ show, modalClosed, children, backgroundImage }) => {
  const backgroundStyle = {
    backgroundSize: 'cover',
    backgroundImage: `url(https://image.tmdb.org/t/p/original/${backgroundImage})`,
    // margindown: '20px',
    // marginDown: '20px',
    boxSizing: 'border-box',
  }

  return (
    <div>
      <Backdrop show={show} toggleBackdrop={modalClosed} />
      <div
        style={backgroundStyle}
        className={show ? 'modal show' : 'modal hide'}
      >
        {children}
      </div>
    </div>
  )
}

export default Modal
