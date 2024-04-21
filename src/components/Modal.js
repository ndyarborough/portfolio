import React, { useState } from 'react';
import '../App.css'
function Modal({ src, onClose }) {
  return (
    <div className="modal" id="modal">
      <span className="close" onClick={onClose}>&times;</span>
      <img src={src} alt="modal" className="modal-content" />
    </div>
  );
}

export default Modal;
