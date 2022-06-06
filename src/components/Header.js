import {Navbar, Container, Nav, Form, FormControl, Button} from 'react-bootstrap';
import styled from "styled-components";
import { Link } from 'react-router-dom'

function Header() {
  return(
    <Navbar variant="dark" expand="lg" style={{height: '100px' ,backgroundColor:'#3C5087'}}>
      <Container fluid>
        <Navbar.Brand href="/" style={{margin: '75px', fontSize: '30px', fontWeight:'bold'}}>✨DKU마켓</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link href='/user/login'>로그인</Nav.Link>
            <Nav.Link href='/user/signup'>회원가입</Nav.Link>
            <Nav.Link href='/user/write'>글쓰기</Nav.Link>
            <Nav.Link href='/user/mypage'>리스트</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl type="search" placeholder="동네 이름, 물품명 등을 검색해보세요!" className="me-2" aria-label="Search" style={{ width: '400px' }}/>
            <Button variant="success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;
