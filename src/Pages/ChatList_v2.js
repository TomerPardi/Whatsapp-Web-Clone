import React from 'react'
import { Tab, Row, Col, Nav, Container } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import Chat from './Chat'
import MessageBox from './MessageBox'
import MessageInput from './MessageInput'

export default function ChatList_v2() {
  return (
    <section className="h-100 m-5 ">
      <div className="row justify-content-center h-100 w-100">
        <div className="card shadow-lg w-50">
          <div className='container align-content-bottom'>
            <Tab.Container id="left-tabs" defaultActiveKey="first">
              <div class="row justify-content-center">
                <div className='col-md-4'>
                  <Nav variant="tabs p-1" navbarScroll="true">
                    <Nav.Item className='textBox'>
                      <Nav.Link eventKey="first">
                        <MessageBox Sender={"Dvir"} messageText={"Wow, you're good at algo!"} time={"17:54"} photo={require("./dvirBunny.png")} />
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">
                        <MessageBox Sender={"Fernando"} messageText={"Look into my eyes"} time={"18:50"} />
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">
                        <MessageBox Sender={"Iron Maiden"} messageText={"The hands that threaten doom, \n 2 minutes to midnight!"} time={"23:58"} />
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
                <div className='col-md-8'>
                <MessageInput class="position-absolute bottom-50"/>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <Chat/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      second message history
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      third message history
                    </Tab.Pane>
                  </Tab.Content>
                  <div class="row align-items-end">
                  </div>
                </div>
              </div>
            </Tab.Container>
          </div>
        </div>
      </div>
    </section>
  )
} 
