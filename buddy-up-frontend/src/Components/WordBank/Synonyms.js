import { useState } from 'react'
import { useSelector } from 'react-redux'
import Sentences from './Sentences'
import GreetBeforeDef from './GreetBeforeDef'

function Synonyms({word, display, setDisplay, synonyms, closeModal}) {

  //SENTENCES
  const wordbank = useSelector(state => state.wordbank)
  const wordInfo = wordbank.filter(w => w.word === word)
  const sentences = wordInfo[0].sentence


// console.log(sentences)
  //SYNONYMS
  const renderSynonyms = () => {
    if(synonyms){
      return synonyms.map((sy, i) => <li key={i}>{sy}</li> )
    }
  }

  //DISPLAY A CHALLENGE
  const [nextChallenge, setNextChallenge] = useState('none')
  const [nextGreeting, setNextGreeting] = useState('none')
  const clickNext = () => {
    setDisplay('none')
    setNextChallenge('block')
    setNextGreeting('block')
    console.log(nextGreeting)
  }

  return (
    <>
      <div style={{ display: `${display}`}}>
          <h3>Synonyms</h3>
          {renderSynonyms()}
          <br />
          <button onClick={clickNext}>Next</button>
          <br />
      </div>

      {sentences
        &&
      sentences.length > 0
        &&
      <Sentences word={word} sentences={sentences} display={nextChallenge} setDisplay={setNextChallenge} closeModal={closeModal}/>
      }

      {sentences
        &&
      sentences.length === 0
        &&
      <GreetBeforeDef word={word} display={nextGreeting} setDisplay={setNextGreeting} closeModal={closeModal}/>
      }
    </>
  )
}

export default Synonyms