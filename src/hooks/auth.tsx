import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface IUser {
  login: string;
  avatar_url: string;
  name: string;
  email: string;
  location: string;
  followers: number;
  following: number;
  public_repos: number;
  bio: string;
  company: string;
  followers_url: string;
  following_url: string;
  organizations_url: string;
  starred_url: string;
  public_gists: string;
}

interface IAuthContextData {
  user: IUser;
  signIn(username: string): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUser>(
    (): IUser => {
      const initialUser = localStorage.getItem('@GithubProfiles:user');

      if (initialUser) return JSON.parse(initialUser);

      return {} as IUser;
    },
  );

  const signIn = useCallback(async (username: string) => {
    const response = await api.get<IUser>(`users/${username}`);

    const { data } = response;

    localStorage.setItem('@GithubProfiles:user', JSON.stringify(data));

    setUser(data);
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@GithubProfiles:user');

    setUser({} as IUser);
  }, []);

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): IAuthContextData {
  const context = useContext(AuthContext);

  if (!context) throw new Error('useAuth must be used within an AuthProvider');

  return context;
}

export { AuthProvider, useAuth };
