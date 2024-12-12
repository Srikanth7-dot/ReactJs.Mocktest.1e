import React from 'react'

const MeetupContext = React.createContext({
  name: '',
  changeName: () => {},
  activeTopic: 'ARTS_AND_CULTURE',
  changeTopic: () => {},
  isRegistered: false, // New state to manage registration
  setRegistered: () => {}, // New function to update registration status
})

export default MeetupContext
