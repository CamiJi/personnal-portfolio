import {useState, useEffect} from 'react';
import {Navbar, Container} from 'react-bootstrap';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50) {
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }

        window.addEventListener('scroll', onScroll);

        return () => windowq.removeEventListener('scroll', onScroll);

    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
            <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={''} alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span classname="navbar-toogler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                    <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                    <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Project</Nav.Link>
                </Nav>
                <span classname="navbar-text">
                    <div className="social-icons">
                        <a href="#" target="_blank" rel="noreferrer">
                            <img src={''} alt="linkedin" />
                        </a>
                        <a href="#" target="_blank" rel="noreferrer">
                            <img src={''} alt="twitter" />
                        </a>
                    </div>
                    <button className="vvd" onClick={() => console.log('connect')}>
                        <span>Let's connect</span>

                    </button>
                </span>
                </Navbar.Collapse>
            </Container>
            </Navbar>
  );
}

