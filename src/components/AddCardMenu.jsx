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
            }),
        })
    }

    return (
        <div style={{ margin: '2% 0 2% 2%' }}>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Add
            </button>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Add card</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <span>Title: </span><input id='title' required/><br/>
                            <span>Img url: </span><input id='url'/><br/>
                            <span>Description: </span><input id='description'/>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary"
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