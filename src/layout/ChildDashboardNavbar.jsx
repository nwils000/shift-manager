import '../styles/navbar.css';
import { Link } from 'react-router-dom';
import { FaHome, FaStore, FaTasks } from 'react-icons/fa';
import { GiTakeMyMoney, GiPayMoney } from 'react-icons/gi';

export default function ChildDashboardNavbar() {
  return (
    <div>
      <div className="navbar-wrapper">
        <div className="navbar ">
          <Link to="/" className="nav-item">
            <div className="logo-wrapper">
              <GiTakeMyMoney className="logo-icon" />
              <span className="logo-text">Kid Kapital</span>
            </div>
          </Link>
          <div className="nav-links-wrapper">
            <Link className="nav-link" to="/child-dashboard">
              <div className="icon-wrapper">
                <FaHome />
                <span>Dashboard</span>
              </div>
            </Link>
            <Link className="nav-link" to="/family-store">
              <div className="icon-wrapper">
                <FaStore />
                <span>Store</span>
              </div>
            </Link>
            <Link className="nav-link" to="/child-financial-accounts">
              <div className="icon-wrapper">
                <GiPayMoney />
                <span>Finances</span>
              </div>
            </Link>
            <Link className="nav-link" to="/responsibilities">
              <div className="icon-wrapper">
                <FaTasks />
                <span>Responsibilities</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div style={{ height: '107px' }}></div>
    </div>
  );
}
