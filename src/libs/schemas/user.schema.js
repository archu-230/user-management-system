import { z } from "zod";

import { nameRule, emailRule, passwordRule } from "../rules/user.rules";

export const userSchema = z.object({

  name: nameRule,
  email: emailRule,
  password: passwordRule,

});