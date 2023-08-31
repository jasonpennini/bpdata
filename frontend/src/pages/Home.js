import { useEffect, useState } from 'react'

//components
import PracticeDetails from '../components/Practicedetails'
import PracticeForm from '../components/PracticeForm'

const Home = () => {
    // setting state variable to null and declaring setter function
    const [bpData, setBPData] = useState(null)

    // only fires once when home is rende red
    useEffect(() => {
    const fetchBPData = async () => {
    const response = await fetch('api/battingpracticedata')
    console.log('here')
    // when we parse it response becomes an array of objects
    const json = await response.json()
    // if a response is truthy, update state to the parsed json response
        if (response.ok) {
        setBPData(json)
        }
    }
    fetchBPData()
}, [])

//if we have bpData && multiple values, will we invoke map on bpData//
    return (
        <div className="home">
            <div className="bpData">
                {bpData && bpData.map((bpData) => (
                    <PracticeDetails key ={bpData._id} bpData={bpData} />

                 ))}
            </div>    
            <PracticeForm/>
        </div>
    )
}

export default Home