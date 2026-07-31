import { z } from "zod";
import { USER_VALIDATION } from "../../constants/messages/user-validation";


export const nameRule = z
    .string({ required_error: USER_VALIDATION.NAME_REQUIRED })
    .trim()
    .min(3, USER_VALIDATION.NAME_MIN)
    .max(20, USER_VALIDATION.NAME_MAX)
    .refine((name) => /^[A-Z]/.test(name), {
        message: USER_VALIDATION.NAME_FIRST_LETTER,
    });

export const emailRule = z
    .string({ required_error: USER_VALIDATION.EMAIL_REQUIRED, })
    .trim()
    .email(USER_VALIDATION.EMAIL_INVALID);


export const passwordRule = z
    .string({ required_error: USER_VALIDATION.PASSWORD_REQUIRED })
    .min(8, USER_VALIDATION.PASSWORD_MIN)
    .max(15, USER_VALIDATION.PASSWORD_MAX)
    .refine((password) => /[A-Z]/.test(password), {
        message: USER_VALIDATION.PASSWORD_UPPERCASE,
    })
    .refine((password) => /[a-z]/.test(password), {
        message: USER_VALIDATION.PASSWORD_LOWERCASE,
    })
    .refine((password) => /[0-9]/.test(password), {
        message: USER_VALIDATION.PASSWORD_NUMBER,
    })
    .refine((password) => /[@$!%*?&#]/.test(password), {
        message: USER_VALIDATION.PASSWORD_SPECIAL,
    });