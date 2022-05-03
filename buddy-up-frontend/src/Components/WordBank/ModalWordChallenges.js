import React from 'react'
import '../../css/Modal.css'
import Sentences from './Sentences'
import Definition from './Definition'
import Greeting from './Greeting'

function ModalWordChallenges({closeModal, word}) {

  return (
    <div className='modal'>
      <div className='modal-header'>
        <h1>ModalWordChallenges</h1>
        <button onClick={() => closeModal(false)}> X </button>
      </div>
        <h3>Word: {word}</h3>
        < Greeting word={word}/>

        {/* <Sentences word={word} /> */}
        <Definition word={word} />
    </div>
  )
}

export default ModalWordChallenges