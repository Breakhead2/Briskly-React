function Navbar() {
  return (
    <div class="container-fluid">
      <div class="row border-top px-xl-5">
        <div class="col-lg-12">
          <nav
            class="navbar navbar-expand-lg navbar-light py-3 py-lg-0 px-0"
            style={{ height: '67px' }}
          >
            <a href="/" class="text-decoration-none d-block d-lg-none">
              <h1 class="m-0">
                <span class="text-primary">E</span>COURSES
              </h1>
            </a>
            <button
              type="button"
              class="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="navbar-collapse justify-content-between"
              id="navbarCollapse"
            >
              <div
                class="navbar-nav py-0"
                style={{ fontSize: '18px', fontWeight: 'bolder' }}
              >
                <a href="/" class="nav-item nav-link active">
                  Главная
                </a>
                <a href="/" class="nav-item nav-link">
                  О нас
                </a>
                <a href="/" class="nav-item nav-link">
                  Курсы
                </a>
                <a href="/" class="nav-item nav-link">
                  Учителя
                </a>
                <div class="nav-item dropdown">
                  <a
                    href="/"
                    class="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Блог
                  </a>
                  <div class="dropdown-menu rounded-0 m-0">
                    <a href="/" class="dropdown-item">
                      Blog List
                    </a>
                    <a href="/" class="dropdown-item">
                      Blog Detail
                    </a>
                  </div>
                </div>
                <a href="/" class="nav-item nav-link">
                  Контакты
                </a>
              </div>
              <a
                class="btn py-2 px-4 ml-auto d-none d-lg-block"
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
