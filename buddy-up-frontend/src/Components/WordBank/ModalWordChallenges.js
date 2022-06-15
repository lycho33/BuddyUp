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
      <div className='close-container' onClick={() => closeModal()}>
        <div class="leftright"></div>
        <div class="rightleft"></div>
      </div>
      <h3>Word: {word}</h3>
      <div className='modal-header'>
        <h1>Word Challenges</h1>
      </div>
      
        < Greeting word={word} closeModal={closeModal}/>
    </div>
  )
}

export default ModalWordChallenges