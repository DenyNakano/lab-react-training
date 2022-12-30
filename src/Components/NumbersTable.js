import React from 'react'

export const NumbersTable = ({ limit }) => {
    let numbers = []

    for (let i = 1; i <= limit; i += 1) {
        numbers.push(i)
    }
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        {numbers.map((number, index) => {
                            return (
                                <td
                                    key={index}
                                    style={{
                                        backgroundColor: number % 2 === 0 ? "red" : "white", width: 100, height: 100
                                    }}>
                                    {number}
                                </td>
                            )
                        })}
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
