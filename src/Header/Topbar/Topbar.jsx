function Topbar() {
  return (
    <div className="container-fluid">
      <div className="row align-items-center py-4 px-xl-5">
        <div className="col-lg-3">
          <a href="/" class="text-decoration-none">
            <h1 class="m-0">
              <span class="primary-color">B</span>RISCLY
            </h1>
          </a>
        </div>
        <div className="col-lg-3 text-right">
          <div className="d-inline-flex align-items-center">
            <i className="fa fa-2x fa-map-marker-alt primary-color mr-3"></i>
            <div className="text-left">
              <h6 className="font-weight-semi-bold mb-1">Наш офис</h6>
              <small>Ул.Неизвестно, 12, Город, Страна</small>
            </div>
          </div>
        </div>
        <div className="col-lg-3 text-right">
          <div className="d-inline-flex align-items-center">
            <i className="fa fa-2x fa-envelope primary-color mr-3"></i>
            <div className="text-left">
              <h6 className="font-weight-semi-bold mb-1">Email</h6>
              <small>info@example.com</small>
            </div>
          </div>
        </div>
        <div className="col-lg-3 text-right">
          <div className="d-inline-flex align-items-center">
            <i className="fa fa-2x fa-phone primary-color mr-3"></i>
            <div className="text-left">
              <h6 className="font-weight-semi-bold mb-1">Свяжитесь с нами</h6>
              <small>+012 345 6789</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
