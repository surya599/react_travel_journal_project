import Header from "./components/header"
import Entry from "./components/entry"
export default function App()
{
    return(
        <>
        <Header />
        <Entry 
            title = "Mount Fuji"
            country = "Japan"
            markerlocation = "images/marker.png"
            locationlink = "https://www.google.com/maps/place/Mount+Fuji/@35.360625,138.7273634,3545m/data=!3m2!1e3!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu&g_ep=EgoyMDI2MDIxMS4wIKXMDSoASAFQAw%3D%3D"
            img = "https://scrimba.com/links/travel-journal-japan-image-url"
            text = "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
            dates = "12 Jan, 2021 - 24 Jan, 2021"
            />
        </>
    )
}