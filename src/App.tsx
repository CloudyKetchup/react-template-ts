import "./App.css";
import ExpensesTable from "./components/ExpensesTable";
import useFetchExpenses from "./hooks/useFetchExpenses";

function App() {
  const expenses = useFetchExpenses();

  return (
		<div id="template-text">
			<div>
				<h2>Expenses</h2>
			</div>
			<div className="divider" />
			<div>
				<ExpensesTable data={expenses} />
			</div>
		</div>
	);
}

export default App;
