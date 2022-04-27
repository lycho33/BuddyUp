import React from 'react'
import { useSelector } from 'react-redux'

function Synonyms({word}) {
    const wordbank = useSelector(state => state.wordbank)
    const wordInfo = wordbank.filter(w => w.word === word)
    const synonyms = wordInfo[0].synonyms
    console.log(wordInfo, synonyms.map(sy => <li>{sy}</li>))


  return (
    <div>
        <h1>Synonyms</h1>
        {synonyms.map((sy, i) => <li key={i}>{sy}</li>)}
    </div>
  )
}

export default Synonyms