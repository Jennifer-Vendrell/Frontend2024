
const ShowltemModal = () => {
  return (
    <div className="modal face" id="showItemModal">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title"
                        id="showItemModalLabel"
                    >
                        show Item
                    </h5>
                </div>
                <div className="modal-body">
                    show select item information
                </div>
                <div className="modal-footer">
                    <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                    >
                        close
                    </button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default ShowltemModal