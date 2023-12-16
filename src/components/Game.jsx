import { useEffect, useState } from "react"
import { getFieldApi } from "../api/fields"
import { block } from "../features/defineBlocks"
import { moveDown, moveLeft, moveRight, moveUp } from "../features/movePlayer"
import { storeResultsApi } from "../api/result"

export const Game = ({ level, setMode }) => {
    const [field, setField] = useState([])
    const [time, setTime] = useState(0)

    useEffect(() => {
        const getField = async () => {
            const data = await getFieldApi(level)
            if (!data) return
            setField(data.objects)
        }

        getField()
    }, [])

    useEffect(()=>{
        let interval
        interval = setInterval(() => {
            setTime(prevTime => prevTime += 1)
        }, 1000);

        return () => clearInterval(interval)
    },[])
    const handleGoal = () => {
        const storeResult = async() => {
            const data = await storeResultsApi(level, time)
            console.log(data)
        }
        storeResult()

        setMode("result")
    }

    const handleKeyDown = (e) =>{
        if(e.key == "ArrowUp"){
            moveUp(field, setField,handleGoal)
        }else if(e.key == "ArrowDown"){
            moveDown(field, setField,handleGoal)
            
        }else if(e.key == "ArrowRight"){
            moveRight(field, setField,handleGoal)
            
        }else if(e.key == "ArrowLeft"){
            moveLeft(field, setField,handleGoal)
            
        }

    }
    useEffect(()=>{
        document.addEventListener("keydown", handleKeyDown)
        return () => document.removeEventListener("keydown", handleKeyDown)
    }, [field])
    return (
        <div className="game" >
            <div className="time">{String (Math.floor(time / 60)).padStart(2, "0")}:{String (time % 60).padStart(2, "0")}</div>
            {field && (
                <div
                    className="field"
                    style={{
                        width: `calc(var(--object-size) * ${field.length})`,
                        height: `calc(var(--object-size) * ${field.length})`
                    }}
                >
                    {field.map(((row,i) => {
                        return row.map((item,j) => {
                            if(block.player == item){
                                return <div className="object player" style={{top: `calc(var(--object-size) * ${i})`, left:`calc(var(--object-size) * ${j})`}}></div>
                            }else if(block.wall  == item){
                                return <div className="object wall"  style={{top: `calc(var(--object-size) * ${i})`, left:`calc(var(--object-size) * ${j})`}}></div>
                            }else if(block.block  == item){
                                return <div className="object block"  style={{top: `calc(var(--object-size) * ${i})`, left:`calc(var(--object-size) * ${j})`}}></div>
                            }else if(block.flag  == item){
                                return <div className="object flag"  style={{top: `calc(var(--object-size) * ${i})`, left:`calc(var(--object-size) * ${j})`}}></div>
                            }
                        })
                    }))}
                </div>
            )}
        </div>
    )
}