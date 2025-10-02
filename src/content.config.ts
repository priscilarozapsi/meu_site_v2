import { defineCollection, z } from 'astro:content'

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate:z.coerce.date(),
    tags: z.array(z.string()),
    thumbnail: z.string(),
    pic_credits: z.string(),
    draft: z.string().optional(),
  }),
})
export const collections = { blog }
