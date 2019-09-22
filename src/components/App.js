import React from 'react'
import NavBar from './NavBar'
import GiftListContainer from './containers/GiftListContainer'

// the App component should render out the GifListContainer component 

const App = () => {
  return (
    <div>
      <GiftListContainer />
        < NavBar color='black' title="Giphy Search" />
    </div>
  )
}

export default App
