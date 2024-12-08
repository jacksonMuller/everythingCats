export default function nextFact({ onClick }) {
  return (
    <div className = "fact-display">
        <button onClick={onClick}>Want another fact?</button>
    </div> 
  )
}
