import { useState } from 'react'
import { useSelector, connect } from 'react-redux'
import GreetBeforeDef from './GreetBeforeDef'

function Sentences({word, display, setDisplay}) {
  const wordbank = useSelector(state => state.wordbank)
  const wordInfo = wordbank.filter(w => w.word === word)
  const sentences = wordInfo[0].sentence
  
  const renderSentences = () => {
    if(sentences){
      return sentences.map(arr => arr.filter(sents => sents !== undefined))
      .filter(s => s.length > 0)
      .map(s => s.map(phrase => <li>{phrase}</li>))
    }
  }
  const [nextChallenge, setNextChallenge] = useState('none')
  const clickNext = () => {
    setDisplay('none')
    setNextChallenge('block')
  }

  return (
    <>
      <div style={{display: `${display}`}}>
          <h2>Sample Sentences</h2>
          {renderSentences()}
          <br />
          <button onClick={clickNext}>Next</button>
      </div>
      <GreetBeforeDef word={word} display={nextChallenge} />
    </>
  )
}

export default connect()(Sentences)