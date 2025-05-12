import axios from "axios";
import { add } from "date-fns";
import { useRouter } from "next/navigation";
import { createContext, PropsWithChildren, useContext, useState } from "react";
import { toast } from "sonner";
import { SignUp } from "../(auth)/AuthenticationPage/_components/SignUp";

type User = {
  _id: string;
  name: string;
  email: string;
  image: string;
};

type AuthContextType = {
  user?: User;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (
    name: string,
    email: string,
    password: string,
    phoneNumber: string,
    address: string
  ) => Promise<void>;
  signOut: () => Promise<void>;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
};

const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const [user, setUser] = useState<User | undefined>();
  const [loading, setLoading] = useState(false);

  const SignIn = async (email: string, password: string) => {
    try {
      const { data } = await axios.post("http://localhost:3001/auth/signIn", {
        email,
        password,
      });
      localStorage.setItem("token", data.token);
      setUser(data.user);
    } catch (error) {
      toast.error("Failed to sign in");
    }
  };

  const SignUp = async (
    name: string,
    email: string,
    password: string,
    phoneNumber: string,
    address: string
  ) => {
    try {
      const { data } = await axios.post("http://localhost:3001/auth/signUp", {
        name,
        email,
        password,
        phoneNumber,
        address,
      });
      localStorage.getItem("token", data.token);
      setUser(data.user);
    } catch (error) {
      console.error(error);
      toast.error("Failed to sign up");
    }
  };

  const signOut = async () => {
    localStorage.removeItem("token");
    setUser(undefined);
  };

  return (
    <AuthContext.Provider value={signOut} signUp={SignUp} signIn={SignIn}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
