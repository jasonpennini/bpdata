import { useState } from "react"

const PracticeForm = () => {
// creating state
    const [player, setPlayer] = useState('')
    const [bpType, setBPType] = useState('')
    const [date, setDate] = useState('')
    const [maxEV, setMaxEV] = useState('')
    const [contactPercentage, setContactPercentage] = useState('')
    const [error, setError] = useState(null)


    const handleSubmit = async (e) => {
        e.preventDefault()
        const bp = {player, bpType, date, maxEV, contactPercentage}

        const response = await fetch('/api/battingpracticedata', {
            method: 'POST',
            body: JSON.stringify(bp),
            headers: {
                'Content-type':'application/json'
            }
        })
        const json = await response.json()

        if(!response.ok) {
            setError(json.error)
        }
        if(response.ok) {
            setBPType('')
            setContactPercentage('')
            setDate('')
            setMaxEV('')
            setPlayer('')
            setError(null)
            console.log('New Workout Added')
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}> 
            <h3>Add a New BP Record</h3>
            <label>Player </label>
            <input
                type="text"
                onChange={(e)=> setPlayer(e.target.value)}
                value={player}
            />

            <label>Type of BP Round </label>
            <input
                type="text"
                onChange={(e)=> setBPType(e.target.value)}
                value={bpType}
            />

            <label> Date (DD/MM/YYYY) </label>
            <input
                type="text"
                onChange={(e)=> setDate(e.target.value)}
                value={date}
            />
            <label> Max Exit Velo (MPH) </label>
            <input
                type="number"
                onChange={(e)=> setMaxEV(e.target.value)}
                value={maxEV}
            />
             <label> Contact % </label>
            <input
                type="number"
                onChange={(e)=> setContactPercentage(e.target.value)}
                value={contactPercentage}
            />
            <button>Add BP Record</button>
            {error && <div className ="error">{error}</div>}
        </form>
    )
}

export default PracticeForm