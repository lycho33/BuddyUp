import { useState } from 'react'
import GreetBeforeDef from './GreetBeforeDef'

function Sentences({word, display, setDisplay, sentences}) {

  const [nextChallenge, setNextChallenge] = useState('none')
  const clickNext = () => {
    setDisplay('none')
    setNextChallenge('block')
  }
// console.log(sentences)
  return (
    <>
      <div style={{display: `${display}`}}>
          <h2>Sample Sentences</h2>
          {sentences && sentences.map(s => <p>{s}</p> )}
          <br />
          <button onClick={clickNext}>Next</button>
      </div>
      <GreetBeforeDef word={word} display={nextChallenge} setDisplay={setNextChallenge}/>
    </>
  )
}

export default Sentences