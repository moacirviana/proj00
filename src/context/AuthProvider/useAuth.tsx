import { useContext } from "react"
import { AuthContext } from "."

export const UserAuth = () => {
    const context = useContext(AuthContext);
    return context;
}
