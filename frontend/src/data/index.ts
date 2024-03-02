export interface ErizeExampleProps {
  id: number;
  title?: string;
  description?: string;
  slug?: string; // Add a slug property
  file?: string;
}

export interface ErizeExamplePropsNew {
  id: number;
  docName: string;
  htmlContent?: string;
  docPath?: string;
  imagePath?: string;
  imageName?: string;
}

// Helper function to convert id to string for the slug
const generateSlug = (id: number): string => {
  return id.toString();
};

const erizeExamples: ErizeExampleProps[] = [
  {
    id: 1,
    title:
      "Vergi ödəyicisinin filialının, numayəndəliyinin və təsərrüfat subyektinin (obyektinin) olduğu yer üzrə uçota alınması haqqında arayış",
    description: "This is an example of erize",
    slug: generateSlug(1),
    file: "erizeler/erize1.docx",
  },
  {
    id: 2,
    title: "Example 2",
    description: "This is an example of erize",
    slug: generateSlug(2),
  },
  {
    id: 3,
    title: "Example 3",
    description: "This is an example of erize",
    slug: generateSlug(3),
  },
  {
    id: 4,
    title: "Example 4",
    description: "This is an example of erize",
    slug: generateSlug(4),
  },
  {
    id: 5,
    title: "Example 5",
    description: "This is an example of erize",
    slug: generateSlug(5),
  },
  {
    id: 6,
    title: "Example 6",
    description: "This is an example of erize",
    slug: generateSlug(6),
  },
  {
    id: 7,
    title: "Example 7",
    description: "This is an example of erize",
    slug: generateSlug(7),
  },
  {
    id: 8,
    title: "Example 8",
    description: "This is an example of erize",
    slug: generateSlug(8),
  },
];

export default erizeExamples;
