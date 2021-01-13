import React, { useEffect }  from 'react'
import '../../styles/modal.css'

const Modal = ({ open, setOpen, children }) => {
  useEffect(() => {
		function onKeyDown(event) {
			if (event.keyCode === 27) {
				// Close the modal when the Escape key is pressed
				setOpen(!open);
			}
		}

		// Prevent scolling
		document.body.style.overflow = "hidden";
		document.addEventListener("keydown", onKeyDown);

		// Clear things up when unmounting this component
		return () => {
			document.body.style.overflow = "visible";
			document.removeEventListener("keydown", onKeyDown);
		};
	});

  return (
    <>
      <div className={open ? 'modal ' : '.modal show'}>
        <div className={open ? "modalbox" : 'modalbox hide'}>
          <div className="modal-header">
            <div className="modal-head-content">
            <span onClick={() => setOpen(!open)} className="cross">
            <i class="fas fa-times fa-2x"></i>
              </span>
            </div>
          </div>
          {children}
        </div>
      </div>
    </>
  )
}

export default Modal



