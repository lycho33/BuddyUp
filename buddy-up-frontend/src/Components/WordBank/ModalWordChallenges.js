import React from 'react'
import '../../css/Modal.css'

function ModalWordChallenges({style}) {
    //when clicked, the modal becomes a block
  return (
    <div className='modal' style={{display: `${style}`}}>
        <h1>ModalWordChallenges</h1>
    </div>
  )
}

export default ModalWordChallenges