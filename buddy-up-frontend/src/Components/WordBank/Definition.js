import React from 'react'
import { useSelector } from 'react-redux'
import '../../css/Definition.css'

function Definition({word, userDef, display}) {
    const wordbank = useSelector(state => state.wordbank)
    const wordInfo = wordbank.filter(w => w.word === word)
    const definition = wordInfo[0].definition
    // console.log("definition", definition)

    const renderDef = () => {
      if(definition){
        return definition.map((d, i) => <li key={i}><span className='def'>{d.definition}</span></li>)
      }
    }
    const clickDef = e => {
      console.log(e.target.innerHTML)
    }

  return (
    <div style={{ display: `${display}`}}>
        <h2>Choose the definitions you like and it will be save to your wordbank</h2>
        <br />
        <div onClick={clickDef}>
          <h4>Your Definition: <span className='def'>{userDef}</span></h4>
          <h3>Dictionary Definition</h3>
          {renderDef()}
        </div>

        <br />
    </div>
  )
}

export default Definition