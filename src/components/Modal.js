import React from 'react'
import sectionimage from '../assests/images/sectionimage.png'
const Modal = () => {
  return (
    <div>
        <div className="modal fade" id="SectionModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl">
    <div className="modal-content p-0 m-0" data-bs-dismiss="modal" aria-label="Close" style={{background:"none"}}>
        <div className="row">
            <div className="col-lg-12">
          <img src={sectionimage} alt=""  className='img-fluid' />
            </div>
        </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Modal