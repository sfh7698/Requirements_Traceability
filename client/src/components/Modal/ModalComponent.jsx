import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Modal from 'react-modal'
import { setModalObject } from '../../redux/stores/common/actions'

import { Modal_AddDocument, Modal_RemoveDocument, Modal_InviteUser } from './'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    height: '50%'
  },
}

export default function ModalComponent() {
  const modalObject = useSelector((state) => state.common.modalObject, [])
  const dispatch = useDispatch()

  const closeModal = () => {
    dispatch(setModalObject({ visible: false, mode: 0 }))
  }

  return (
    <div className="modal-root">
      {modalObject.visible ? (
        <Modal
          isOpen={modalObject.visible}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          ariaHideApp={false}
        >
          {modalObject.mode == 0 ? (
            <Modal_AddDocument />
          ) : modalObject.mode == 1 ? (
            <Modal_RemoveDocument />
          ) : modalObject.mode == 2 ? (
            <Modal_InviteUser />
          ): (
            <></>
          )}
          <button onClick={closeModal}>close</button>
        </Modal>
      ) : (
        <></>
      )}
    </div>
  )
}
