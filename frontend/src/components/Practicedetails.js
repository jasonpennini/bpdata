const PracticeDetails = ({ bpData }) => {
return (
    <div className = "practice-details"> 
        <h4> {bpData.player}</h4>
        <p> BP Type: {bpData.bpType} </p>
        <p> Date: {bpData.date} </p>
        <p> Max EV: {bpData.maxEV} mph </p>
        <p> Contact PCT: {bpData.contactPercentage} % </p>

    </div>
)
}

export default PracticeDetails