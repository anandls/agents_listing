import { useEffect, useState } from "react";
import { Agent, AgentResponse } from "./types";

const AgentsList = () => {
	const [agents, setAgents] = useState<Agent[]>([]);

	useEffect(() => {
		fetch(
			"https://3nzfzc8au7.execute-api.us-east-1.amazonaws.com/default/agents"
		)
			.then((res) => res.json())
			.then((data: AgentResponse) => {
				setAgents(data.agents);
			});
	}, []);

	return (
		<div>
			{agents.map((agent, index) => (
				// should use unique identifier as key and not index
				<div key={index}>{agent.first_name}</div>
			))}
		</div>
	);
};

export default AgentsList;
