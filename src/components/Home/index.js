import {Component} from 'react'
import {Link} from 'react-router-dom'
import MeetupContext from '../../context/MeetupContext'
import Header from '../Header'

const topicsList = [
  {id: 'ARTS_AND_CULTURE', displayText: 'Arts and Culture'},
  {id: 'CAREER_AND_BUSINESS', displayText: 'Career and Business'},
  {id: 'EDUCATION_AND_LEARNING', displayText: 'Education and Learning'},
  {id: 'FASHION_AND_BEAUTY', displayText: 'Fashion and Beauty'},
  {id: 'GAMES', displayText: 'Games'},
]

class Home extends Component {
  onRegister = value => {
    const {setRegistered} = value
    setRegistered(true)
  }

  renderRegisterView = value => (
    <div className="register-details-container">
      <h1 className="register-heading">Welcome to Meetup</h1>
      <p className="register-para">Please register for the topic</p>
      <Link to="/register">
        <button
          type="button"
          className="login-button"
          onClick={() => this.onRegister(value)}
        >
          Register
        </button>
      </Link>
    </div>
  )

  renderRegisteredView = (activeTopic, name) => {
    const course = topicsList.find(each => each.id === activeTopic)
    return (
      <div className="details-container">
        <h1 className="greeting">Hello {name}</h1>
        <p className="course">Welcome to {course.displayText}</p>
      </div>
    )
  }

  render() {
    return (
      <MeetupContext.Consumer>
        {value => {
          const {activeTopic, name, isRegistered} = value

          return (
            <div className="home-container">
              <Header />
              <div className="content-container">
                {isRegistered
                  ? this.renderRegisteredView(activeTopic, name)
                  : this.renderRegisterView(value)}
                <img
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </div>
            </div>
          )
        }}
      </MeetupContext.Consumer>
    )
  }
}

export default Home
