import { defineArrayMember, defineField, defineType } from "sanity";
import { MdPerson as icon } from "react-icons/md";

export default defineType({
  name: "lavoro",
  title: "lavoro",
  type: "document",
  icon,
  fields: [
    // defineField({
    //   name: "nome",
    //   title: "Nome",
    //   type: "string",
    //   description: "Inserisci il nome del lavoro",
    // }),
    defineField({
      title: "Nome del lavoro",
      name: "name",
      type: "text",
      description: "Inserisci Il nome del lavoro",
    }),
    defineField({
      name: "city",
      title: "Città",
      type: "string",
      description: "Inserisci Il la città in cui si è svolto il lavoro",
    }),
    defineField({
      name: "type",
      title: "Tipologia",
      type: "string",
      description: "Inserisci La tipologia del lavoro svolto",
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
      type: "array",
      of: [{ type: "image" }],
      // options: {
      //   hotspot: true,
      // },
    }),
  ],
  preview: {
    select: { title: "name", media: "foto" },
  },
});
