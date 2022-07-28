export const emailInputValidation = (email: string): string => {
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  switch (true) {
    case email === "":
      return "Empty Email Field";

    case !email.match(validRegex):
      return "Invalid Email Address";

    default:
      return "";
  }
};

export const passwordInputValidation = (password: string): string => {
  switch (true) {
    case password === "":
      return "Empty Password Field";

    case password.length < 5:
      return "Password Should Have 5 to 15 Char.";

    default:
      return "";
  }
};
