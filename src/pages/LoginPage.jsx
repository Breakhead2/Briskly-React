import { useEffect, useState } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (profile) {
      navigate(-1);
    }
  }, [profile, navigate, error, dispatch]);

  const emailHandle = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandle = (e) => {
    setPassword(e.target.value);
  };

  const submitHandle = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .get('https://breakhd2.store/sanctum/csrf-cookie')
      .then((csrfResponse) => {
        const authData = {
          email,
          password,
        };
        axios
          .post('http://localhost:8010/proxy/api/auth/login', authData)
          .then((response) => {
            if (response.data.success) {
              setProfile(response.data.data.profile);
              document.cookie = `api=${response.data.data.token}; path=/`;
            } else {
              setError(response.data.errors);
            }
            setLoading(false);
          });
      });
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="card p-3" style={{ width: 500 }}>
          <Form onSubmit={submitHandle}>
            <h5 className="text-primary mb-3">
              Для продолжения необходимо войти
            </h5>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                onChange={emailHandle}
                value={email}
                type="email"
                placeholder="Введите email"
              />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Пароль</Form.Label>
              <Form.Control
                onChange={passwordHandle}
                value={password}
                type="password"
                placeholder="Введите пароль"
              />
              {error && (
                <span
                  className="mt-2"
                  style={{ display: 'block', color: 'red' }}
                >
                  {error[0]}
                </span>
              )}
            </Form.Group>
            <Button variant="primary" type="submit">
              Войти
            </Button>
            <Form.Group className="mt-3">
              <Link to="/auth/register">Нет аккаунта? Зарегистрироваться</Link>
            </Form.Group>
            <Form.Group className="mt-3">
              <Link to="/">На главную</Link>
            </Form.Group>
          </Form>
        </div>
      )}
    </>
  );
}

export default LoginPage;
