export default function Entry(props){
    return(
        <article className="entry-container">
            <div className="main-image-container">
            <img src= {props.entry.img} />
            </div>
            <div className="Entry" > 
                <img className="markerimage" src={props.entry.markerlocation} />
                <span>{props.entry.country}</span>
                <a href= {props.entry.locationlink}>View on google maps</a>
                <h2>{props.entry.title}</h2>
                <p>{props.entry.dates}</p>
                 <p>{props.entry.text}</p>    
            </div>
            
        </article>
        
    )
}