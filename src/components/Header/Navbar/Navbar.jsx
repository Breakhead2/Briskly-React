function Navbar() {
  return (
    <div className="container-fluid">
      <div className="row border-top px-xl-5">
        <div className="col-lg-12">
          <nav
            className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0"
            style={{ height: '67px' }}
          >
            <a href="/" className="text-decoration-none d-block d-lg-none">
              <h1 className="m-0">
                <span className="text-primary">B</span>RISCLY
              </h1>
            </a>
            <button
              type="button"
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="navbar-collapse justify-content-between"
              id="navbarCollapse"
            >
              <div
                className="navbar-nav py-0"
                style={{ fontSize: '18px', fontWeight: 'bolder' }}
              >
                <a href="/" className="nav-item nav-link active">
                  Главная
                </a>
                <a href="/" className="nav-item nav-link">
                  О нас
                </a>
                <a href="/" className="nav-item nav-link">
                  Курсы
                </a>
                <a href="/" className="nav-item nav-link">
                  Учителя
                </a>
                <div className="nav-item dropdown">
                  <a
                    href="/"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Блог
                  </a>
                  <div className="dropdown-menu rounded-0 m-0">
                    <a href="/" className="dropdown-item">
                      Blog List
                    </a>
                    <a href="/" className="dropdown-item">
                      Blog Detail
                    </a>
                  </div>
                </div>
                <a href="/" className="nav-item nav-link">
                  Контакты
                </a>
              </div>
              <a
                className="btn py-2 px-4 ml-auto d-none d-lg-block"
                href="/"
                style={{
                  color: 'white',
                  backgroundColor: '#FF6600',
                  borderColor: '#FF6600',
                }}
              >
                Присоединиться
              </a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
