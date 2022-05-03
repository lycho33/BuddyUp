import { useState } from 'react'
import Synonyms from './Synonyms'

function Greeting({word}) {
    const [currentDisplay, setCurrentDisplay] = useState('block')
    const [nextDisplay, setNextDisplay] = useState('none')

    const clickNext = () => {
        setNextDisplay('block')
        setCurrentDisplay('none')
    }

  return (
    <>
        <div style={{ display: `${currentDisplay}`}}>
            <h4>Can you guess the definition of this word?</h4>
            <button onClick={clickNext}>Yes</button>
        </div>
        <Synonyms word={word} display={nextDisplay}/>
    </>
  )
}

export default Greeting