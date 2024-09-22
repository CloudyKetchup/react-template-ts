export type Expense = {
	id: number,
	merchant: string,
	amount: number,
	description: string,
	date: string,
	category: "training" | "travel" | "meals" | string,
	status: string
};