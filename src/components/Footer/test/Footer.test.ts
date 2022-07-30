import { describe, expect, test } from "vitest";
import Footer from "../../Footer/Footer.vue";
import { render, screen } from "@testing-library/vue";
import "@testing-library/jest-dom";

describe("Given a Footer component", () => {
  describe("When it's invoked", () => {
    test("Then it will render 3 social media svg icons", () => {
      render(Footer);
      const elementIconButton1: HTMLElement = screen.getByTestId("icon1");
      const elementIconButton2: HTMLElement = screen.getByTestId("icon2");
      const elementIconButton3: HTMLElement = screen.getByTestId("icon3");

      expect(elementIconButton1).toBeInTheDocument();
      expect(elementIconButton2).toBeInTheDocument();
      expect(elementIconButton3).toBeInTheDocument();
    });

    test("Then it should render an image with the alt text 'jgmarket logo'", () => {
      render(Footer);

      const expectedLogoImage: HTMLElement =
        screen.getByAltText(/jgmarket logo/i);

      expect(expectedLogoImage).toBeInTheDocument();
    });
  });
});
