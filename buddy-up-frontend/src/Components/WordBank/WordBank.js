import { useEffect } from 'react'
import { useSelector, connect } from 'react-redux'
import { getWords} from '../../redux/action'

function WordBank({ getWords }) {

  const user = useSelector(state => state.user)
  const state = useSelector(state => state)

  useEffect(() => {
    getWords(user.id)
  }, [])

  console.log(state)
  
  return (
    <div>
      <h1>WordBank</h1>

    </div>
  )
}

export default connect(null, { getWords })(WordBank)