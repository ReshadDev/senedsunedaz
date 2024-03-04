export interface Category {
  id: number;
  name: string;
  slug?: string;
}

export interface ProductProps {
  id: number;
  docName: string;
  docPath: string;
  imagePath: string;
  imageName: string;
  categoryId: number;
  link: string;
  extraInput: {
    id: number;
    labelName: string;
    label: string;
    inputName: string | null;
  }[];
}

export interface ISearchProps {
  id: number;
  docName: string;
  imageName: string;
}

export interface FormData {
  docFile: FileList;
  editDocFile: FileList;
  imageFile: FileList;
  docName: string;
  categoryId: string;
}
