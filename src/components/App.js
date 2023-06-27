<<<<<<< HEAD
import { Routes, Route } from "react-router-dom";
import AuthLayout from "./AuthLayout";
import Layout from "./Layout";
import routes from "../routes";
=======
import { Routes, Route } from 'react-router-dom';
import AuthLayout from './AuthLayout';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import Layout from './Layout';
import HomePage from '../pages/HomePage';
import CoursesPage from '../pages/CoursesPage';
import TestsPage from '../pages/TestsPage';
import ArticlesPage from '../pages/ArticlesPage';
import AboutPage from '../pages/AboutPage';
import ContactsPage from '../pages/ContactsPage';
import NotFoundPage from '../pages/NotFoundPage';
import LessonsPage from '../pages/LessonsPage';
import SingleLessonPage from '../pages/SingleLessonPage';
import SingleTestPage from '../pages/SingleTestPage';
import ProfilePage from '../pages/ProfilePage';
import AuthRequire from '../hoc/AuthRequire';
import SingleArticlePage from '../pages/SingleArticlePage';
import AddReviewPage from '../pages/AddReviewPage';
>>>>>>> 3d0a3e542fb6268e8f26046e36b5c79d35301414

function App() {
  return (
    <Routes>
      <Route path="/auth" element={<AuthLayout />}>
        {routes.auth.map((route) => (
          <Route key={route.name} path={route.path} element={route.element} />
        ))}
      </Route>
      <Route path="/" element={<Layout />}>
<<<<<<< HEAD
        {routes.genaral.map((route) => (
          <Route key={route.name} path={route.path} element={route.element} />
        ))}
=======
        <Route index element={<HomePage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route
          path="/courses/:courseId"
          element={<AuthRequire children={<LessonsPage />} />}
        />
        <Route
          path="/lessons/:id"
          element={<AuthRequire children={<SingleLessonPage />} />}
        />
        <Route path="/tests" element={<TestsPage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/articles/:id" element={<SingleArticlePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/tests/:id" element={<SingleTestPage />} />
        <Route
          path="/profile"
          element={<AuthRequire children={<ProfilePage />} />}
        />
        <Route
          path="/review"
          element={<AuthRequire children={<AddReviewPage />} />}
        />
        <Route path="*" element={<NotFoundPage />} />
>>>>>>> 3d0a3e542fb6268e8f26046e36b5c79d35301414
      </Route>
    </Routes>
  );
}

export default App;
