import React from 'react'
import '../../css/Wordbank.css'

function Word({id, word, definition, sentence, synonym, user, clickDefChallenges}) {
  return (
    <>
      <tr>
        <td>{word}</td>
        <td value={word} onClick={clickDefChallenges}>Guess?</td>
      </tr>
    </>
  )
}

export default Word