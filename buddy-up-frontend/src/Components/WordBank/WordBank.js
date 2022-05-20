import { useEffect, useState } from 'react'
import { useSelector, connect } from 'react-redux'
import { getWords } from '../../redux/action'
import { getDictionary } from '../../redux/action'
import Word from './Word'
import ModalWordChallenges from './ModalWordChallenges'
import '../../css/Wordbank.css'

function WordBank({ getWords, getDictionary }) {
  const [word, setWord] = useState('')
  const user = useSelector(state => state.user)
  const words = useSelector(state => state.wordbank)
  const modal = useSelector(state => state.wordbank.modal)
console.log(words)
  useEffect(() => {
    getWords(user.id)
  }, [])

  const clickDefChallenges = (e) => {
    let word = e.target.parentElement.previousElementSibling.innerHTML
    getDictionary(word)
    modal = true
    setWord(word)
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
      {modal && <ModalWordChallenges closeModal={modal} word={word} />}
    </div>
  )
}

export default connect(null, { getWords, getDictionary })(WordBank)