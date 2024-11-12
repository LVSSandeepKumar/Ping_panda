import { z } from "zod"

export const CATEGORY_NAME_VALIDATOR = z
  .string()
  .min(1, "Category name can't be empty.")
  .regex(/^[a-zA-Z0-9-]+$/, "Category name should only contain letters, numbers or hypens.")
