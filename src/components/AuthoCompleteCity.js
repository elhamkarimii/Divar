import React, { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'


const Suggested = styled.div`
`


export default function AuthoComplete({ items, holder, filter }) {
    const [value, setValue] = useState('')
    const [Sugestes, setSugestes] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    useEffect(() => {
        window.addEventListener('click', () => {
            setIsOpen(false)
        })
    })
    useEffect(() => {
        if (value) {

            setIsOpen(true)
        }
        else {
            setIsOpen(false)
        }
        const finde = items.filter(item => item.city.toLowerCase().includes(value.toLowerCase()))
        setSugestes(finde)
    }, [value])
    const handleOnChange = (e) => {

        setValue(e.target.value)



    }
    const handleClick = (e) => {

        filter(e.target.value)
    }
}
return (
    <div>
        <input onChange={handleOnChange} value={value} placeholder={holder} />
        {isOpen && Sugestes.map(item => <Suggested onClick={handleClick}>{item.text}</Suggested>)}
    </div>
)

