import { describe, expect, test } from "vitest";
import {
  emailInputValidation,
  passwordInputValidation,
} from "../loginFormValidation";

describe("Given a emailInputValidation function", () => {
  describe("When its invoked passing an empty email address", () => {
    test("Then it should return a string with the text 'Empty Email Field'", () => {
      const emailAddress = "";

      const expectedResponse = "Empty Email Field";

      const emailValidation = emailInputValidation(emailAddress);

      expect(emailValidation).toBe(expectedResponse);
    });
  });

  describe("When its invoked passing an invalid email address", () => {
    test("Then it should return a string with the text 'Invalid Email Address'", () => {
      const emailAddress = "test.com";

      const expectedResponse = "Invalid Email Address";

      const emailValidation = emailInputValidation(emailAddress);

      expect(emailValidation).toBe(expectedResponse);
    });
  });

  describe("When its invoked passing a valid email address", () => {
    test("Then it should return an empty string", () => {
      const emailAddress = "test@test.com";

      const expectedResponse = "";

      const emailValidation = emailInputValidation(emailAddress);

      expect(emailValidation).toBe(expectedResponse);
    });
  });
});

describe("Given a passwordInputValidation function", () => {
  describe("When its invoked passing an empty password", () => {
    test("Then it should return a string with the text 'Empty Password Field'", () => {
      const password = "";

      const expectedResponse = "Empty Password Field";

      const passwordValidation = passwordInputValidation(password);

      expect(passwordValidation).toBe(expectedResponse);
    });
  });

  describe("When its invoked passing an invalid email address", () => {
    test("Then it should return a string with the text 'Password Should Have 5 to 15 Char.'", () => {
      const password = "test";

      const expectedResponse = "Password Should Have 5 to 15 Char.";

      const passwordValidation = passwordInputValidation(password);

      expect(passwordValidation).toBe(expectedResponse);
    });
  });

  describe("When its invoked passing a valid email address", () => {
    test("Then it should return an empty string", () => {
      const password = "test1234";

      const expectedResponse = "";

      const passwordValidation = passwordInputValidation(password);

      expect(passwordValidation).toBe(expectedResponse);
    });
  });
});
