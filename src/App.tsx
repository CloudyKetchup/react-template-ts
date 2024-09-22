import "./App.css";
import useFetchExpenses from "./hooks/useFetchExpenses";

const renderDate = (date: Date) => (
  `${date.toLocaleString('en-GB', { month: 'short' })} ${('0' + date.getDate()).slice(-2)}`
);

function App() {
  const expenses = useFetchExpenses();

  return (
		<div id="template-text">
			<div>
				<h2>Expenses</h2>
			</div>
			<div className="divider" />
			<div>
				<table>
					<thead>
						<tr>
							<th>Date</th>
							<th>Merchant</th>
							<th>Amount</th>
							<th>Category</th>
							<th>Description</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						{expenses.map((expense, i) => (
							<tr key={i}>
								<td>{renderDate(new Date(expense.date))}</td>
								<td>{expense.merchant}</td>
								<td>£{expense.amount}</td>
								<td>{expense.category}</td>
								<td>{expense.description}</td>
								<td>{expense.status}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default App;
