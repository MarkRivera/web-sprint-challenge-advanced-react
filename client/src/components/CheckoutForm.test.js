import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const { getByText } = render(<CheckoutForm />);

    const formHeader = getByText(/Checkout Form/i);
    expect(formHeader).toBeInTheDocument()
    expect(formHeader).toBeVisible()
    expect(formHeader.textContent).toMatch(/Checkout Form/i);
});

test("form shows success message on submit with form details", async () => {
    // Render
    const { findByTestId, getByText } = render(<CheckoutForm />);

    // Click checkout button
    const submitButton = getByText("Checkout");
    fireEvent.click(submitButton);


    const successMessage = await findByTestId("successMessage");
    expect(successMessage).toBeInTheDocument();
    expect(successMessage).toBeVisible();
});
