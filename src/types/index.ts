export type Agent = {
	first_name: string;
	last_name: string;
	status: "online" | "offline";
	profile: "admin" | "user";
	avatar: string;
};

export type AgentResponse = {
	agents: Agent[];
};
