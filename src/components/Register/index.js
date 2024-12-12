import {Component} from 'react'
import MeetupContext from '../../context/MeetupContext'
import Header from '../Header'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class Register extends Component {
  state = {showErrorMsg: false}

  onSubmitFn = (event, name, setRegistered) => {
    event.preventDefault()
    const {history} = this.props
    if (name === '') {
      this.setState({showErrorMsg: true})
    } else {
      setRegistered(true)
      history.replace('/')
    }
  }

  render() {
    const {showErrorMsg} = this.state
    return (
      <MeetupContext.Consumer>
        {value => {
          const {activeTopic, name, changeTopic, changeName, setRegistered} =
            value
          const onChangeName = event => {
            changeName(event.target.value)
          }
          const onChangeTopic = event => {
            changeTopic(event.target.value)
          }

          return (
            <div className="register-container">
              <Header />
              <div className="content-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                  alt="website register"
                  className="register-image"
                />
                <form
                  onSubmit={event =>
                    this.onSubmitFn(event, name, setRegistered)
                  }
                  className="form-container"
                >
                  <h1 className="heading">Let us join</h1>
                  <div className="input-container">
                    <label className="input-label" htmlFor="username">
                      NAME
                    </label>
                    <input
                      type="text"
                      id="username"
                      className="username-input-field"
                      value={name}
                      onChange={onChangeName}
                      placeholder="Your name"
                    />
                  </div>
                  <div className="input-container">
                    <label className="input-label" htmlFor="topic">
                      TOPICS
                    </label>
                    <select
                      className="topic-dropdown"
                      value={activeTopic}
                      onChange={onChangeTopic}
                      id="topic"
                    >
                      {topicsList.map(eachOption => (
                        <option key={eachOption.id} value={eachOption.id}>
                          {eachOption.displayText}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button type="submit" className="login-button">
                    Register Now
                  </button>
                  {showErrorMsg && (
                    <p className="error-message">Please enter your name</p>
                  )}
                </form>
              </div>
            </div>
          )
        }}
      </MeetupContext.Consumer>
    )
  }
}

export default Register
