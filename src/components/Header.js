import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div id="header" style={headerStyle}>
                <h1 id=
                 "header-title">Just Do It List</h1>
                <a id="home-link" href="#0">Home</a> | <a id="about-link" href="#0">About</a>
            </div>
        )
    }
}

export default Header

const headerStyle = {
	backgroundColor: "#fff0c9",
	textAlign: "center",
    padding: "10px",
    borderBottom: "darkgray dotted 1px"
}