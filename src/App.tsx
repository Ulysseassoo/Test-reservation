import { useState } from "react"
import "./App.css"
import DateTimePicker from "react-datetime-picker"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { checkAvailability } from "./services/Api"
import "react-datetime-picker/dist/DateTimePicker.css"
import "react-calendar/dist/Calendar.css"
import "react-clock/dist/Clock.css"
import showToast from "./utilities/showToast"

function App() {
	const [value, onChange] = useState<Date | null>(new Date())
  const resourceId = 1337
  
	const getAvailability = async () => {
		try {
      if(value !== null) {
        const response = await checkAvailability(value.toISOString(), {id: resourceId})
        if(response.available) {
          showToast({
            message: `The ressource is available on: ${value.toISOString()}. You can start the reservation process`,
            type: "success"
          })
        }
        else {
          showToast({
            message: `The ressource isn't available on: ${value.toISOString()}`,
            type: "error"
          })
        }
      }
		} catch (error: any) {
      showToast({
        message: `There was an error checking availability`,
        type: "error"
      })
		}
	}

	return (
		<div className="center">
			<h1>Check if the resource is available</h1>
			<DateTimePicker
				onChange={onChange}
				value={value}
        disableClock
			/>
			<button onClick={getAvailability}>Check availability</button>
			<ToastContainer />
		</div>
	)
}

export default App
