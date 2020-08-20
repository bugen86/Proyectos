// React
import React, { Component } from "react"

// Css
import "./css/Header.css"

// Main
class Header extends Component {
	render() {
		return (
			<header className="Header">
				<div>
					<h2 className="NavBar">NavBar</h2>
					<img src="../images/logo.png" alt="" />
				</div>
			</header>
		)
	}
}

export default Header
