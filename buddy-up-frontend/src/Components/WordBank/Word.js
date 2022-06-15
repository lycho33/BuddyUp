import React from 'react'
import '../../css/Wordbank.css'
import { useSelector } from 'react-redux'


function Word({id, word, clickDefChallenges}) {
  const words = useSelector(state => state.wordbank)
  let idx = words.findIndex(w => w.word === word) 
  let definition = words[idx].definition
  console.log(definition)
  console.log(typeof definition)

  const renderDefinition = () => {
      if(definition !== null){ 
        return <span>{`${definition}`}</span>
      } else {
        return <span>Guess?</span>
      }
  } 
  
  return (
    <>
      <tr key={id}>
        <td className='word'>{word}</td>
        {/* do a conditional here to replace GUESS with the definition*/}
        <td 
          className='wordInfo'
          value={word} 
          onClick={clickDefChallenges}>
            {renderDefinition()}
            {/* <span>Guess?</span> */}
        </td>
      </tr>
    </>
  )
}

export default Word