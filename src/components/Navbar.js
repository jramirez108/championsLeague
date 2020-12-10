import {
    Navbar,
    NavbarBrand,
} from 'reactstrap';

import icon from '../img/JR.png'

export default function NavBar() {
    return (
        <div>
        <Navbar color="dark" dark expand="md">
        <NavbarBrand href="https://jramirez.info"><img src={icon} alt="jr" height="40px"/></NavbarBrand>
        </Navbar>
        </div>
    )
}
