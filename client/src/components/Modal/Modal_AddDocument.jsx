import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'
import { createDocAsync } from '../../redux/stores/documents/actions'

export default function Modal_AddDocument() {
  const dispatch = useDispatch()
  const { user } = useAuth0()

  const documents = useSelector((state) => state.documents.documents)
  const error = useSelector((state) => state.documents.error)

  const [inputData, setInputData] = useState('')

  console.log(documents)

  const submitName = () => {
    // slicing the user id to remove "auth0|"
    const oldId = user.sub
    const newID = oldId.slice(6, oldId.length)

    // createDocAsync({ title: 'test123', admin: newID })

    dispatch(createDocAsync({ title: inputData, admin: newID }))
  }

  return (
    <div>
      <h2>Add document</h2>
      <div>Please enter the name of the empty document to create.</div>
      <form>
        <input
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
        <button onClick={submitName}>Submit</button>
      </form>
    </div>
  )
}
