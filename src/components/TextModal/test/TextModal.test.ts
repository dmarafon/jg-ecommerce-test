import { describe, expect, test, vi } from "vitest";
import TextModal from "../../TextModal/TextModal.vue";
import { render, screen, waitFor } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

describe("Given a TextModal component", () => {
  describe("When its invoked", () => {
    test("Then it should render a button element with the text 'x'", () => {
      render(TextModal);

      const button = screen.getByRole("button", {
        name: /×/i,
      });

      expect(button).toBeInTheDocument();
    });
  });

  describe("When its invoked passing the text 'Test Text' as props", () => {
    test("Then it should render a paragraph element with the text 'Test Text'", () => {
      render(TextModal, { props: { textMessage: "Test Text" } });

      const button = screen.getByText(/test text/i);

      expect(button).toBeInTheDocument();
    });
  });

  describe("When its invoked passing as props the console.table web API with an array and the user press the 'Escape' key", () => {
    test("Then the console.clear web API should have been called with the exact same array", async () => {
      render(TextModal, { props: { keyEvent: () => console.table([1, 2]) } });

      const expectedFunction = (console.table = vi.fn());

      const expectedConsoledArray = [1, 2];

      userEvent.keyboard("{Escape}");

      await waitFor(() =>
        expect(expectedFunction).toHaveBeenCalledWith(expectedConsoledArray)
      );
    });
  });

  describe("When its invoked passing the console.table web API with an array and the user press the 'Enter' key", () => {
    test("Then the console.clear web API should have been called with the exact same array", async () => {
      render(TextModal, { props: { keyEvent: () => console.table([1, 2]) } });

      const expectedFunction = (console.table = vi.fn());

      const expectedConsoledArray = [1, 2];

      userEvent.keyboard("{Enter}");

      await waitFor(() =>
        expect(expectedFunction).toHaveBeenCalledWith(expectedConsoledArray)
      );
    });
  });
});
