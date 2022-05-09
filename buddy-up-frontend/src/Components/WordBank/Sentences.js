import React from 'react'
import { useSelector, connect } from 'react-redux'

function Sentences({word}) {
    const wordbank = useSelector(state => state.wordbank)
    const wordInfo = wordbank.filter(w => w.word === word)
    const sentences = wordInfo[0].sentence

    // const renderSentences = 
    //   sentences.map(arr => arr.filter(sents => sents !== undefined))
    //   .filter(s => s.length > 0)


  return (
    <div>
        <h2>Sample Sentences</h2>
        {sentences && 
        sentences.map(arr => arr.filter(sents => sents !== undefined))
        .filter(s => s.length > 0)
        .map(s => s.map(phrase => <li>{phrase}</li>))
        }
    </div>
  )
}

export default connect()(Sentences)