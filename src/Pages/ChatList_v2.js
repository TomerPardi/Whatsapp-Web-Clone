import React from 'react'
import { Tab, Row, Col, Nav, Container } from 'react-bootstrap'
import MessageBox from './MessageBox'

export default function ChatList_v2() {
  return (
    <section className="h-100 w-100">
      <div className='container h-100'>
        <div className="row justify-content-center h-100 w-100">
          <div className="col-xxl-7 col-xl-5 col-lg-5 col-md-7 col-sm-9">
            <div className="card shadow-lg">
              <div className="card-body p-2 w-100">
                <div className='container'>
                  <Tab.Container className="bg-white" id="left-tabs" defaultActiveKey="first">
                    <Row className="justify-content-md-center">
                      <div className='col-4'>
                        <Nav variant="pills" className="column overflow-auto">
                          <Nav.Item>
                            <Nav.Link eventKey="first">
                              <MessageBox Sender={"Dvir"} messageText={"Wow, you're good at algo!"} time={"17:54"} photo={require("./dvirBunny.png")} />
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="second">
                              <MessageBox Sender={"Fernando"} messageText={"Look into my eyes"} time={"18:50"} />
                            </Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </div>
                      <div className='col-8'>
                        <Tab.Content>
                          <Tab.Pane eventKey="first">
                            first message history
                          </Tab.Pane>
                          <Tab.Pane eventKey="second">
                            second message history
                          </Tab.Pane>
                        </Tab.Content>
                      </div>
                    </Row>
                  </Tab.Container>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
