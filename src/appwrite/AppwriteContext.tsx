import {View, Text} from 'react-native';
import React, {PropsWithChildren, createContext, useState} from 'react';

import Appwrite from './service';

type AppContexttype = {
  appwrite: Appwrite;
  isloggedIn: boolean;
  setIsLoggedIn: (isloggedIn: boolean) => void;
};

export const AppwriteContext = createContext<AppContexttype>({
  appwrite: new Appwrite(),
  isloggedIn: false,
  setIsLoggedIn: () => {},
});

export const AppwriteProvider: FC<PropsWithChildren> = ({children}) => {
  const [isloggedIn, setIsLoggedIn] = useState(false);
  const defaultValue = {
    appwrite: new Appwrite(),
    isloggedIn,
    setIsLoggedIn,
  };
  return (
    <AppwriteContext.Provider value={defaultValue}>
      {children}
    </AppwriteContext.Provider>
  );
};

export default AppwriteContext;
