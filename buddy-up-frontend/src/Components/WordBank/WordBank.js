import { useEffect } from 'react'
import { useSelector, connect } from 'react-redux'
import { getWords} from '../../redux/action'
import { getDictionary } from '../../redux/action'
import Word from './Word'

function WordBank({ getWords, getDictionary }) {

  const user = useSelector(state => state.user)
  const words = useSelector(state => state.wordbank)
  console.log(user.id)

  useEffect(() => {
    getWords(user.id)
  }, [])

  const clickDefChallenges = (e) => {
    let word = e.target.parentElement.previousElementSibling.firstElementChild.innerHTML
    console.log(word)
    //send it to fetch request
    getDictionary(word)
  }

  // const renderWords = words[0].map(w => 
  //   <div key={w.id}>
  //     <h3>Word: <span>{w.word}</span></h3>
  //     <h3>Definition: <span value={w.word} onClick={clickDefChallenges}>
  //                       Guess?
  //                     </span>
  //     </h3>
  //     <br />
  //   </div>
  // )

  return (
    <div>
      <h1>WordBank</h1>
      <br />
      {/* {words[0].map(w => {
        <Word 
          id={w.id} 
          word={w.word} 
          definition={w.definition} 
          sentence={w.sentence} 
          synonym={w.synonym} 
          // image_url={w.image_url} 
          user={w.user}/>
      })} */}
      <Word />
    </div>
  )
}

export default connect(null, { getWords, getDictionary })(WordBank)