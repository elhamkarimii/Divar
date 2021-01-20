import React from 'react'
import { CardStyle, ItemImgContainer, ItemHeading, ItemInfoBox, ItemPrice, ItemTimeAndLocation, ItemDetails, ItemChatBox, ChatIcon } from './styleComponents'

function Card({ data }) {
  
// const filteredData=data.filter(item=> item.incliudes)


    return (
        <>
            {
                data.map(item => <CardStyle>
                    <ItemImgContainer alt="photo" src={item.image ? `${item.image}?${item.id}` : "./defaultImage.png"} />
                    <ItemInfoBox>
                        <ItemHeading>
                            {item.title}
                        </ItemHeading>
                        <ItemDetails>
                            <ItemPrice>
                                {item.price}
                            </ItemPrice>
                            <ItemTimeAndLocation>
                                {item.date}در{item.Location}
                            </ItemTimeAndLocation>
                        </ItemDetails>
                        <ItemChatBox>
                            <ChatIcon />
                        </ItemChatBox>
                    </ItemInfoBox>
                </CardStyle>
                )
            }
        </>
    )
}

export default Card
