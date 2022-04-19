import { useEffect } from 'react'
import { useSelector } from 'react-redux'

function WordBank() {

  const user = useSelector(state => state.user)
  
  
  console.log(user)
  
  // const renderWord = () => {
  //   word.map(w => {
  //     return(
  //       <h3>{w.word}</h3>
  //     )
  //   })
  // }
  return (
    <div>
      <h1>WordBank</h1>

    </div>
  )
}

export default WordBank