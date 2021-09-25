import React from 'react'

export const AddToDo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = () => {

    }
    return (
        <div className="container my-3">
            <h3 className="text-center">Add a todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label for="title" className="form-label">Todo Title</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        
                </div>
                <div className="mb-3">
                    <label for="desc" className="form-label">Todo Description</label>
                    <input type="text" value="desc" className="form-control" id="desc"/>
                </div>
              
                <button type="submit" className="btn btn-success">Add todo</button>
            </form>
        </div>
    )
}
