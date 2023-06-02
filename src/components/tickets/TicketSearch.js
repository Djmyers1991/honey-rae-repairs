export const TicketSearch = ({setterFunction}) => {
    return (
        <div>
        <input 
            onChange={
                (changeEvent) => {
                setterFunction(changeEvent.target.value)
        }
    }
        type="text" placeholder="Enter search terms" />
        </div>
    )
}

// you must grab the setterFunctoin from the TicketContainer function