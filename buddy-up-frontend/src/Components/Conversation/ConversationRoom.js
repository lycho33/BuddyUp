import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { getConvoData } from '../../redux/action'

function ConversationRoom({ getConvoData }) {

  useEffect(() => {
    getConvoData()
  }, [])

  return (
    <div>ConversationRoom</div>
  )
}

export default connect(null, { getConvoData })(ConversationRoom)