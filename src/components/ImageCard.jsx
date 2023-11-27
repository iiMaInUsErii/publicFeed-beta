const ImageCard = (props) => {
    let placeholder = 'https://placehold.co/200'
  
    return (
        <>
            <img
                src={ props.url }
                onError={ (e) => e.target.src = placeholder }
            />
        </>
    )
}

export default ImageCard