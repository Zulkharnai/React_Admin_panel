import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faSlidersH, faUsers, faBuilding, faCreditCard, faBox, faHandHoldingHeart, faStar, faChartBar, faCog, faSignOutAlt, faUserPlus, faUserEdit, faChevronLeft, faChevronRight, faChevronDown, faUser, } from '@fortawesome/free-solid-svg-icons';
import { Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Sidebar({ onLogout, toggleSidebar, isSidebarOpen }) {

  const [isCustomerOpen, setIsCustomerOpen] = useState(false);
  const [isBillOpen, setIsBillOpen] = useState(false);
  const [isReportOpen, setIsReportOpen] = useState(false);

  const toggleCustomerMenu = () => {
    setIsCustomerOpen(prev => !prev);
  };

  
  const toggleBillMenu = () => {
    setIsBillOpen(prev => !prev);
  };

  const toggleReportMenu = () => {
    setIsReportOpen(prev => !prev);
  };

  const navigate = useNavigate();

  const logout = () => {
    onLogout();
  }

  const NavigateToLink = (link) => {
    console.log(link)
    navigate(link)
  }

  return (
    <>
      {/* Sidebar Column */}

      <Col xs={isSidebarOpen ? 12 : 3} md={isSidebarOpen ? 2 : 1} style={{ backgroundColor: '#343a40', color: 'white', padding: '0.5rem', height: '100vh', overflowY: 'auto', transition: 'width 0.3s' }} className='no-scroll'>
        {
          isSidebarOpen ? <>

            {/* Logo Section */}
            <div style={{ backgroundColor: 'rgb(67, 72, 77)', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
              <h2 style={{ margin: 0, textAlign: 'center' }}>MyLogo</h2>
            </div>

            <ul style={{ listStyle: 'none', padding: 0 }}>


              <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', cursor: 'pointer' }}>
                <FontAwesomeIcon icon={faChevronLeft} onClick={toggleSidebar} />
              </div>


              <li className='sidebar-item' onClick={() => NavigateToLink('/Dashboard')}>
                <FontAwesomeIcon icon={faTachometerAlt} /> <span>Dashboard</span>
              </li>


              <li className='sidebar-item' onClick={() => NavigateToLink('/Slider')}>
                <FontAwesomeIcon icon={faSlidersH} /> <span>Slider</span>
              </li>


              <li className='sidebar-item' onClick={toggleCustomerMenu} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <FontAwesomeIcon icon={faUsers} />
                  <span style={{ marginLeft: '10px' }}>Customer</span>
                </div>
                <FontAwesomeIcon
                  icon={isCustomerOpen ? faChevronDown : faChevronRight}
                  style={{ marginLeft: '15px' }}
                />
              </li>
              {isCustomerOpen && (
                <ul style={{ listStyle: 'none', paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                  <li className='sidebar-sub-item' style={{ marginBottom: '1rem', cursor: 'pointer' }} onClick={() => { NavigateToLink('/Customer') }}>
                    <FontAwesomeIcon icon={faUser} /> <span>Customer</span>
                  </li>
                  <li className='sidebar-sub-item' style={{ marginBottom: '1rem', cursor: 'pointer' }} onClick={() => { NavigateToLink('/CustomerReminder') }}>
                    <FontAwesomeIcon icon={faUserEdit} /> <span>Reminder Customer</span>
                  </li>
                </ul>
              )}


              <li className='sidebar-item' onClick={() => { NavigateToLink('/Agency') }}>
                <FontAwesomeIcon icon={faBuilding} /> <span>Agencies</span>
              </li>


              <li className='sidebar-item' onClick={toggleBillMenu} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <FontAwesomeIcon icon={faCreditCard} />
                  <span style={{ marginLeft: '10px' }}>Billing</span>
                </div>
                <FontAwesomeIcon
                  icon={isBillOpen ? faChevronDown : faChevronRight}
                  style={{ marginLeft: '15px' }}
                />
              </li>
              {isBillOpen && (
                <ul style={{ listStyle: 'none', paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                  <li className='sidebar-sub-item' onClick={() => { NavigateToLink('/CustomerBill') }} style={{ marginBottom: '1rem', cursor: 'pointer' }}>
                    <FontAwesomeIcon icon={faUserPlus} /> <span>Customer Bill</span>
                  </li>
                  <li className='sidebar-sub-item' onClick={() => { NavigateToLink('/AgencyBill') }} style={{ marginBottom: '1rem', cursor: 'pointer' }}>
                    <FontAwesomeIcon icon={faUserEdit} /> <span>Agency Bill</span>
                  </li>
                  <li className='sidebar-sub-item' onClick={() => { NavigateToLink('/AgencyReturnBill') }} style={{ marginBottom: '1rem', cursor: 'pointer' }}>
                    <FontAwesomeIcon icon={faUserEdit} /> <span>Agency Return Bill</span>
                  </li>
                </ul>
              )}


              <li className='sidebar-item' onClick={() => { NavigateToLink('/Product') }}>
                <FontAwesomeIcon icon={faBox} /> <span>Products</span>
              </li>


              <li className='sidebar-item' onClick={() => { NavigateToLink('/Lead') }}>
                <FontAwesomeIcon icon={faHandHoldingHeart} /> <span>Leads</span>
              </li>


              <li className='sidebar-item' onClick={() => { NavigateToLink('/Review') }}>
                <FontAwesomeIcon icon={faStar} /> <span>Reviews</span>
              </li>


              <li className='sidebar-item' onClick={toggleReportMenu} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <FontAwesomeIcon icon={faChartBar} />
                  <span style={{ marginLeft: '10px' }}>Reports</span>
                </div>
                <FontAwesomeIcon
                  icon={isReportOpen ? faChevronDown : faChevronRight}
                  style={{ marginLeft: '15px' }}
                />
              </li>
              {isReportOpen && (
                <ul style={{ listStyle: 'none', paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                  <li className='sidebar-sub-item' onClick={() => { NavigateToLink('/BillReport') }} style={{ marginBottom: '1rem', cursor: 'pointer' }}>
                    <FontAwesomeIcon icon={faUserPlus} /> <span>Bill Report</span>
                  </li>
                  <li className='sidebar-sub-item' onClick={() => { NavigateToLink('/LeadReport') }} style={{ marginBottom: '1rem', cursor: 'pointer' }}>
                    <FontAwesomeIcon icon={faUserEdit} /> <span>Leads Report</span>
                  </li>
                  <li className='sidebar-sub-item' onClick={() => { NavigateToLink('/ProductReport') }} style={{ marginBottom: '1rem', cursor: 'pointer' }}>
                    <FontAwesomeIcon icon={faUserEdit} /> <span>Products Report</span>
                  </li>
                  <li className='sidebar-sub-item' onClick={() => { NavigateToLink('/CustomerReport') }} style={{ marginBottom: '1rem', cursor: 'pointer' }}>
                    <FontAwesomeIcon icon={faUserEdit} /> <span>Customer Report</span>
                  </li>
                </ul>
              )}


              <li className='sidebar-item'>
                <FontAwesomeIcon icon={faCog} /> <span>Settings</span>
              </li>


              <li className='sidebar-item' onClick={logout}>
                <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span>
              </li>


            </ul>

          </> :
            <>

              {/* Logo Section */}
              <div style={{ backgroundColor: 'rgb(67, 72, 77)', padding: '0.5rem', borderRadius: '8px', marginBottom: '1rem' }}>
                <h3 style={{ margin: 0, textAlign: 'center' }}>Logo</h3>
              </div>

              <div className='d-flex justify-content-center align-items-center'>
                <ul style={{ listStyle: 'none', padding: 0 }}>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                    <FontAwesomeIcon icon={faChevronRight} onClick={toggleSidebar} size="1.5x"/>
                  </div>


                  <li className='sidebar-item'>
                    <FontAwesomeIcon icon={faTachometerAlt} size="1.5x"/>
                  </li>


                  <li className='sidebar-item'>
                    <FontAwesomeIcon icon={faSlidersH} size="1.5x"/>
                  </li>

                  {/* Customer Menu with Submenu */}
                  <li className='sidebar-item' onClick={toggleCustomerMenu}>
                    <FontAwesomeIcon icon={faUsers} size="1.5x"/>
                  </li>
                  {isCustomerOpen && (
                    <ul style={{ listStyle: 'none', paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                      <li className='sidebar-sub-item' style={{ marginBottom: '0.5rem', cursor: 'pointer' }}>
                        <FontAwesomeIcon icon={faUserPlus} size="1.5x"/>
                      </li>
                      <li className='sidebar-sub-item' style={{ marginBottom: '0.5rem', cursor: 'pointer' }}>
                        <FontAwesomeIcon icon={faUserEdit} size="1.5x"/>
                      </li>
                    </ul>
                  )}


                  <li className='sidebar-item'>
                    <FontAwesomeIcon icon={faBuilding} size="1.5x"/>
                  </li>


                  <li className='sidebar-item'>
                    <FontAwesomeIcon icon={faCreditCard} size="1.5x"/>
                  </li>


                  <li className='sidebar-item'>
                    <FontAwesomeIcon icon={faBox} size="1.5x"/>
                  </li>


                  <li className='sidebar-item'>
                    <FontAwesomeIcon icon={faHandHoldingHeart} size="1.5x"/>
                  </li>


                  <li className='sidebar-item'>
                    <FontAwesomeIcon icon={faStar} size="1.5x"/>
                  </li>


                  <li className='sidebar-item'>
                    <FontAwesomeIcon icon={faChartBar} size="1.5x"/>
                  </li>


                  <li className='sidebar-item'>
                    <FontAwesomeIcon icon={faCog} size="1.5x"/>
                  </li>


                  <li className='sidebar-item'>
                    <FontAwesomeIcon icon={faSignOutAlt} size="1.5x"/>
                  </li>

                </ul>
              </div>

            </>
        }
      </Col>
    </>
  )
}

export default Sidebar