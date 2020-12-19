import React, { useState } from 'react'
import styled from 'styled-components'


const InputContainer = styled.div`
width:400px;
height:50px;
border:1px solid red;
overflow:hidden;
display:flex;

`

const Input = styled.input`
width:400px;
height:50px;
border:none;
outline:none;

`

const Tag = styled.span`
width:fit-content;
border-radius:2px;
margin:10px;
border:1px solid black;
background-color:#9F9F9F;
display:flex;

`

export default function MyInput() {

    // const [value, setValue] = useState('')
    // const [tags, setTags] = useState([])


    // const hendleOnChange = (val) => {
    //     setValue(val)
    // }
    // const handleKeyPress = (e) => {
    //     if (e.key === 'Enter'&&value) {
    //         keyPress(value)
    //         setValue('')
    //     }

    // }


    // const keyPress = (value) => {
    //     const copy = [...tags]
    //     copy.push(value);
    //     console.log(copy)
    //     setTags(copy)

    // }
    // const handleRemove = (index) => {
    //     const copy = [...tags]
    //     copy.splice(index, 1)
    //     setTags(copy)
    // }

    // const hendleBackSpace = (e) => {
    //     if (e.key === 'Backspace' && !value) {
           
    //             const copy = [...tags]
    //             copy.splice(copy.length - 1, 1)
    //             setTags(copy)
            

    //     }
    // }
    return (
        <div>
            
        </div>
        // <InputContainer>
        //     {tags.map((item, index) => <Tag key={index}><div onClick={() => handleRemove(index)}>×</div>{item}</Tag>)}
        //     <Input onChange={(e) => hendleOnChange(e.target.value)} onKeyPress={handleKeyPress} onKeyDown={hendleBackSpace} value={value} />

        // </InputContainer>
    )
}
