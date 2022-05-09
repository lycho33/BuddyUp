import { useState } from 'react'
import GreetBeforeDef from './GreetBeforeDef'

function Sentences({word, display, setDisplay, sentences}) {

  const [nextChallenge, setNextChallenge] = useState('none')
  const clickNext = () => {
    setDisplay('none')
    setNextChallenge('block')
  }

  return (
    <>
      <div style={{display: `${display}`}}>
          <h2>Sample Sentences</h2>
          {sentences && sentences.map(s => s.map(phrase => <li>{phrase}</li>))}
          <br />
          <button onClick={clickNext}>Next</button>
      </div>
      <GreetBeforeDef word={word} display={nextChallenge} />
    </>
  )
}

export default Sentences