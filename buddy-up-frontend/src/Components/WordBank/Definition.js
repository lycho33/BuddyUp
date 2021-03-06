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
      if(typeof definition === 'object'){
        return definition.map((d, i) => <p key={i}><span className='def'>{`${d}`}</span></p>)
      } else {
        console.log(definition)
        //close the modal HERE
      }
    }

    const clickDef = e => {
      let def = e.target.innerHTML
      debugger
      saveDictionary(user_id, wordbank_id, def)
      //close the modal with a timer
 
    }

  return (
    <div className='def-container' style={{ display: `${display}`}}>
        <h4>Choose the definitions you like and it will be saved to your wordbank</h4>
        <div className='' onClick={clickDef}>
          <div className='my-def'>
            <h3>Your Definition</h3>
            <p><span className='def'>{userDef}</span></p>
          </div>

          <div className='dictionary-def'>         
            <h3>Dictionary Definition</h3>
            <div className='real-def'>
              {renderDef()}
            </div>
          </div>
 
        </div>

        <br />
    </div>
  )
}

export default connect(null, { saveDictionary })(Definition)