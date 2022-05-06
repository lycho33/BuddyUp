import React from 'react'
import { useSelector } from 'react-redux'

function Definition({word}) {
    const wordbank = useSelector(state => state.wordbank)
    const wordInfo = wordbank.filter(w => w.word === word)
    const definition = wordInfo[0].definition
    // console.log("definition", definition)

    const renderDef = () => {
      if(definition){
        return definition.map((d, i) => <li key={i}>{d.definition}</li>)
      }
    }
    
  return (
    <div>
        <h3>Definition</h3>
        {renderDef()}
        <br />
    </div>
  )
}

export default Definition