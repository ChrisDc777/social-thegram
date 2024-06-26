import { useState } from "react";
import userAtom from "../atoms/userAtom";
import { useSetRecoilState } from "recoil";
import useShowToast from "./useShowToast";

const useLogout = () => {
	const setUser = useSetRecoilState(userAtom);
	const showToast = useShowToast();
	const [isLoggingOut, setIsLoggingOut] = useState(false);

	const handleLogout = async () => {
		setIsLoggingOut(true);
		try {
			const res = await fetch("/api/users/logout", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
			});
			const data = await res.json();

			if (data.error) {
				showToast("Error", data.error, "error");
				return;
			}

			localStorage.removeItem("user");
			setUser(null);
		} catch (error) {
			showToast("Error", error, "error");
		} finally {
			setIsLoggingOut(false);
		}
	};

	return { handleLogout, isLoggingOut }; 
};

export default useLogout;
