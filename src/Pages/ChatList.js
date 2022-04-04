import React from 'react'
import { ListGroup,ListGroupItem } from 'react-bootstrap'
import MessageBox from './MessageBox'

export default function ChatList() {
  return (
    <div className="container">
        <div>
            <header>
                User info
            </header>
        </div>
        <ListGroup className='h-100 bg-light rounded'>
            <ListGroupItem className='border-0'>
            <MessageBox Sender={"Dvir"} messageText={"Wow, you're good at algo!"} time={"17:54"} photo={require("./dvirBunny.png")}/>
            </ListGroupItem>
            <ListGroupItem className='border-0'>
            <MessageBox Sender={"Fernando"} messageText={"Look into my eyes"} time={"18:50"}/>
            </ListGroupItem>
            <ListGroupItem>
                third
            </ListGroupItem>
            <ListGroupItem>
                third
            </ListGroupItem>
            <ListGroupItem>
                third
            </ListGroupItem>
        </ListGroup>
    </div>
  )
}
