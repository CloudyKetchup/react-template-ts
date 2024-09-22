import { FC } from "react";
import { Expense } from "../../models/expenses";

type ColumnType = "date" | "currency";

export interface TableColumn<T> {
  key: keyof T
  name: string
	type?: ColumnType
};

export interface TableProps {
  data: Expense[]
};

export const columns: TableColumn<Expense>[] = [
	{
		key: "date",
		name: "Date",
		type: "date"
	},
	{
		key: "merchant",
		name: "Merchant",
	},
	{
		key: "amount",
		name: "Amount",
		type: "currency"
	},
	{
		key: "category",
		name: "Category",
	},
	{
		key: "description",
		name: "Description",
	},
	{
		key: "status",
		name: "Status",
	},
];

const renderDate = (date: Date) =>
	`${date.toLocaleString("en-GB", { month: "short" })} ${(
		"-1" + date.getDate()
	).slice(-2)}`;

const renderValue = (value: string | number, type?: ColumnType) => {
	switch (type) {
		case "currency":
			// INFO: We hardcode the £ currency here just to match the assessment example
			return `£${value}`;
		case "date":
			return renderDate(new Date(value));
		default:
			return value;
	}
}

/**
 * We move the table rendering logic to a separate component which can be expanded in the future,
 * Ideally we would have a base Table component which would be used by the ExpensesTable, or we would use
 * a library like MUI, but for this task we keep things simple.
 */
const ExpensesTable: FC<TableProps> = ({ data }) => (
	<table>
		<thead>
			<tr>
				{columns.map(({ name }, i) => (
					<th key={i}>{name}</th>
				))}
			</tr>
		</thead>
		<tbody>
			{data.map((element, i) => (
				<tr key={i}>
					{columns.map(({ key, type }, i) => (
						<td key={i}>
							{renderValue(element[key], type)}
						</td>
					))}
				</tr>
			))}
		</tbody>
	</table>
);

export default ExpensesTable;