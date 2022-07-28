import { describe, expect, test, vi } from "vitest";
import Footer from "../../Footer/Footer.vue";
import { render, screen } from "@testing-library/vue";
import "@testing-library/jest-dom";

describe("Given a Footer component", () => {
  describe("When it's invoked", () => {
    test("Then it will render 3 social media svg icons", () => {
      render(Footer);
      const elementIconButton1 = screen.getByTestId("icon1");
      const elementIconButton2 = screen.getByTestId("icon2");
      const elementIconButton3 = screen.getByTestId("icon3");

      expect(elementIconButton1).toBeInTheDocument();
      expect(elementIconButton2).toBeInTheDocument();
      expect(elementIconButton3).toBeInTheDocument();
    });

    test("Then it should render an image with the alt text 'jgmarket logo'", () => {
      render(Footer);

      const expectedLogoImage = screen.getByAltText(/jgmarket logo/i);

      expect(expectedLogoImage).toBeInTheDocument();
    });
  });
});
