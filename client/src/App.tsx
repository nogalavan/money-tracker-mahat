import React, { Suspense, lazy } from "react";
import { useState, useEffect } from "react";
import { CircularProgress } from '@mui/material';
import * as AuthService from "./services/auth.service";
import IUser from './types/user.type';
import EventBus from "./common/EventBus";

const AuthenticatedApp = lazy(() => import('./AuthenticatedApp'));
const UnauthenticatedApp = lazy(() => import('./UnauthenticatedApp'));

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<IUser | undefined>(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }

    EventBus.on("logout", logOut);

    return () => {
      EventBus.remove("logout", logOut);
    };
  }, []);

  const logOut = () => {
    AuthService.logout();
    setCurrentUser(undefined);
  };

  return (
    <Suspense fallback={<CircularProgress />}>
      {currentUser ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </Suspense>
  );
};

export default App;
