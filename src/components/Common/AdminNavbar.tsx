import React,{useState, useEffect} from "react";
import {Link} from "react-router-dom";
import classNames from "classnames";

import {
    Button,
    Collapse,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    Input,
    InputGroup,
    NavbarBrand,
    Navbar,
    NavLink,
    Nav,
    Container,
    Modal,
    NavItem,
} from "reactstrap";

type AdminNavbarProps={
    sidebarOpened: boolean;
    toggleSidebar: any;
    brandText: string;
}

function AdminNavbar({sidebarOpened,brandText}: AdminNavbarProps){
    const [collapseOpen,setCollapseOpen] = useState(false);
    const [modalSearch,setModalSearch] = useState(false);
    const [color,setColor] = useState("navbar-transparent");
    const [isLogin,setIsLogin] = useState(false);

    useEffect(()=>{
        window.addEventListener("resize",updateColor);
        return ()=> window.removeEventListener("resize",updateColor);
    },);

    // function that adds color white/transparent to the navbar on resize (this is for the collapse)
    const updateColor = () =>{
        if(window.innerWidth < 993 && collapseOpen){
            setColor("bg-white");
        } else{
            setColor("navbar-transparent");
        }
    };

    // this function opens and closes the collapse on small devices
    const toggleCollapse = () =>{
        if(collapseOpen){
            setColor("navbar-transparent");
        } else{
            setColor("bg-white");
        }
        setCollapseOpen(!collapseOpen);
    };

    // 검색 모달 창 toggle 함수
    const toggleModalSearch = () => {
        setModalSearch(!modalSearch);
    };
    
    const onClick=()=>{
        localStorage.clear();
        window.location.reload();
    }

    useEffect(()=>{
        const token = JSON.parse(localStorage.getItem('userInfo') || '{}').token;
        if(token){
            setIsLogin(true);
        }else{
            setIsLogin(false);
        }
    },[]);

    return (
      <div>
        <Navbar className={classNames('navbar-absolute', color)} expand="lg">
          <Container fluid>
            <div className="navbar-wrapper">
              <div
                className={classNames('navbar-toggle d-inline', {
                  toggled: sidebarOpened,
                })}
              ></div>
              <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
                {brandText}
              </NavbarBrand>
            </div>
            <button
              aria-expanded={false}
              aria-label="Toggle navigation"
              className="navbar-toggler"
              data-target="#navigation"
              data-toggle="collapse"
              id="navigation"
              type="button"
              onClick={toggleCollapse}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
            <Collapse navbar isOpen={collapseOpen}>
              <Nav className="ml-auto inputgroup" navbar>
                {isLogin && (
                  <div className="navmenu">
                    <NavItem>
                      <NavLink>
                        <Link className="nav-link" to="/">
                          Home
                        </Link>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink>
                        <Link className="nav-link" to="/Inverter">
                          Inverter
                        </Link>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink>
                        <Link className="nav-link" to="/Detail">
                          Detail
                        </Link>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink>
                        <Link className="nav-link" to="/Settings">
                          Settings
                        </Link>
                      </NavLink>
                    </NavItem>
                  </div>
                )}
                <InputGroup className="search-bar">
                  <Button
                    color="link"
                    data-target="#searchModal"
                    data-toggle="modal"
                    id="search-button"
                    onClick={toggleModalSearch}
                  >
                    <i className="tim-icons icon-zoom-split" />
                    <span className="d-lg-none d-md-block">Search</span>
                  </Button>
                </InputGroup>
                <UncontrolledDropdown nav>
                  <DropdownToggle
                    caret
                    color="default"
                    data-toggle="dropdown"
                    nav
                    onClick={(e) => e.preventDefault()}
                  >
                    <div className="photo">
                      <img
                        alt="..."
                        src={require('../../assets/img/anime3.png')}
                      />
                    </div>
                    <b className="caret d-none d-lg-block d-xl block" />
                    <p className="d-lg-none">Log out</p>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-navbar" right tag="ul">
                    <NavLink tag="li">
                      <DropdownItem className="nav-item">
                        내 프로필
                      </DropdownItem>
                    </NavLink>
                    <NavLink tag="li">
                      <DropdownItem className="nav-item">설정</DropdownItem>
                    </NavLink>
                    <DropdownItem divider tag="li" />
                    <NavLink tag="li">
                      <DropdownItem className="nav-item" onClick={onClick}>
                        로그아웃
                      </DropdownItem>
                    </NavLink>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <li className="separator d-lg-none" />
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
        <Modal
          modalClassName="modal-search"
          isOpen={modalSearch}
          toggle={toggleModalSearch}
        >
          <div className="modal-header">
            <Input id="inlineFormInputGroup" placeholder="SEARCH" type="text" />
            <button
              aria-label="Close"
              className="close"
              data-dismiss="modal"
              type="button"
              onClick={toggleModalSearch}
            >
              <i className="tim-icons icon-simple-remove" />
            </button>
          </div>
        </Modal>
      </div>
    );
}

export default AdminNavbar;
