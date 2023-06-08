import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function UserInfo() {
  const profile = useSelector((state) => state.profile.profile);
  console.log(profile);

  return (
    <div className="col-lg-3 text-right">
      <div
        className="d-flex align-items-center justify-content-end"
        style={{ height: '100%' }}
      >
        {profile ? (
          <div className="p-3 d-flex align-items-center border border-secondary rounded">
            <img src={profile.image_url} alt="..." style={{ width: '30px' }} />
            <h6 className="mb-0 ml-2">{profile.name}</h6>
          </div>
        ) : (
          <Link
            className="btn py-2 px-4 ml-auto d-none d-lg-block"
            to="/auth/login"
            style={{
              color: 'white',
              backgroundColor: '#FF6600',
              borderColor: '#FF6600',
            }}
          >
            {/* <i className="fa fa-user text-white mr-3"></i> */}
            Вход/Регистрация
          </Link>
        )}
      </div>
    </div>
  );
}

export default UserInfo;
