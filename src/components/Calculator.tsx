import React, { useState } from "react"

const Calculator: React.FC = () => {
    const [input, setInput] = useState<string>("")

    const handleClick = (value: string) => {
        if (value === "C") {
            setInput("")
        } else if (value === "=") {
            try {
                setInput(eval(input).toString())
            } catch (error) {
                setInput("Error")
            }
        } else {
            setInput((prevInput) => prevInput + value)
        }
    }

    const keys = [
        "1",
        "2",
        "3",
        "+",
        "4",
        "5",
        "6",
        "-",
        "7",
        "8",
        "9",
        "*",
        "C",
        "0",
        "=",
        "/",
    ]

    return (
        <div className="container mx-auto mt-10 text-center">
            <div className="text-4xl font-bold mb-4">{input}</div>
            <div className="grid grid-cols-4 gap-4">
                {keys.map((key) => (
                    <button
                        key={key}
                        onClick={() => handleClick(key)}
                        className="py-2 bg-gray-200 hover:bg-gray-300 rounded-lg"
                    >
                        {key}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Calculator
