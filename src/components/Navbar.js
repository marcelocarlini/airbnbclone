/* eslint-disable jsx-a11y/anchor-is-valid */
import './Navbar.css'

const Navbar = () => {


  return (
    <nav class="navbar sticky-top navbar-expand-lg bg-white border border-1">
      <div class="container-fluid mt-2 mb-1">
        <a class="navbar-brand" href="#">
          <img src="logo192.png" alt="" width="40" height="34" />
          <span class="mt-4">
            <b>
              TraveSon
            </b>
          </span>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mx-auto mb-2 mb-lg-0">
            <div className="rounded-pill px-2 shadow-sm border border-2">
              <form class="d-flex w-100 me-2 m-1" role="search">
                <input class="form-control me-1 rounded-pill input-lg border-0" type="search" placeholder="Start your Search" aria-label="Search" />
                <button class="btn rounded-circle px-2 border-0 searchButton" type="submit"><i class="bi bi-search text-light"></i></button>
              </form>
            </div>
          </ul>
          <span className="nav-item me-2">
            <div>
              Traveson your home
            </div>
          </span>
          <span className="nav-item me-2 dropdown">
            <button class="btn dropdown-toggle rounded-pill p-1 border border-1" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="bi bi-person-circle m-2 fs-5"></i>
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </span>


        </div>
      </div>
    </nav>

  )
}

export default Navbar;
