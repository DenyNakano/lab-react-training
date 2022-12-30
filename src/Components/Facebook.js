import React, { useState } from 'react'
import profiles from '../data/berlin.json'

export const Facebook = () => {
    const [country, setCountry] = useState('All')
    let countries = []
    profiles.forEach(student => {
        if (!countries.includes(student.country)) {
            countries.push(student.country)
        }
    })

    const handleSelectedCountry = (selectedCountry) => {
        setCountry(selectedCountry)
    }
    const handleAllButton = () => {
        setCountry('All')
    }

    return (
        <div>
            <div>
                <button>All</button>
                {countries.map((country, index) => {
                    return (
                        <button key={index} onClick={() => handleSelectedCountry(country)} >{country}</button>
                    )
                })}
            </div>
            <div>
                {profiles.map((student, index) => {
                    return (
                        <div key={index}
                        style={{backgroundColor: student.country === country ? "blue" : "white"}}
                        >
                            <img src={student.img} alt="student" />
                            <p>First Name: {student.firstName}</p>
                            <p>Last Name: {student.lastName}</p>
                            <p>Country: {student.country}</p>
                            <p>Type: {student.isStudent ? "Student" : "Teacher"}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
