import React from 'react'
import '../../css/Modal.css'
import Sentences from './Sentences'

function ModalWordChallenges({closeModal}) {
    //when clicked, the modal becomes a block
  return (
    <div className='modal'>
        <h1>ModalWordChallenges</h1>
        <button onClick={() => closeModal(false)}> X </button>
        <Sentences />
    </div>
  )
}

export default ModalWordChallenges