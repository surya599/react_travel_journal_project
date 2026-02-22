import Header from "./components/header"
import Entry from "./components/entry"
import data from "./data"
export default function App()
{
    const entryElements = data.map((entry)=>{
        return (
            <Entry
            
                img={entry.img}
                title={entry.title}
                country={entry.country}
                locationlink={entry.locationlink}
                dates={entry.dates}
                text={entry.text}
            />

        )

    })
    return(
        <>
        <Header />
            <div className="entries">
                {entryElements}
            </div>
        </>
    )
}