import { Agent } from "../types";

export const sortAgentsList = (agents: Agent[]): Agent[] => {
	return agents.sort((a, b) => {
		if (a.status !== b.status) {
			return a.status === "online" ? -1 : 1;
		}

		return a.first_name.localeCompare(b.first_name);
	});
};
