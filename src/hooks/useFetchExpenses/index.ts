import { useEffect, useState } from "react";
import fallbackResponse from "./fallbackResponse.json";
import { Expense } from "../../models/expenses";
import { fetchExpenses } from "../../api/expenses";

const useFetchExpenses = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  useEffect(() => {
    fetchExpenses("maxim.dodon")
      .then(res => res.json())
      .then(setExpenses)
      .catch(() => setExpenses(fallbackResponse));
  }, []);

  return expenses;
};

export default useFetchExpenses;