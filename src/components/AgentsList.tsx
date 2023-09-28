import { useState } from "react";
import { useFetch } from "../utils/fetchData";
import { Agent, TableColumn } from "../types";
import { sortAgentsList } from "../utils/libs";
import { FETCH_STATUS, FILTER_OPTIONS } from "../constants";

import StatusIndicatiorRenderer from "./StatusIndicatiorRenderer";
import Filter from "./Filter";
import Table from "./Table";

function AgentsList() {
	const { data, loading, error } = useFetch<{ agents: Agent[] }>(
		(process.env.REACT_APP_API_ENDPOINT as string) ||
			"https://3nzfzc8au7.execute-api.us-east-1.amazonaws.com/default/agents"
	);

	const [filtered, setFiltered] = useState<string>("");

	const filteredList =
		data?.agents?.filter((agent) =>
			filtered ? agent.status === filtered : true
		) ?? [];

	const sortedList = sortAgentsList(filteredList);

	if (loading) {
		return (
			<div className="flex items-center justify-center h-screen">
				<p className="capitalize text-gray-800 text-lg font-medium tracking-wider">
					{FETCH_STATUS.LOADING}...
				</p>
			</div>
		);
	}
	if (error) {
		return (
			<div className="flex items-center justify-center h-screen capitalize-first">
				<p className="capitalize-first text-red-500 tracking-wider">
					{FETCH_STATUS.ERROR}: {error.message}
				</p>
			</div>
		);
	}

	const AGENT_COLUMNS: TableColumn<Agent>[] = [
		{ header: "first name", key: "first_name" },
		{ header: "last name", key: "last_name" },
		{
			header: "Status",
			renderer: (agent) => <StatusIndicatiorRenderer status={agent.status} />,
		},
		{ header: "Profile", key: "profile" },
		{
			header: "",
			renderer: (agent) => (
				<img
					src={agent.avatar}
					alt={`${agent.first_name} ${agent.last_name}`}
					className="h-12 w-12 rounded-full"
				/>
			),
		},
	];

	return (
		<div className="flex items-center justify-center min-h-screen">
			<div className="max-w-6xl w-full p-4">
				<Filter setFilter={setFiltered} options={FILTER_OPTIONS} />
				<Table data={sortedList} columns={AGENT_COLUMNS} />
			</div>
		</div>
	);
}

export default AgentsList;
