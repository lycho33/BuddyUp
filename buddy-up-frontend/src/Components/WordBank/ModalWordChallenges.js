import React from 'react'
import '../../css/Modal.css'
import Sentences from './Sentences'
import Synonyms from './Synonyms'
import Definition from './Definition'

function ModalWordChallenges({closeModal, word}) {

  return (
    <div className='modal'>
      <div className='modal-header'>
        <h1>ModalWordChallenges</h1>
        <button onClick={() => closeModal(false)}> X </button>
      </div>
        <h3>Word: {word}</h3>
        {/* <Sentences word={word} /> */}
        <Synonyms word={word} />
        <Definition word={word} />
    </div>
  )
}

export default ModalWordChallenges