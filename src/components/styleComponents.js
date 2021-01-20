
// import { ExpansionPanelSummary } from '@material-ui/core'
import styled, { createGlobalStyle, } from 'styled-components'
import * as fa from 'react-icons/fa'


export const GlobalStyle = createGlobalStyle`
body{
    margin:0px;
    padding:0px;
}


*{
    margin:0px;
    padding:0px;
    box-sizing:border-box
}
`

export const NavMenu = styled.div`
position:sticky;
top:0;
z-index: 2;
background-color:white;
display:flex;
flex-direction: row;
justify-content:space-between;
border-bottom:1px solid #C2CCCC;

`

export const MenuItem = styled.div`
width:fit-content;
overflow:hidden;
display:flex;
background-color: white;



`
export const Item = styled.span`
padding:0px;
margin:0px;
align-items:center;
padding:7px 10px;
margin:15px;
cursor: pointer;
font-family:"Yekan";
color:#454848;
transition:all 0.2s ease;
&:hover{
color:#888F8F;
}
`

export const Submit = styled.span`
border:1px solid #A50B03;
cursor: pointer;
border-radius:7px;
background-color:#A50B03;
color:white;
font-size:17px;
padding:6px 15px;
margin:18px 17px 25px;
font-family:"Yekan";
font-weight:500;
transition:all 0.2s ease;
&:hover{
    opacity:0.8;
}

`

export const Img = styled.img`
width:200px;
height:50px;
margin:17px;
`
export const Wrraper = styled.div`
display:flex;

`


export const RightBox = styled.div`
padding:10px;
width:25%;
`


export const CategoryWrapper = styled.div`
border-bottom: 3px solid #BCC5C5;
padding:5px;
direction:rtl;

`
export const CatHead = styled.div`
padding:13px;
border-bottom:1px solid black;
font-family:'diplomat';
font-weight:700;
font-size:19px;
`
export const Category = styled.div`
padding:10px;
&:not(:last-child){
border-bottom:1px solid #9BA3A3;
}
font-family:'Yekan';
font-size:15px;
color:#7D8383;
`



export const MiddleBox = styled.div`
width:75%;
border:1px solid black;
`


export const FilterWrapper = styled.div`
margin-top:7px;
`
export const Filter = styled.div`
display:flex;
justify-content:space-between;
padding:7px;



`
export const FilterName = styled.div`
display:flex;
align-items:center;
font-family:"Yekan";
font-size:16px;
color:#616161;
`

export const TopWrapper = styled.div`
padding:5px;
display:flex;
justify-content:flex-end;
font-family:"Yekan";
`

export const Inp = styled.input`
padding:16px;
min-width:45em;
direction:rtl;
margin:8px 0;
border:1px solid #B6B6B6;
outline:none;
border-radius:4px 0 0 4px;
::placeholder{
    color:#8C8C8C;
    font-size:17px;
    font-family:"Yekan"
}
`
export const Selecte = styled.div`
border:1px solid #B6B6B6;
min-width:13em;
margin:8px 0px;
display:flex;
border-radius:0 4px 4px 0;

`
export const Icon = styled.span`
display:flex;
align-items:center;
justify-content:center;
min-width:10%;
color:#787878;
margin-left:7px;
`

export const SelectLabel = styled.div`
min-width:85%;
display:flex;
align-items:center;
direction:rtl;
color:#787878;
padding:7px;

`
export const SugesstedWrraper = styled.div`
direction:rtl;
display:flex;
`
export const Sugessted = styled.span`
border:1px solid #A7331E;
margin:7px;
padding:2px 14px;
border-radius:40px;
font-size:14px;
font-family:'diplomat';
font-weight:600;
color:#A7331E;
`

export const Label = styled.div`
margin:5em 0.5em 2em 2.5em;
border-bottom:1px solid #AFB1B0;
font-family:'Yekan';
font-size:13px;
color:#676968;
padding:10px;
`

export const CardsWrraper = styled.div`
border:1px solid black;
margin:2.9em 0.5em 2em 2em;
display:flex;
justify-content: space-between;
flex-wrap: wrap;
`

export const CardStyle = styled.div`
    width: 286px;
    height: 184px;
    border: 1px solid #eee;
    position: relative;
    padding: 17px;
    display: flex;
    margin-bottom: 11px;
`

export const ItemImgContainer = styled.img`
    border-radius: 8px;
    margin-right: 5px;
    width: 136px;
    height: 136px;
`

export const ItemInfoBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    margin-left: auto;
    text-align: right;
`
export const ItemHeading = styled.h3`

`
export const ItemDetails = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    color: #AAAAAA;
`
export const ItemPrice = styled.p`

`
export const ItemTimeAndLocation = styled.p`
    width: 90px;
    height: 24px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow-wrap: break-word;
    direction: rtl;
    font-size: 11px;
`
export const ItemChatBox = styled.div`
   position: absolute;
    bottom: 0;
    left: 0;
`
export const ChatIcon = styled(fa.FaComment)`
    color: #AAAAAA;
`
