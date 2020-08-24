import React, { Fragment } from "react"
import { Link } from "react-router-dom"

const NavBarLink = ({ donde, texto }) => {
	return (
		<Fragment>
			<Link to={donde}> {texto} </Link>
		</Fragment>
	)
}

export default NavBarLink
