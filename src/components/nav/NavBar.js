import "./NavBar.css"
import { CustomerNav } from "./CustomerNav"
import { EmployeeNav } from "./EmployeeNav"
export const NavBar = () => {
    
const localHoneyUser = localStorage.getItem("honey_user")
const honeyUserObject = JSON.parse(localHoneyUser)

if(honeyUserObject.staff) {

    return <EmployeeNav />

}

else {
    return <CustomerNav />

}
}
// we are explaining what happens when you click it.

// we must create two different views
// we made a view for customers and employee, and we specified which view we would see based on the view we clicked.



