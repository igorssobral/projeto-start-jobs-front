import { z } from 'zod';

export const candidaturaSchema = z.object({
  titulo: z
    .string({ required_error: 'Título da vaga é obrigatório!' })
    .min(1, { message: 'Título da vaga não pode estar vazio!' }),
  
  empresa: z
    .string({ required_error: 'Nome da empresa é obrigatório!' })
    .min(1, { message: 'Nome da empresa não pode estar vazio!' }),
  
  descricao: z
    .string({ required_error: 'Descrição da vaga é obrigatória!' })
    .min(1, { message: 'Descrição não pode estar vazia!' })
    .max(1000, { message: 'Descrição não pode ter mais de 1000 caracteres!' }),
  
  url: z
    .string({ required_error: 'URL da vaga é obrigatória!' })
    .url({ message: 'Informe uma URL válida para a vaga!' }),
  
  senioridade: z
    .string({ required_error: 'Escolha a senioridade!' })
    .refine((value) => ['estagio', 'trainee', 'junior', 'mid_level', 'senior'].includes(value), {
      message: 'Escolha uma senioridade válida!',
    }),
  
  modeloTrabalho: z
    .string({ required_error: 'Escolha o modelo de trabalho!' })
    .refine((value) => ['Remoto', 'Híbrido', 'Presencial'].includes(value), {
      message: 'Escolha um modelo de trabalho válido!',
    }),
  
  localizacao: z
    .string({ required_error: 'Localização da vaga é obrigatória!' })
    .min(1, { message: 'Localização não pode estar vazia!' }),
});



