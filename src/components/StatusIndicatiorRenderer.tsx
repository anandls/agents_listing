import useOnlineStatus from "../hooks/useOnlineStatus";

type StatusProps = {
	status: string;
};

const StatusIndicatiorRenderer = ({ status }: StatusProps) => {
	const isOnline = useOnlineStatus(status);

	return (
		<>
			<span
				className={`rounded mr-2 ${isOnline ? "bg-green-500" : "bg-red-400"}`}
			>
				&nbsp;
			</span>
			{status}
		</>
	);
};

export default StatusIndicatiorRenderer;
