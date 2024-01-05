"use client"

import { useEffect, useState } from "react"

import Calculator from "@/components/Calculator"

export default function Home() {
    const [randomNumber, setRandomNumber] = useState(0)
    const [userNumber, setUserNumber] = useState(0)
    const [newRandomNumber, setNewRandomNumber] = useState(true)

    const createNewRandomNumber = () => {
        // Create a new item price number then set it to the randomNumber state
        const rndNum = Math.floor(Math.random() * 10000)
        setRandomNumber(rndNum)
        setNewRandomNumber(true)
    }

    return (
        <div>
            <div>
                <h1>Calculator game</h1>
                <p>The random number is: {randomNumber}</p>
                <button onClick={createNewRandomNumber}>
                    New Random number
                </button>
            </div>
            <div>
                <Calculator />
            </div>
        </div>
    )
}
