import React, { useMemo, useState } from 'react'

const Usememo = () => {
    const [count, setCount] = useState(0)
    const expensiveCount = (params) => {
        for (let i = 0; i < 1000; i++) {
            params += 1
        }
        console.log(params, "params")
        return params;
    }

    const memo = () => {
        let increment = count + 1;
        if (increment >= 10) {
            return "disabled"
        }
        if (increment <= 10) {
            return setCount(increment);
        }

    }
    const calculation = useMemo(() => expensiveCount(count), [count])

    return (
        <>
            <div className="container bg-secondary " >
            disabled
                <h1>{count}</h1>
                <button className={`btn btn-outline-warning ${memo} `} onClick={memo}>Button</button>
                <h2> {calculation} </h2>
            </div>

        </>
    )
}

export default Usememo