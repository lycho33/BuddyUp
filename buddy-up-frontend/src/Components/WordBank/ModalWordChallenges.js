import React from 'react'
import '../../css/Modal.css'
import Greeting from './Greeting'
import { useSelector } from 'react-redux'

function ModalWordChallenges({closeModal, word}) {
  const state = useSelector(state => state)
// console.log(state)
  return (
    //close with display: none
    <div className='modal'>
      <div className='modal-header'>
        <h1>ModalWordChallenges</h1>
        <button onClick={() => closeModal()}> X </button>
      </div>
        <h3>Word: {word}</h3>
        < Greeting word={word} closeModal={closeModal}/>
    </div>
  )
}

export default ModalWordChallenges