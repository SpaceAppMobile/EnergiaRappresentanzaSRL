import { defineArrayMember, defineField, defineType } from "sanity";
import { MdPerson as icon } from "react-icons/md";

export default defineType({
  name: "recensione",
  title: "recensione",
  type: "document",
  icon,
  fields: [
    defineField({
      title: "Nome",
      name: "nome",
      type: "text",
      description: "Inserisci Il nome",
    }),
    defineField({
      title: "Link Recensione",
      name: "link",
      type: "text",
      description: "Inserisci Il link della recensione",
    }),
    defineField({
      name: "foto",
      title: "Foto",
      type: "image",
    }),
  ],
  preview: {
    select: { title: "nome" },
  },
});
