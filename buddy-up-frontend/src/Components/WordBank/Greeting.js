import { useState } from 'react'
import { useSelector } from 'react-redux'
import Synonyms from './Synonyms'
import Sentences from './Sentences'

function Greeting({word}) {

  const wordbank = useSelector(state => state.wordbank)
  const wordInfo = wordbank.filter(w => w.word === word)
  const synonyms = wordInfo[0].synonyms
  const sentences = wordInfo[0].sentence

    const [currentDisplay, setCurrentDisplay] = useState('block')
    const [nextDisplay, setNextDisplay] = useState('none')
    const [nextChallenge, setNextChallenge] = useState('none')

    const clickNext = () => {
        synonyms.length !== 0 ? setNextDisplay('block') : setNextDisplay('none')
        sentences && setNextChallenge('block')
        setCurrentDisplay('none')
    }

  return (
    <>
        <div style={{ display: `${currentDisplay}`}}>
            <h4>Can you guess the definition of this word?</h4>
            <button onClick={clickNext}>Yes</button>
        </div>
        <Synonyms word={word} synonyms={synonyms} display={nextDisplay} setDisplay={setNextDisplay} />
        <Sentences word={word} display={nextChallenge} />
    </>
  )
}

export default Greeting