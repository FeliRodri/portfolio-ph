// 1. Importar utilidades de `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Definir una `type` y `schema` para cada colección
const laboratorioCollection = defineCollection({
    type: 'content', // or 'data'
    schema: z.object({
        title: z.string(),
        pubDate: z.date(),
        description: z.string(),
        author: z.string(),
        image: z.object({
            url: z.string(),
            alt: z.string()
        }),
        tags: z.array(z.string())
    }),
});

// 3. Exportar un único objeto `collections` para registrar tu(s) colección(es)
export const collections = {
    'laboratorio': laboratorioCollection,
};