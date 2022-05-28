import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import {
  Home,
  Briefcase,
  ShoppingCart,
  Users,
  BarChart2,
  Layers,
  PlusCircle,
  FileText,
} from "react-feather";

import "./Layout.css";

const Layout: React.FC = ({ children }) => {
  const { isAuthenticated, loginWithRedirect, logout, isLoading } = useAuth0();

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
      </Helmet>
      {/* Bootstrap Dashboard example component https://getbootstrap.com/docs/5.2/examples/ */}
      <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <a className="navbar-brand col-md-3 col-lg-2 me-0 p-3 fs-6" href="#">
          Company name
        </a>
        <button
          className="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <input
          className="form-control form-control-dark w-100 rounded-0 border-0"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
        <div className="navbar-nav">
          <div className="nav-item text-nowrap">
            {isLoading ? (
              <p>Loading... </p>
            ) : (
              <>
                {isAuthenticated ? (
                  <a
                    className="nav-link px-3"
                    onClick={() => logout({ returnTo: window.location.origin })}
                  >
                    Log out
                  </a>
                ) : (
                  <a
                    className="nav-link px-3"
                    onClick={() => loginWithRedirect()}
                  >
                    Log In
                  </a>
                )}
              </>
            )}
          </div>
        </div>
      </header>

      <div className="container-fluid">
        <div className="row">
          <nav
            id="sidebarMenu"
            className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
          >
            <div className="position-sticky pt-3">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link className="nav-link" activeClassName="active" to="/">
                    <Home className="align-text-bottom pe-2" />
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/organizations"
                    activeClassName="active"
                  >
                    <Briefcase className="align-text-bottom pe-2" />
                    Organizations
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <ShoppingCart className="align-text-bottom pe-2" />
                    Products
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <Users className="align-text-bottom pe-2" />
                    Customers
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <BarChart2 className="align-text-bottom pe-2" />
                    Reports
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <Layers className="align-text-bottom pe-2" />
                    Integrations
                  </a>
                </li>
              </ul>

              <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase">
                <span>Saved reports</span>
                <a
                  className="link-secondary"
                  href="#"
                  aria-label="Add a new report"
                >
                  <PlusCircle className="align-text-bottom p-1" />
                </a>
              </h6>
              <ul className="nav flex-column mb-2">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <FileText className="align-text-bottom pe-2" />
                    Current month
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <FileText className="align-text-bottom pe-2" />
                    Last quarter
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <FileText className="align-text-bottom pe-2" />
                    Social engagement
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <FileText className="align-text-bottom pe-2" />
                    Year-end sale
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
