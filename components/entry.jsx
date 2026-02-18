export default function Entry(props){
    return(
        <article className="entry-container">
            <div className="main-image-container">
            <img src= {props.img} />
            </div>
            <div>
                <img className="markerimage" src={props.markerlocation} />
                <span>{props.country}</span>
                <a href= {props.locationlink}>View on google maps</a>
                <h2>{props.title}</h2>
                <p>{props.dates}</p>
                 <p>{props.text}</p>    
            </div>
            
        </article>
        
    )
}