import { useState } from 'react'
import { useSelector, connect } from 'react-redux'
import {saveDictionary} from '../../redux/action'
import '../../css/Definition.css'

function Definition({word, userDef, display, saveDictionary, closeModal}) {
    const [modal, setModal] = useState(false)
    const user_id = useSelector(state => state.user.id) 
    const wordbank = useSelector(state => state.wordbank)
    const wordInfo = wordbank.filter(w => w.word === word)
    const wordbank_id = wordInfo[0].id
    const definition = wordInfo[0].definition

    const renderDef = () => {
      if(definition){
        return definition.map((d, i) => <p key={i}><span className='def'>{d.definition}</span></p>)
      }
    }

    const clickDef = e => {
      let def = e.target.innerHTML
      saveDictionary(user_id, wordbank_id, def)
      //close the modal with a timer
      updateModal(word)
    }

    const updateModal = (word) => {
      let idx = wordbank.findIndex(w => w.word === word) 
      wordbank[idx].modal = false
      setModal(false)
      console.log(wordbank[idx].modal)
      closeModal(false)
    }

  return (
    <div style={{ display: `${display}`}}>
        <h4>Choose the definitions you like and it will be save to your wordbank</h4>
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