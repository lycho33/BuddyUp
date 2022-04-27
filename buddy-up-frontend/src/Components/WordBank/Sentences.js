import React from 'react'
import { useSelector, connect } from 'react-redux'

function Sentences({word}) {
    const wordbank = useSelector(state => state.wordbank)
    const wordInfo = wordbank.filter(w => w.word === word)
    const sentences = wordInfo[0].sentence
  console.log(wordInfo, sentences)

    // const renderSentences = sentences.map(s => <div>
    //   <h3>{s.t}</h3>
    // </div>)

  return (
    <div>
        <h2>Sample Sentences</h2>
        {/* {renderSentences} */}
    </div>
  )
}

export default connect()(Sentences)