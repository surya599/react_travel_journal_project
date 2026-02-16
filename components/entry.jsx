export default function Entry(){
    return(
        <article className="entry-container">
            <div className="main-image-container">
            <img src="../images/mountfuji.jpg" alt="mountfuji" />
            </div>
            <div>
                <img className="markerimage" src="../images/marker.png" alt="marker" />
                <span>Japan</span>
                <a href="https://www.google.com/maps/place/Mount+Fuji/@35.360625,138.7273634,3545m/data=!3m2!1e3!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu&g_ep=EgoyMDI2MDIxMS4wIKXMDSoASAFQAw%3D%3D">View on google maps</a>
                <h2>Mount Fuji</h2>
                <p>12 Jan, 2021 - 24 Jan, 2021</p>
                 <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
                
            </div>
            
        </article>
        
    )
}