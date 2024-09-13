import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import { useEffect, useState } from "react";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import HomePage from "./components/HomePage/HomePage";
import AboutUser from "./components/AboutUser/AboutUser";
import UserPostsPage from "./components/UserPostsPage/UserPostsPage";
// import withSuspense from "./hoc/withSuspense"

function App() {
  const [isAuth, setIsAuth] = useState<boolean>(true);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [isAuth]);
  // const SuspensTest = withSuspense(Test)
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route
          path="/"
          element={
            <RequireAuth isAuth={isAuth}>
              <HomePage setIsAuth={setIsAuth} />
            </RequireAuth>
          }
        />
        <Route
          path="about-me"
          element={
            <RequireAuth isAuth={isAuth}>
              <AboutUser />
            </RequireAuth>
          }
        />

        <Route
          path="my-posts"
          element={
            <RequireAuth isAuth={isAuth}>
              <UserPostsPage />
            </RequireAuth>
          }
        />
      </Routes>
    </>
  );
}

export default App;
