import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

export interface IUser {
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
  repos_url: string;
  url: string;
  organizations_url: string;
  starred_url: string;
  public_gists: string;
}

interface IRepo {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
}

export interface IFollow {
  login: string;
  avatar_url: string;
}

interface IAuthContextData {
  user: IUser;
  alternativeUser: IUser;
  repos: IRepo[];
  followers: IFollow[];
  following: IFollow[];
  signIn(username: string): Promise<void>;
  loadProfile(username: string): Promise<void>;
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

  const [alternativeUser, setAlternativeUser] = useState<IUser>(
    (): IUser => {
      const initialUser = localStorage.getItem(
        '@GithubProfiles:alternativeUser',
      );

      if (initialUser) return JSON.parse(initialUser);

      return {} as IUser;
    },
  );

  const [repos, setRepos] = useState<IRepo[]>((): IRepo[] => {
    const initialRepos = localStorage.getItem('@GithubProfiles:repos');

    if (initialRepos) return JSON.parse(initialRepos);

    return {} as IRepo[];
  });

  const [followers, setFollowers] = useState<IFollow[]>((): IFollow[] => {
    const initialFollowers = localStorage.getItem('@GithubProfiles:followers');

    if (initialFollowers) return JSON.parse(initialFollowers);

    return {} as IFollow[];
  });

  const [following, setFollowing] = useState<IFollow[]>((): IFollow[] => {
    const initialFollowing = localStorage.getItem('@GithubProfiles:following');

    if (initialFollowing) return JSON.parse(initialFollowing);

    return {} as IFollow[];
  });

  const signIn = useCallback(async (username: string) => {
    const [
      { data },
      reposResponse,
      followersResponse,
      followingResponse,
    ] = await Promise.all([
      api.get<IUser>(`users/${username}`),
      api.get<IRepo[]>(`users/${username}/repos`),
      api.get<IFollow[]>(`users/${username}/followers`),
      api.get<IFollow[]>(`/users/${username}/following`),
    ]);

    localStorage.setItem('@GithubProfiles:user', JSON.stringify(data));
    localStorage.setItem(
      '@GithubProfiles:repos',
      JSON.stringify(reposResponse.data),
    );
    localStorage.setItem(
      '@GithubProfiles:followers',
      JSON.stringify(followersResponse.data),
    );
    localStorage.setItem(
      '@GithubProfiles:following',
      JSON.stringify(followingResponse.data),
    );

    setUser(data);
    setRepos(reposResponse.data);
    setFollowers(followersResponse.data);
    setFollowing(followingResponse.data);
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@GithubProfiles:user');
    localStorage.removeItem('@GithubProfiles:repos');
    localStorage.removeItem('@GithubProfiles:followers');
    localStorage.removeItem('@GithubProfiles:following');
    localStorage.removeItem('@GithubProfiles:alternativeUser');

    setUser({} as IUser);
    setRepos({} as IRepo[]);
    setFollowers({} as IFollow[]);
    setFollowing({} as IFollow[]);
    setAlternativeUser({} as IUser);
  }, []);

  const loadProfile = useCallback(async (username: string) => {
    const { data } = await api.get<IUser>(`users/${username}`);

    localStorage.setItem(
      '@GithubProfiles:alternativeUser',
      JSON.stringify(data),
    );

    setAlternativeUser(data);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        alternativeUser,
        repos,
        followers,
        following,
        signIn,
        signOut,
        loadProfile,
      }}
    >
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
