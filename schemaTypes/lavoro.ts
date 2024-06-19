import { defineField, defineType } from "sanity";
import { MdPerson as icon } from "react-icons/md";

export default defineType({
  name: "lavoro",
  title: "lavoro",
  type: "document",
  icon,
  fields: [
    defineField({
      name: "nome",
      title: "Nome",
      type: "string",
      description: "Inserisci il nome del lavoro",
    }),
    // defineField({
    //   name: 'slug',
    //   title: 'Slug',
    //   type: 'slug',
    //   options: {
    //     source: 'name',
    //     maxLength: 100,
    //   },
    // }),
    defineField({
      name: "foto",
      title: "Foto",
      type: "image",
      // options: {
      //   hotspot: true,
      // },
    }),
  ],
  preview: {
    select: { title: "nome", media: "foto" },
  },
});
