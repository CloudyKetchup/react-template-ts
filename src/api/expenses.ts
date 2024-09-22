const API_URL = "https://expenses-backend-mu.vercel.app";

export const fetchExpenses = (username: string) =>
	fetch(`${API_URL}/expenses`, {
		headers: {
			"Content-Type": "application/json",
			Username: username,
		},
	});