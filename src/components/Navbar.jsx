import { Link, NavLink } from 'react-router-dom';

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
                <NavLink to="/" className="nav-item nav-link">
                  Главная
                </NavLink>
                <NavLink to="/about" className="nav-item nav-link">
                  О нас
                </NavLink>
                <NavLink to="/lessons" className="nav-item nav-link">
                  Уроки
                </NavLink>
                <NavLink to="/tests" className="nav-item nav-link">
                  Тесты
                </NavLink>
                <NavLink to="/articles" className="nav-item nav-link">
                  Статьи
                </NavLink>
                <NavLink to="/contacts" className="nav-item nav-link">
                  Контакты
                </NavLink>
              </div>
              <Link
                className="btn py-2 px-4 ml-auto d-none d-lg-block"
                to="/register"
                style={{
                  color: 'white',
                  backgroundColor: '#FF6600',
                  borderColor: '#FF6600',
                }}
              >
                <i className="fa fa-user text-white mr-3"></i>
                Личный кабинет
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
