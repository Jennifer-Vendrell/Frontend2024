import ShowItemModal from "./ShowltemModal"

const Listittem=({task}) => {
  return (
    <>
    <div className="row">
        <div className="col-6">
          <ShowItemModal task={task} />
          <input type="checkbox"/>
          <button 
          className="btn btn-link"
          data-bs-target={"#ShowItemModal"+task.id}
          data-bs-toggle="modal"
          >{task.task}</button>
        </div>

        <div className="col-3">
          {task.limit}
        </div>

        <div className="col-3">
          {task.location}
        </div>
        <div className="col">
         
        </div>
      </div>
    </>
  )
}

export default Listittem