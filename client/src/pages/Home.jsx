import React from 'react'
<<<<<<< HEAD
import { connect, useDispatch } from 'react-redux'
=======
import { useDispatch, useSelector } from 'react-redux'
>>>>>>> master
import { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { fetchUserInfoAsync } from '../redux/stores/user/actions'
import { fetchUserDocsAsync } from '../redux/stores/document/actions'
import { LeftContainer } from '../components'

function Home({ fetchUserInfoAsync, isFetching, info, errorMessage }) {
  // console.log(isFetching);
  const { user } = useAuth0()
  console.log(user)
  useEffect(() => {
    if (user) {
<<<<<<< HEAD
      fetchUserInfoAsync(user)
=======
      // dispatching async call with the user as a parameter
      dispatch(fetchUserInfoAsync(user))
      dispatch(fetchUserDocsAsync(user))
>>>>>>> master
    }
  }, [fetchUserInfoAsync, fetchUserDocsAsync])

<<<<<<< HEAD
  console.log(info)
=======
  // console.log(user)
  // console.log(userInfo)
  // console.log(errorMessage)
>>>>>>> master

  return (
    <div className="home-root">
      <div className="left-container">
        <LeftContainer />
      </div>
      <div className="center-container">
<<<<<<< HEAD
        <div className="home-header">Doc Tracer Logo</div>
=======
        <div className="home-header">
          <img
            className="home-logo-banner"
            src="/assets/images/Doc_Tracer_Logo_2.png"
          ></img>
        </div>
>>>>>>> master
        <div className="home-subheader">Recent Documents</div>
      </div>
      <div className="right-container">Notifications</div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  isFetching: state.user.isFetching,
  info: state.user.info,
  errorMessage: state.user.errorMessage,
})
const mapDispatchToProps = (dispatch) => ({
  fetchUserInfoAsync: (user) => dispatch(fetchUserInfoAsync(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
