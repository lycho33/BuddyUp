import { useState } from 'react'
import Sentences from './Sentences'

function Synonyms({word, display, setDisplay, synonyms}) {

  const renderSynonyms = () => {
    if(synonyms){
      return synonyms.map((sy, i) => <li key={i}>{sy}</li> )
    }
  }

  const [nextChallenge, setNextChallenge] = useState('none')
  const clickNext = () => {
    setDisplay('none')
    setNextChallenge('block')
  }

  return (
    <>
      <div style={{ display: `${display}`}}>
          <h3>Synonyms</h3>
          {renderSynonyms()}
          <button onClick={clickNext}>Next</button>
          <br />
      </div>
      <Sentences word={word} display={nextChallenge} />
    </>
  )
}

export default Synonyms