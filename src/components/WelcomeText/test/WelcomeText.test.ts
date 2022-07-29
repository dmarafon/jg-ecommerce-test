import { describe, expect, test } from "vitest";
import WelcomeText from "../../WelcomeText/WelcomeText.vue";
import { render, screen } from "@testing-library/vue";
import "@testing-library/jest-dom";

describe("Given a WelcomeText component", () => {
  describe("When its invoked", () => {
    test("Then it should render an image with the alt text 'jgmarket logo'", () => {
      render(WelcomeText);

      const expectedLogoImage = screen.getByAltText(/jgmarket logo/i);

      expect(expectedLogoImage).toBeInTheDocument();
    });

    test("Then it should render a paragraph element with the text 'the best tech marketplace for all your necessities in the globe!'", () => {
      render(WelcomeText);

      const expectedText = screen.getByText(
        /the best marketplace for all your necessities in the globe!/i
      );

      expect(expectedText).toBeInTheDocument();
    });
  });
});
