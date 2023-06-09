import { Outlet, Route, Routes } from "react-router-dom"
import { TicketContainer } from "../tickets/TicketContainer"
import { EmployeeList } from "../Employees/EmployeeList"
import { EmployeeDetails } from "../Employees/EmployeeDetails"


export const EmployeeViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Honey Rae Repair Shop</h1>
                    <div>Your one-stop-shop to get all your electronics fixed</div>

                    <Outlet />
                </>
            }>

                <Route path="tickets" element={ <TicketContainer />} />
                <Route path="employees" element={ <EmployeeList />} />
                <Route path="employees/:employeeId" element={<EmployeeDetails/>} />


                    
            </Route>
        </Routes>
    )
}
// we are explaining what happens when you click it.

// we must create two different views

