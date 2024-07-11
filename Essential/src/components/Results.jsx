export default function Results({userInput}){
    return (
        <section id='results'>
            <div className='result'>
                <h2>Results</h2>
                {userInput.initialInvestment}
                <p>Initial Investment: $0</p>
                <p>Annual Investment: $0</p>
                <p>Expected Return: 0%</p>
                <p>Duration: 0 years</p>
                <p>Final Amount: $0</p>
            </div>
        </section>
    )
}