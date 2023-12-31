import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="Footer">
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>

                <li>
                    <a href='#'>About Us</a>
                </li>

                <li>
                    <a href='#'>Careers</a>
                </li>

                <li>
                    <a href='#'>Our Team</a>
                </li>

                <li>
                    <a href='#'>Follow Us</a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;