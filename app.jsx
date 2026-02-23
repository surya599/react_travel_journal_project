import Header from "./components/header"
import Entry from "./components/entry"
import data from "./data"
export default function App()
{
    const entryElements = data.map((entry)=>{
        return (
            <Entry
            
                    entry = {entry}
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