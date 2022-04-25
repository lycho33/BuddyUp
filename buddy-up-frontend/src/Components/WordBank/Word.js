import React from 'react'

function Word({id, word, definition, sentence, synonym, user, clickDefChallenges}) {
  return (
    <div>
      <h3>Word: <span>{word}</span></h3>
      <h3>Definition: <span value={word} onClick={clickDefChallenges}>
                        Guess?
                      </span>
      </h3>
      <br />
    </div>
  )
}

export default Word