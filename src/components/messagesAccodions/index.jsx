import React from 'react'
import Accodions, { AccodionItem as Item } from './accodions'

export default function LeftAccodions() {
    return (
        <>
            <Accodions title='Activities'>
                <Item>Activity 1</Item>
                <Item>Activity 2</Item>
                <Item>Activity 3</Item>
                <Item>Activity 4</Item>
            </Accodions>
            <Accodions title='Channels'>
                <Item>Channel 1</Item>
                <Item>Channel 1</Item>
                <Item>Channel 1</Item>
                <Item>Channel 1</Item>
            </Accodions>
            <Accodions title='Challenges'>
                <Item>Challenge 1</Item>
                <Item>Challenge 1</Item>
                <Item>Challenge 1</Item>
                <Item>Challenge 1</Item>
            </Accodions>
            <Accodions title='Rooms'>
                <Item>Room 1</Item>
                <Item>Room 1</Item>
                <Item>Room 1</Item>
                <Item>Room 1</Item>
            </Accodions>
            <Accodions title='Actions'>
                <Item>Action 1</Item>
                <Item>Action 1</Item>
                <Item>Action 1</Item>
                <Item>Action 1</Item>
            </Accodions>
        </>
    )
}
