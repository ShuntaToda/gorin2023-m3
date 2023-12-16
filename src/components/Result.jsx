import { useEffect, useState } from "react"
import { getResultsApi } from "../api/result"

export const Result = ({ level, user, setMode }) => {
    const [results, setResults] = useState([])
    useEffect(() => {
        const getResults = async () => {
            const data = await getResultsApi(level)
            const sorted = [...data].sort((a, b) => a.time - b.time)
            let handleRresults = sorted.splice(0, 2)
            handleRresults.forEach(item => {
                if (handleRresults[handleRresults.length - 1].time === item.time) {
                    handleRresults = [...handleRresults, item]
                }
            })

            handleRresults.forEach((item, i) => {
                if(handleRresults[i - 1] && item.time == handleRresults[i - 1].time){
                    item.num = handleRresults[i - 1].num
                    return
                }
                item.num = i + 1
            })
            setResults(handleRresults)
        }
        getResults()
    }, [])

    const handleReplay = () => {
        setMode("welcome")
    }
    return (

        <div className="result" >
            <h2 className="title">Congratulations!</h2>

            <div className="ranking">
                <ul className="ranking-list">
                    {results.map(result => {
                        return (
                        <li className={`ranking-item ${result.username === user.username ? "ranking-item-active" : ""}`}>
                            <span className="ranking-number">{result.num}.</span>
                            <span className="ranking-user">{result.username}</span>
                            <span className="ranking-time">{String (Math.floor(result.time / 60)).padStart(2, "0")}:{String (result.time % 60).padStart(2, "0")}</span>
                        </li>
                        )
                    })}
                </ul>
            </div>

            <div className="buttons">
                <ul className="buttons-list">
                    <li className="buttons-item">
                        <button className="button" type="button" onClick={handleReplay}>Replay</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}