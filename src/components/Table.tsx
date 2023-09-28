import { TableColumn } from "../types";

type TableProps<T> = {
	data: T[];
	columns: TableColumn<T>[];
};

function Table<T>({ data, columns }: TableProps<T>) {
	return (
		<div className="overflow-x-auto border rounded">
			<table className="min-w-full table-auto divide-y divide-gray-300">
				<thead className="bg-gray-50 sticky top-0">
					<tr>
						{columns.map((col, index) => (
							<th
								key={index}
								className="px-6 py-3 text-left font-medium capitalize"
							>
								{col.header}
							</th>
						))}
					</tr>
				</thead>
				<tbody className="divide-y divide-gray-200">
					{data.map((item, rowIndex) => (
						<tr key={rowIndex}>
							{columns.map((col, colIndex) => (
								<td key={colIndex} className="px-6 py-4 capitalize">
									{col.renderer
										? col.renderer(item)
										: (item[col.key as keyof T] as React.ReactNode)}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default Table;
