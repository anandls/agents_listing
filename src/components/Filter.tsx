import { FilterOption } from "../types";
import { LABELS } from "../constants";

type FilterProps = {
	setFilter: React.Dispatch<React.SetStateAction<string>>;
	options: FilterOption[];
};

function Filter({ setFilter, options }: FilterProps) {
	return (
		<div className="mb-4">
			<label htmlFor="statusFilter" aria-label={LABELS.FILTER} className="mr-2">
				{LABELS.FILTER}
			</label>
			<select
				id="statusFilter"
				onChange={(e) => setFilter(e.target.value)}
				className="border rounded-md p-2 bg-white"
			>
				{options.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</div>
	);
}

export default Filter;
