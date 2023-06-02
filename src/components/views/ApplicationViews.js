
import { CustomerViews } from "./CustomerViews"
import { EmployeeViews } from "./EmployeeViews"


export const ApplicationViews = () => {
const localHoneyUser = localStorage.getItem("honey_user")
const honeyUserObject = JSON.parse(localHoneyUser)

if(honeyUserObject.staff) {

    return <EmployeeViews />

}

else {
    return <CustomerViews />

}

}
// we are explaining what happens when you click it.

// we must create two different views
// we made a view for customers and employee, and we specified which view we would see based on the view we clicked.

