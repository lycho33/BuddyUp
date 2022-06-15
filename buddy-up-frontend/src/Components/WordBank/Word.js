import React from 'react'
import '../../css/Wordbank.css'
import { useSelector } from 'react-redux'


function Word({id, word, clickDefChallenges}) {
  const words = useSelector(state => state.wordbank)
  let idx = words.findIndex(w => w.word === word) 
  let definition = words[idx].definition

  const renderDefinition = () => {
      if(definition !== null && typeof definition === 'string'){ 
        return <span>{`${definition}`}</span>
      } else {
        return <span className='guess'>Guess?</span>
      }
  } 
  
  return (
    <>
      <tr key={id}>
        <td className='word'>{word}</td>
        <td 
          className='wordInfo'
          value={word} 
          onClick={clickDefChallenges}>
            {renderDefinition()}
        </td>
      </tr>
    </>
  )
}

export default Word