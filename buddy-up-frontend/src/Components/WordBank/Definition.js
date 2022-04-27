import React from 'react'
import { useSelector } from 'react-redux'

function Definition({word}) {
    const wordbank = useSelector(state => state.wordbank)
    const wordInfo = wordbank.filter(w => w.word === word)
    const definition = wordInfo[0].definition
    console.log(definition)
  return (
    <div>
        Definition
    </div>
  )
}

export default Definition