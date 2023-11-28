const AddCardMenu = () => {

    const sendData = () => {
        fetch("https://card-4ede6-default-rtdb.firebaseio.com/cards.json", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: document.getElementById('title').value,
                img: document.getElementById('url').value,
                description: document.getElementById('description').value,
                time: new Date().getTime(),
            }),
        }).then(() => {
            window.location.reload()
        })
    }

    return (
        <div style={{ margin: '2% 0 2% 2%' }}>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Add
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Add card</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <span>Title: </span><input id='title' required/><br/>
                            <span>Img url: </span><input id='url'/><br/>
                            <span>Description: </span><input id='description'/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary"
                                onClick={() => {
                                    sendData()
                                }}
                            >Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddCardMenu