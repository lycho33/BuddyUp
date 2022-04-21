import { useEffect } from 'react'
import { useSelector, connect } from 'react-redux'
import { getWords} from '../../redux/action'

function WordBank({ getWords }) {

  const user = useSelector(state => state.user)
  const words = useSelector(state => state.wordbank)

  useEffect(() => {
    getWords(user.id)
  }, [])

  const clickDefChallenges = (e) => {
    console.log(e.target)
  }

  const renderWords = words[0].map(w => 
        <div key={w.id}>
          <h3>Word: {w.word}</h3>
          <h3>Definition: <span onClick={clickDefChallenges}>Guess?</span></h3>
          <br />
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

export default connect(null, { getWords })(WordBank)