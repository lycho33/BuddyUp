import { useEffect, useState } from 'react'
import { useSelector, connect } from 'react-redux'
import { getWords } from '../../redux/action'
import { getDictionary } from '../../redux/action'
import { modalAccess } from '../../redux/action'
import Word from './Word'
import ModalWordChallenges from './ModalWordChallenges'
import '../../css/Wordbank.css'

function WordBank({ getWords, getDictionary, modalAccess }) {
  const [modal, setModal] = useState(false)
  const [word, setWord] = useState('')
  const user = useSelector(state => state.user)
  const words = useSelector(state => state.wordbank)
  const state = useSelector(state => state)
  const modals = useSelector(state => state.modal)

  useEffect(() => {
    getWords(user.id)
  }, [])

  const clickDefChallenges = (e) => {
    let word = e.target.parentElement.previousElementSibling.innerHTML
    getDictionary(word)
    updateModal(word)
    setWord(word)
  }

  const updateModal = (word) => {
    let idx = words.findIndex(w => w.word === word) 
    words[idx].modal = true
    setModal(words[idx].modal)
    //using redux to close modal
    modalAccess(true)
    //how to update the redux state modal?>??
    console.log(modals)
  }

  const renderWords = words.map(w => 
    <div key={w.id}>
      <Word 
        id={w.id} 
        word={w.word} 
        clickDefChallenges={clickDefChallenges}
      /> 
    </div>
  )


  return (
    <div className='wordbank-container'>
      <h1>WordBank</h1>
      <br />
      <table>
        <tr className='header'>
          <th>Word</th>
          <th>Definition</th>
        </tr>
      </table>
      {renderWords}
      {modal && <ModalWordChallenges closeModal={setModal} word={word} />}
    </div>
  )
}

export default connect(null, { getWords, getDictionary, modalAccess })(WordBank)