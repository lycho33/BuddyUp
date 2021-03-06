import { useState } from 'react'
import { useSelector } from 'react-redux'
import Synonyms from './Synonyms'
import Sentences from './Sentences'
import '../../css/Wordbank.css'

function Greeting({word, closeModal}) {

  const wordbank = useSelector(state => state.wordbank)
  const wordInfo = wordbank.filter(w => w.word === word)
  const synonyms = wordInfo[0].synonyms
  const sentences = wordInfo[0].sentence

    const [currentDisplay, setCurrentDisplay] = useState('block')
    const [nextDisplay, setNextDisplay] = useState('none')
    const [nextChallenge, setNextChallenge] = useState('none')

    const clickNext = () => {
        if(synonyms) synonyms.length !== 0 && setNextDisplay('block')
        sentences && setNextChallenge('block')
        setCurrentDisplay('none')
    }

  return (
    <>
        <div style={{ display: `${currentDisplay}`}} className='greet-container'>
            <h3>Can you guess the definition of this word?</h3>
            <button className='button-56' onClick={clickNext} role='button'>Yes</button>
        </div>
        
        <Synonyms word={word} synonyms={synonyms} display={nextDisplay} setDisplay={setNextDisplay} closeModal={closeModal}/>

        {synonyms 
          && 
        synonyms.length === 0 
          && 
        <Sentences word={word} display={nextChallenge} sentences={sentences} setDisplay={setNextChallenge} closeModal={closeModal}/>}
    </>
  )
}

export default Greeting