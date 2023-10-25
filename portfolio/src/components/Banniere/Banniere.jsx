import "./Banniere.css"


function Banner(picture, alt) {
    return (
        <div className="Banner">
            <img className="Banner-img" src={picture} alt={alt} />

            <h1 className="Banner-txt">Portfolio de dede</h1>

        </div>
        
    )
    
}


export default Banner