import React from 'react'
import { useSelector, connect } from 'react-redux'

function Sentences({word, display}) {
    const wordbank = useSelector(state => state.wordbank)
    const wordInfo = wordbank.filter(w => w.word === word)
    const sentences = wordInfo[0].sentence
  
  const renderSentences = () => {
    if(sentences){
      return sentences.map(arr => arr.filter(sents => sents !== undefined))
      .filter(s => s.length > 0)
      .map(s => s.map(phrase => console.log(!!phrase)))
    }
  }


  return (
    <div style={{display: `${display}`}}>
        <h2>Sample Sentences</h2>
        {renderSentences()}
    </div>
  )
}

export default connect()(Sentences)