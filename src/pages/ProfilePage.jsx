import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import { Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { getProfile } from "../store/slices/profileSlice";

function ProfilePage() {
  const loading = useSelector((state) => state.profile.loading);
  const profilePageData = useSelector((state) => state.profile.profilePageData);
  const error = useSelector((state) => state.profile.error);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    if (!profilePageData) {
      dispatch(getProfile());
    }
    setName(profilePageData?.name);
  }, [dispatch, profilePageData]);

  const nameHandle = (e) => {
    setName(e.target.value);
  };

  const passwordHandle = (e) => {
    setPassword(e.target.value);
  };
  const confirmPasswordHandle = (e) => {
    setConfirmPassword(e.target.value);
  };

  const submitHandle = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container-fluid text-center pb-5">
      {loading ? (
        <Loader />
      ) : (
        <>
          <h2 className="mb-5">Здравствуйте, {profilePageData?.name}</h2>
          <div className="d-flex justify-content-center">
            <img
              src={profilePageData?.image_url}
              alt="..."
              style={{ width: "400px", height: "100%", display: "block" }}
            />
            <div style={{ width: "400px", marginLeft: "200px" }}>
              <h3 className="mb-3">
                Ваш баланс: {profilePageData?.points} балла
                <i className="fa fa-bolt text-primary ml-1"></i>
              </h3>
              <Form onSubmit={submitHandle}>
                <Form.Group controlId="text">
                  <Form.Label>Имя</Form.Label>
                  <Form.Control
                    onChange={nameHandle}
                    value={name}
                    type="text"
                    placeholder="Введите имя"
                  />
                </Form.Group>
                <Button
                  disabled
                  className="w-100"
                  variant="primary"
                  type="submit"
                >
                  Сохранить
                </Button>
                <hr />
              </Form>
              <Form>
                <Form.Group controlId="password">
                  <Form.Label>Новый пароль</Form.Label>
                  <Form.Control
                    onChange={passwordHandle}
                    value={password}
                    type="password"
                    placeholder="Введите пароль"
                  />
                  {error && (
                    <span
                      className="mt-2"
                      style={{ display: "block", color: "red" }}
                    >
                      {error[0]}
                    </span>
                  )}
                </Form.Group>
                <Form.Group controlId="password">
                  <Form.Label>Повторите пароль</Form.Label>
                  <Form.Control
                    onChange={confirmPasswordHandle}
                    value={confirmPassword}
                    type="password"
                    placeholder="Повторите пароль"
                  />{" "}
                </Form.Group>
                <Button
                  disabled
                  className="w-100"
                  variant="primary"
                  type="submit"
                >
                  Сохранить
                </Button>
              </Form>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ProfilePage;
