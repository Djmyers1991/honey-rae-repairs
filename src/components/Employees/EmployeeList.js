import { useEffect, useState } from "react"
import "./Employees.css"
import { Employee } from "./Employee"

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])

    useEffect(
        () => {
             fetch (`http://localhost:8088/users?isStaff=true`)
             .then(response => response.json())
             .then((employeeArray) => {

                setEmployees(employeeArray)

             })
        },
        []
    )
return <article className="employees">
    {
employees.map(employee => <Employee key={`employee--${employee.id}`}
    id={employee.id} 
    fullName={employee.fullName}
    email={employee.email} />)
    

}
</article>

}

/* we added the ?isStaff=true to say only give us the info from those that are staff */


/*once we create the function, we need to go to the navbar to add a link*/

/*once we add the link in the navbar, we need to change the view. */

