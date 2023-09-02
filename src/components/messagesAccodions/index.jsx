import React from 'react'
import Accodions, { AccodionItem as Item } from './accodions'

export default function LeftAccodions() {
    return (
        <div>
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
            <Accodions title='Challenges'></Accodions>
            <Accodions title='Rooms'></Accodions>
            <Accodions title='Actions'></Accodions>
        </div>
    )
}
