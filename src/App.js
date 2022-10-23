import "./App.css";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import styled from "styled-components";
import CircularProgress from "@mui/material/CircularProgress";
import React, { lazy, Suspense } from "react";

const SignUp = lazy(() => import("../src/Screens/SignUp"));
const Navigation = lazy(() => import("../src/Components/Navigation"));
const SignIn = lazy(() => import("../src/Screens/SignIn"));
function App() {
  const isAuth = true;
  return (
    <Suspense
      fallback={
        <Box>
          <CircularProgress />
        </Box>
      }
    >
      <Router>
        <Switch>
          {isAuth ? (
            <Route path="/*" element={<Navigation />} />
          ) : (
            <>
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signin" element={<SignIn />} />{" "}
            </>
          )}
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;

const Box = styled.div`
  width: 100%;
  height: 80vh;

  /* width: 96%; */

  display: grid;
  place-items: center;
`;
