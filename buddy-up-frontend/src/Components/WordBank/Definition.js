import React from 'react'
import { useSelector } from 'react-redux'

function Definition({word, userDef, display}) {
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
    <div style={{ display: `${display}`}}>
        <h4>Your Definition: {userDef}</h4>
        <h3>Dictionary Definition</h3>
        {renderDef()}
        <br />
    </div>
  )
}

export default Definition