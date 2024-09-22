import { useEffect, useState } from "react";
import fallbackResponse from "./fallbackResponse.json";
import { Expense } from "../../models/expenses";

const useFetchExpenses = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  useEffect(() => {
    fetch("https://expenses-backend-mu.vercel.app/expenses", {
			headers: {
				"Content-Type": "application/json",
				Username: "maxim.dodon",
			},
		})
      .then(res => res.json())
      .then(setExpenses)
      .catch(() => setExpenses(fallbackResponse));
  }, []);

  return expenses;
};

export default useFetchExpenses;