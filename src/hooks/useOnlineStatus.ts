import { useState, useEffect } from "react";

const useOnlineStatus = (status: string) => {
	const [isOnline, setIsOnline] = useState(false);

	useEffect(() => {
		if (status === "online") {
			setIsOnline(true);
		} else {
			setIsOnline(false);
		}
	}, [status]);

	return isOnline;
};

export default useOnlineStatus;
