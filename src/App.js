import {Component} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import MeetupContext from './context/MeetupContext'
import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'
import './App.css'

class App extends Component {
  state = {
    activeTopic: 'ARTS_AND_CULTURE',
    name: '',
    isRegistered: false, // New state to manage registration status
  }

  changeTopic = activeTopic => {
    this.setState({activeTopic})
  }

  changeName = name => {
    this.setState({name})
  }

  setRegistered = isRegistered => {
    this.setState({isRegistered})
  }

  render() {
    const {activeTopic, name, isRegistered} = this.state
    return (
      <MeetupContext.Provider
        value={{
          activeTopic,
          changeTopic: this.changeTopic,
          name,
          changeName: this.changeName,
          isRegistered,
          setRegistered: this.setRegistered,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </MeetupContext.Provider>
    )
  }
}

export default App
