import { useEffect } from 'react'
import { useSelector, connect } from 'react-redux'
import { getWords} from '../../redux/action'

function WordBank({ getWords }) {

  const user = useSelector(state => state.user)
  const words = useSelector(state => state.wordbank)

  useEffect(() => {
    getWords(user.id)
  }, [])

  const renderWords = words[0].map(w => 
        <div key={w.id}>
          <h3>Word: {w.word}</h3>
        </div>
  )
  
  return (
    <div>
      <h1>WordBank</h1>
      {renderWords}
    </div>
  )
}

export default connect(null, { getWords })(WordBank)