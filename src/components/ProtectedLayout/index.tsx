import { UserAuth } from "../../context/AuthProvider/useAuth"

export const ProtectedLayout = ({children}: {children: JSX.Element} ) =>{
  const auth = UserAuth();

  if (!auth.email){
    return <h1>You dont have access</h1>;
  }
  return children;
}