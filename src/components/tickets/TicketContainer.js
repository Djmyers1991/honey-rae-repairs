import { useState } from "react"
import { TicketSearch } from "./TicketSearch"
import { TicketList } from "./TicketList"

export const TicketContainer = () => {
const [searchTerms, setSearchTerms] = useState("")

return <>
<TicketSearch setterFunction={setSearchTerms}/>
<TicketList searchTermState={searchTerms} /> 

</>

//we must create a setter function. 
 
    

}
/* this is the component that will be the parent which will maintain
the state. The ticket list and ticket form will get access to this
through the props within function. */

