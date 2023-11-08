import { z } from "zod";

  const usernameSchema = z.string().min(8).max(16);
  const emailSchema = z.string().email();
  const passwordSchema = z
    .string()
    .min(8)
    .refine(
      (password) => {
        // Use a regular expression to check for the required password criteria
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        return passwordRegex.test(password);
      },
      {
        message:
          "Password must have at least one uppercase letter, one lowercase letter, and one digit (number).",
      }
    );
    export {usernameSchema, emailSchema, passwordSchema}