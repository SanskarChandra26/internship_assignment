import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import NavItem from "react-bootstrap/NavItem";
import pic from "./kula.jpeg";
import { Button } from "@mui/material";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
const Navbar1 = () => {
	return (
		<div>
			<Navbar collapseOnSelect fixed="top" id="a">
				<Container id="b">
					<Navbar.Brand href="#home" id="b">
						<img src={pic} width="30" height="30"></img>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto">
							<NavDropdown title="Product" id="b">
								<NavDropdown.Item href="#action/3.1">
									Kula Outreach
								</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2">
									Kula Circles
								</NavDropdown.Item>
							</NavDropdown>
							<Nav.Link href="#pricing" id="b">
								Our Story
							</Nav.Link>
							<NavDropdown title="Resources" id="b">
								<NavDropdown.Item href="#action/3.1">Blog</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2">Guides</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action/3.4">
									Separated link
								</NavDropdown.Item>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
					<Button variant="contained" id="btn-grad">
						Book a demo
					</Button>
				</Container>
			</Navbar>
		</div>
	);
};

export default Navbar1;
