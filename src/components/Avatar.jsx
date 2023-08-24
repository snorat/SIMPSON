function Avatar ({ image, firstName, lastName }) {

    return (
        <>
        <h1>{firstName}</h1>
        <p>{lastName}</p>
        <img src={image} alt={firstName} />
        </>
    )
}

export default Avatar