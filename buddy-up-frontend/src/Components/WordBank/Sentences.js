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

    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        //word: TEST
    //filter OUT if one of the elements have all UNDEFINED
    //.filter(arr => arr.length > 1)[0].filter(s => s !== undefined).map

  return (
    <div>
        <h2>Sample Sentences</h2>
        {/* {renderSentences} */}
    </div>
  )
}

export default connect()(Sentences)