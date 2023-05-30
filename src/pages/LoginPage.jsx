import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <Form>
      <h5 className="text-primary mb-3">Для продолжения необходимо войти</h5>
      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Введите email" />
      </Form.Group>

      <Form.Group controlId="password">
        <Form.Label>Пароль</Form.Label>
        <Form.Control type="password" placeholder="Введите пароль" />
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
  );
}

export default LoginPage;
