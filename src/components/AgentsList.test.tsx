import { render, screen, waitFor } from "@testing-library/react";
import AgentsList from "./AgentsList";
import "@testing-library/jest-dom/extend-expect";

describe("<AgentsList />", () => {
	beforeEach(async () => {
		render(<AgentsList />);
		await waitFor(
			() => expect(screen.queryByText(/loading/i)).not.toBeInTheDocument(),
			{ timeout: 4000 }
		);
	});

	it("renders agents data", () => {
		// Check if an online user data is rendered
		const ronFirstNameElement = screen.getByText("Ron");
		const ronLastNameElement = screen.getByText("Swanson");

		expect(ronFirstNameElement.closest("tr")).toBe(
			ronLastNameElement.closest("tr")
		);

		// Check if an offline user data is rendered
		const andyFirstNameElement = screen.getByText("Andy");
		const andyLastNameElement = screen.getByText("Dwyer");

		expect(andyFirstNameElement.closest("tr")).toBe(
			andyLastNameElement.closest("tr")
		);
	});
});
