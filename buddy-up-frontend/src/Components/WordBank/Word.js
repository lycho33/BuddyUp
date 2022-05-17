import React from 'react'
import '../../css/Wordbank.css'

function Word({id, word, clickDefChallenges}) {
  return (
    <>
      <tr key={id}>
        <td className='word'>{word}</td>
        {/* do a conditional here to replace GUESS with the definition*/}
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