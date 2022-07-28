import { describe, expect, test } from "vitest";
import LoadingModal from "../../LoadingModal/LoadingModal.vue";
import { render, screen } from "@testing-library/vue";
import "@testing-library/jest-dom";

describe("Given a LoadingModal component", () => {
  describe("When its invoked", () => {
    test("Then it should render a loading spinner animation inside a div element", () => {
      render(LoadingModal);

      const divElementSpinner = screen.getByTestId("loading__spinner");

      expect(divElementSpinner).toBeInTheDocument();
    });
  });
});
