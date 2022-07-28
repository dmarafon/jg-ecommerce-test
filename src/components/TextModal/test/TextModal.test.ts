import { describe, expect, test } from "vitest";
import TextModal from "../../TextModal/TextModal.vue";
import { render, screen } from "@testing-library/vue";
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
});
