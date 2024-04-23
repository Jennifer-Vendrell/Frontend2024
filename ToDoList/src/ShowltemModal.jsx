const ShowItemModal = ({task}) => {
    
    return (
      <div className="modal fade" id={"ShowItemModal"+task.id}>
          <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                  <div className="modal-header">
                  <h5 
                  className="modal-title"
                  id="ShowItemModalLabel"
                  >
                     {task.task}
                      Show Item
                  </h5>
                  </div>
                  <div className="modal-body">
                    <div className="row">
                        <p className="col">
                        {task.description}  
                        </p>
                        
                    </div>
                    <div className="row">
                        <div className="col">
                            <b>Limit:</b>L{task.limit}
                        </div>
                        <div className="col">
                            <b>Location:</b>{task.Location}
                        </div>
                    </div>
                      Show selected item information
                  </div>

                  <div className="modal-footer">
                  <button className="btn btn-sm btn-outline-primary">
                    <i className="bi bi-trash"></i>
                    Delete
                  </button>

                  <button className="btn btn-sm btn-outline-primary">
                    <i className="bi bi-pencil-square"></i>
                    Edit
                  </button>
                  
                  <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  >
                    <i className="bi bi-x-lg"></i>
                      Close
                  </button>
                  
                  
                  </div>
              </div>
          </div>
      </div>
    )
  }
  
  export default ShowItemModal