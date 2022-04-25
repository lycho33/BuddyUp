import { useEffect } from 'react'
import { useSelector, connect } from 'react-redux'
import { getWords} from '../../redux/action'
import { getDictionary } from '../../redux/action'
import Word from './Word'

function WordBank({ getWords, getDictionary }) {

  const user = useSelector(state => state.user)
  const words = useSelector(state => state.wordbank)
  console.log(user.id, words)

  useEffect(() => {
    getWords(user.id)
  }, [])

  const clickDefChallenges = (e) => {
    let word = e.target.parentElement.previousElementSibling.firstElementChild.innerHTML
    console.log(word)
    getDictionary(word)
  }

  const renderWords = words.map(w => 
    <div key={w.id}>
      <Word 
        id={w.id} 
        word={w.word} 
        definition={w.definition} 
        sentence={w.sentence} 
        synonym={w.synonym} 
        // image_url={w.image_url} 
        user={w.user}
        clickDefChallenges={clickDefChallenges}
      /> 
    </div>
  )


  return (
    <div>
      <h1>WordBank</h1>
      <br />
      {renderWords}
    </div>
  )
}

export default connect(null, { getWords, getDictionary })(WordBank)