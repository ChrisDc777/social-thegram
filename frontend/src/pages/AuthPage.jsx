import { useRecoilValue } from "recoil";
import LoginCard from "../components/Auth/LoginCard";
import authScreenAtom from "../atoms/authAtom";
import SignupCard from "../components/Auth/SignupCard";

const AuthPage = () => {
	const authScreenState = useRecoilValue(authScreenAtom);

	return <>{authScreenState === "login" ? <LoginCard /> : <SignupCard />}</>;
};

export default AuthPage;
