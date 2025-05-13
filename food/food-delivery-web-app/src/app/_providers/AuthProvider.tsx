import axios from "axios";
import { add } from "date-fns";
import { useRouter } from "next/navigation";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "sonner";

type User = {
  _id: string;
  email: string;
  phoneNumber: number;
  address: string;
  role: string;
};

type AuthContextType = {
  user?: User;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
};

const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | undefined>();
  const [loading, setLoading] = useState(false);

  const signIn = async (email: string, password: string) => {
    try {
      const { data } = await axios.post("http://localhost:3001/auth/sign-in", {
        email,
        password,
      });
      localStorage.setItem("token", data.token);
      setUser(data.user);
      toast.success("Account created.");
    } catch (error) {
      toast.error("Failed to sign in");
    }
  };

  const signUp = async (email: string, password: string) => {
    try {
      const { data } = await axios.post("http://localhost:3001/auth/sign-up", {
        email,
        password,
      });
      localStorage.setItem("token", data.token);
      setUser(data.user);
      console.log(data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to sign up");
    }
  };

  const signOut = async () => {
    localStorage.removeItem("token");
    setUser(undefined);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;
  }, []);
  return (
    <AuthContext.Provider value={{ user, setUser, signIn, signOut, signUp }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
