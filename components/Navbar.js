import Link from "next/link";

function Navbar() {
  return (
    <nav className="navbar is-black">
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item" href="/">
            <h1>Job Finder</h1>
          </Link>
          <span className="navbar-burger burger" data-target="navbarMenu">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenu" className="navbar-menu">
          <div className="navbar-end">
            <div className=" navbar-item">
              <div className="control has-icons-left">
                <input
                  className="input is-rounded"
                  type="email"
                  placeholder="Search"
                />
                <span className="icon is-left">
                  <i className="fa fa-search"></i>
                </span>
              </div>
            </div>
            <Link
              href="/"
              className="navbar-item is-active is-size-5 has-text-weight-semibold"
            >
              Home
            </Link>
            <Link
              href="/resources/new"
              className="navbar-item is-size-5 has-text-weight-semibold"
            >
              Add
            </Link>
            <Link
              href="/"
              className="navbar-item is-size-5 has-text-weight-semibold"
            >
              About us
            </Link>
            <Link
              href="/"
              className="navbar-item is-size-5 has-text-weight-semibold"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
