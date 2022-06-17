import { useState } from 'react'
import GreetBeforeDef from './GreetBeforeDef'
import '../../css/Modal.css'

function Sentences({word, display, setDisplay, sentences}) {

  const [nextChallenge, setNextChallenge] = useState('none')
  const clickNext = () => {
    setDisplay('none')
    setNextChallenge('block')
  }

  return (
    <>
      <div className='sentences-container' style={{display: `${display}`}}>
          <h3>Sample Sentences</h3>
          <div className='sentences-list'>
            {sentences && sentences.map(s => <li style={{margin: '10px 0'}}>{s}</li> )}
          </div>
          <br />
          <button className='button-56' onClick={clickNext}>Next</button>
      </div>
      <GreetBeforeDef word={word} display={nextChallenge} setDisplay={setNextChallenge}/>
    </>
  )
}

export default Sentences