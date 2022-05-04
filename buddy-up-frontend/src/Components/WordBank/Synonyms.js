import React from 'react'
import { useSelector } from 'react-redux'
import Sentences from './Sentences'

function Synonyms({word, display}) {
    const wordbank = useSelector(state => state.wordbank)
    const wordInfo = wordbank.filter(w => w.word === word)
    const synonyms = wordInfo[0].synonyms

  const renderSynonyms = () => {
    if(synonyms){
      return synonyms.map((sy, i) => <li key={i}>{sy}</li> )
    }
  }

  return (
    <div style={{ display: `${display}`}}>
        <h3>Synonyms</h3>
        {renderSynonyms()}
        <br />
        <Sentences word={word} />
    </div>
  )
}

export default Synonyms