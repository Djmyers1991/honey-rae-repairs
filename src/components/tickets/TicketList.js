import { useEffect, useState } from "react"
import { useNavigate} from "react-router-dom"
import "./Tickets.css"
 
export const TicketList = ({ searchTermState }) => {
    const [tickets, setTickets] = useState([])//the initial state is zero
    const [filteredTickets, setFiltered] = useState([])
    const [emergency, setEmergency] = useState(false);
    const [openOnly, updateOpenOnly] = useState(false);

    //we need this to filter the tickets to distinguish between staff and not staff. 
    const navigate = useNavigate()

const localHoneyUser = localStorage.getItem("honey_user")
const honeyUserObject = JSON.parse(localHoneyUser)

useEffect(
    () => {
        const searchedTickets = tickets.filter(ticket => {
            return ticket.description.toLowerCase().startsWith(searchTermState.toLowerCase())
        /* we must filter all of the tickets because we want to view them all*/
        })
        setFiltered(searchedTickets)
        /* we're displaying the filtered ticekts which is why we need to update it. */
    },

    [ searchTermState ]
)

useEffect(
    () => {
        if(emergency) {
            const emergencyTickets = tickets.filter(ticket => ticket.emergency === true)
            setFiltered(emergencyTickets)
        }
        else{
            setFiltered(tickets)
        }
    },
    [emergency]
)

//we're grabbing the data from whomever is logged in//
//I'm confused as to to how we know where to grab the item.//

 useEffect(
        () => {
            fetch(` http://localhost:8088/serviceTickets`)
            .then(response => response.json())
            .then((ticketArray) => {
            setTickets(ticketArray)

    })
},
//so we're grabbing the data from the serviceTickets and we're changing the initial state
//to the specific ticket array information. Right now, everyone is seeing every ticket.
        [] // When this array is empty, you are observing initial component state
    )

    useEffect(
        () => {
            if (honeyUserObject.staff) {
                setFiltered(tickets)
//if the person is staff, they're seeing all of the tickets.
            }
            else {
                const myTickets = tickets.filter(ticket => ticket.userId === honeyUserObject.id)
                setFiltered(myTickets)
                //if they're not staff, they're seeing the filtered version of the tickets.

            }
        },
        [tickets] //this variable alings with the variable on line 7.//
        //The ticket itself is what will appear
    )

useEffect(
    () => {
        if(openOnly) {
        const openTicketArray = tickets.filter(ticket => {
            return ticket.userId === honeyUserObject.id && ticket.dateCompleted === ""

        })
        setFiltered(openTicketArray)
    }
    else { const myTickets = tickets.filter(ticket => ticket.userId === honeyUserObject.id)
        setFiltered(myTickets)
    }
    },
    [openOnly]
)


//what we're doing below is adding a button to showcase the emergency functions
//we're setting the emergency button to true when it is clicked.
//we're also adding a ternary operator to say that the button will appear if the user is a staff 
//it will not appear (see the empty string) if the person is not a staff
//Okay, with react you can just delete much of the information/
//when there are multiple if statements, you must use the syntax below.
//use the <> </> to contain them
//we are using the navigate function to take them to a different page once they click.
//see the the navigate function above
    return <>
    {
    honeyUserObject.staff
    ? <>
    <button onClick={   () => setEmergency(true) } >Emergency Only</button>
    <button onClick={   () =>  setEmergency(false)  } >Show all</button>
    </> 
    : <> 
    <button onClick={() => navigate("/ticket/create")}>Create Ticket</button>
    <button onClick={() => updateOpenOnly(true)}> Open Ticket</button>
    <button onClick={() => updateOpenOnly(false)}> All My Tickets</button>


    </>
    }
    

    


    <h2>List of Tickets</h2>
    <article className="tickets">
        {
        filteredTickets.map(
            (ticket) => {
                return <section className="ticket" key={`ticket--${ticket.id}`}> 
                    <header>{ticket.description}</header>
                    <footer>Emergency: {ticket.emergency ? "IT'S GO TIME!!!" : "No"}</footer>
                    The ternary operator 
                </section>
            }

        )
        }
    </article>
    </>


}



// key={`ticket--${ticket.id}`} is how you get a key.
//the brackets explain that you can use vanilla javascript