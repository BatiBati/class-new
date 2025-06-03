"use client";
import {
  Children,
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { api, setAuthToken } from "../../../axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type AuthContextType = {
  user: User | undefined;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
  signUp: (username: string, email: string, password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
};
export type User = {
  email: string;
  password: string;
  username: string;
  profile: Profile;
};

type Profile = {
  name: string;
  about: string;
  avatarImage: string;
  socialMediaUrl: string;
  successMessage: string;
  userId: number;
};

const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | undefined>();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const signIn = async (email: string, password: string) => {
    setLoading(true);
    try {
      const { data } = await api.post(`/auth/sign-in`, {
        email,
        password,
      });
      localStorage.setItem("token", data.token);
      setUser(data.userWithoutPassword);

      if (data.userWithoutPassword) {
        router.push(user?.profile === null ? "/" : "/profile");
      } else if (data.user === undefined) {
        router.push("/signIn");
      }

      toast.success("Success entered");
      setLoading(false);
    } catch (error) {
      console.error("Failed to sign in", error);
      toast.error("Failed to sign in");
    }
  };

  const signUp = async (username: string, email: string, password: string) => {
    setLoading(true);
    try {
      const { data } = await api.post(`/auth/sign-up`, {
        username,
        email,
        password,
      });

      localStorage.setItem("token", data.token);
      setUser(data.user);
      toast.success("User successfully created. Please Sign in");
      await router.push("/signIn");
      setLoading(false);
    } catch (error) {
      console.error("Failed to sign in", error);
      toast.error("Failed to sign up.");
    }
  };

  const signOut = async () => {
    localStorage.removeItem("token");
    setUser(undefined);
    router.push("/signIn");
    toast.success("Logged out successfully");
  };

  const getMe = async () => {
    const token = localStorage.getItem("token");
    setLoading(true);
    try {
      const { data } = await api.get(`auth/get-me`, {
        headers: {
          Authorization: `${token}`,
        },
      });
      setUser(data);
    } catch {
      localStorage.removeItem("token");
      setUser(undefined);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;
    setAuthToken(token);
    getMe();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, setUser, signIn, signUp, signOut, loading, setLoading }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
