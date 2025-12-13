import { defineCollection, z } from "astro:content";

const laboratorio = defineCollection({
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            pubDate: z.date(),
            description: z.string(),
            author: z.string(),
            image: z.object({
                url: image(), // Esto transforma la ruta string en una imagen importada
                alt: z.string(),
            }),
            tags: z.array(z.string()),
        }),
});

export const collections = { laboratorio };