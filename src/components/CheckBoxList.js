import React, { useState } from 'react'
import styled from 'styled-components'

const MyItems = styled.div`
padding:10px;
width:50%;
margin:auto;

`
const CheckedText = styled.div`

`

export default function CheckBoxList({ items, onChecked }) {
    // const [middle, setMiddle] = useState('')
    const MiddleText = ()=>{
if(!allChecked&&Middle){
return 'middle'
}
else if(allChecked){
    return 'all'
}
else if(!allChecked){
    return 'none'
}
    }
    const allChecked = items.every(item => item.checke)
    const Middle = items.some(item => item.checke )
    const handleClick = () => {

        // let copy = items.filter(item=>item.checke===false)
        let copy = items.map(item => {
            return {
                ...item,
                checke: !allChecked ? true : false
            }
        })
        onChecked(copy)
    }
    const handleCheckClick = (id) => {
        let copy = [...items]
        const index = copy.findIndex(item => item.id === id)
        copy[index] = { ...copy[index], checke: !copy[index].checke }
        onChecked(copy)

        
    }

    return (
        <div>
            <input type='checkBox' checked={!allChecked ? false : true} onChange={handleClick} /><CheckedText>{ MiddleText()}</CheckedText>
            {items.map((item) => <MyItems key={item.id}>

                <span>{item.text}</span>
                <input type='checkBox' checked={item.checke} onChange={() => handleCheckClick(item.id)} />
            </MyItems>)}
        </div>
    )
}
