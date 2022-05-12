import React from 'react'
import { useSelector, connect } from 'react-redux'
import '../../css/Definition.css'
import {saveDictionary} from '../../redux/action'

function Definition({word, userDef, display, saveDictionary}) {
    const user = useSelector(state => state.user.id) 
    const wordbank = useSelector(state => state.wordbank)
    const wordInfo = wordbank.filter(w => w.word === word)
    const definition = wordInfo[0].definition

    console.log("definition", user)

    const renderDef = () => {
      if(definition){
        return definition.map((d, i) => <li key={i}><span className='def'>{d.definition}</span></li>)
      }
    }
    const clickDef = e => {
      console.log(e.target.innerHTML)
      let def = e.target.innerHTML
      saveDictionary(user, def)
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

export default connect(null, { saveDictionary })(Definition)