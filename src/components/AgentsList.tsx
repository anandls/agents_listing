import { useEffect, useState } from "react";
import { useFetch } from "../utils/fetchData";
import { Agent, AgentResponse } from "../types";
import { sortAgentsList } from "../utils/libs";
import { FILTER_OPTIONS } from "../constants";
import Filter from "./Filter";
import Table from "./Table";

function AgentsList() {
	const { data, loading, error } = useFetch<{ agents: Agent[] }>(
		process.env.REACT_APP_API_ENDPOINT ||
			"https://3nzfzc8au7.execute-api.us-east-1.amazonaws.com/default/agents"
	);

	const [filtered, setFiltered] = useState<string>("");

	const filteredList =
		data?.agents?.filter((agent) =>
			filtered ? agent.status === filtered : true
		) ?? [];

	const sortedList = sortAgentsList(filteredList);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;

	return <div></div>;
}

export default AgentsList;
