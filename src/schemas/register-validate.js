import { z } from 'zod';

export const registerSchema = z
  .object({
    nome: z
      .string({ required_error: 'Digite seu nome!' })
      .min(1, { message: 'Digite um nome válido!' }),
    telefone: z
      .string({ required_error: 'Campo não pode ser vazio!' })
      .min(1, { message: 'Digite seu Telefone' })
      .refine((value) => /^\D*(\d\D*){11}$/.test(value), {
        message: 'Telefone inválido',
      })
      .transform((value) => value.replace(/\D/g, '')),
    email: z
      .string({ required_error: 'Digite um email!' })
      .min(1, { message: 'Email obrigatório!' })
      .email({ message: 'Digite um email válido!' }),
    senha: z
      .string({
        required_error: 'Campo não pode ser vazio!',
      })
      .min(8, 'deve conter no mínimo 8 caracteres')
      .max(32, 'deve conter no máximo 32 caracteres'),
    confirmSenha: z.string({ required_error: 'Repita a senha' }),
  })
  .refine((data) => data.senha === data.confirmSenha, {
    message: 'As senhas não coincidem',
    path: ['confirmSenha'],
  });
