import React from 'react'
import '../../css/Wordbank.css'

function Word({id, word, definition, sentence, synonym, user, clickDefChallenges}) {
  return (
    <>
      <tr key={id}>
        <td className='word'>{word}</td>
        <td 
          className='wordInfo'
          value={word} 
          onClick={clickDefChallenges}>
            <span>Guess?</span>
        </td>
      </tr>
    </>
  )
}

export default Word