export interface Category {
  id: number;
  name: string;
  slug?: string;
  description: string;
}

export interface DocumentData {
  id: number;
  docName: string;
  docPath: string;
  name?: string;
  imagePath: string[];
  imageName: string;
  categoryId: number;
  editedName?: string;
  link: string;
  extraInput: {
    id: number;
    labelName: string;
    label: string;
    inputName: string | null;
  }[];
  downloadCount?: number | null;
}
export interface IProductProps {
  id: number;
  docName: string;
  docPath: string;
  name?: string;
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
  imagePath: string;
}

export interface FormData {
  docFile: FileList;
  editDocFile: FileList;
  imageFile: FileList;
  docName: string;
  categoryId: string;
}

export interface ITemplatesProps {
  id?: number;
  name?: string;
  cvEditedName?: string;
  docName?: string;
  imageName?: string;
  imagePath?: string;
  categoryId?: number;
  link?: string;
  cvImagePath?: string;
  inputs?: {
    id?: number;
    labelName?: string;
    label?: string;
    inputName?: string | null;
  }[];
}

export interface CreateCategoryData {
  categoryName: string;
  description: string;
}

export interface CreateDocumentData {
  docFile: FileList;
  editDocFile: FileList;
  imageFile: FileList;
  docName: string;
  categoryId: string;
}

export interface DocumentInput {
  labelName: string;
  label: string;
}

export interface DocumentInputV2 {
  labelName: string;
  inputName: string;
}
