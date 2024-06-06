import React from 'react';
import { Category } from '../../interfaces';
import { Modal } from 'antd';
import { toast } from 'react-toastify';
import { useAuth } from '../../context/auth';
import { InputLabel, TextField } from '@mui/material';
import {
  deleteCategory,
  fetchCategory,
  getAllCategories,
  updateCategory,
} from '../../services/CategoryService';

const AllCategories: React.FC = () => {
  const [categories, setCategories] = React.useState<Category[]>([]);
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [deleteId, setDeleteId] = React.useState<number | null>(null);
  const [updateId, setUpdateId] = React.useState<number | null>(null);
  const [isOpen2, setIsOpen2] = React.useState<boolean>(false);

  const [auth] = useAuth();

  const [categoryData, setCategoryData] = React.useState<Category>({
    id: 0,
    name: '',
    description: '',
  });

  React.useEffect(() => {
    getAllCategories(setCategories);
  }, []);

  const handleDelete = async () => {
    try {
      await deleteCategory(deleteId, auth.tokenPair.accessToken);
      await getAllCategories(setCategories);

      toast.success('Kateqoriya uğurla silindi');
    } catch (error) {
      console.error('Error deleting document:', error);
      toast.error('Xəta baş verdi');
    }
    setIsOpen(false);
  };

  const handleUpdate = async () => {
    try {
      await updateCategory(updateId, categoryData, auth.tokenPair.accessToken);
      await getAllCategories(setCategories);
      toast.success('Kateqoriya uğurla yeniləndi');
    } catch (error) {
      console.error('Error updating category:', error);
      toast.error('Xəta baş verdi');
    } finally {
      setIsOpen2(false);
    }
  };

  const showModal = (categoryId: number) => {
    setDeleteId(categoryId);
    setIsOpen(true);
  };

  const showModal2 = (categoryId: number) => {
    setUpdateId(categoryId);
    setIsOpen2(true);
    fetchCategory(categoryId, setCategoryData);
  };

  const handleCancel = () => {
    setIsOpen2(false);
  };

  return (
    <div className="all-documents-admin">
      <div className="container-new">
        <div className="heading-box">
          <h1>Bütün Kateqoriyalar</h1>
        </div>

        <div className="erizeler-list-box">
          <div className="box__body">
            {categories.map((category: Category) => (
              <div key={category.id} className="erize-box col-12">
                <div className="erize-box__text-box">
                  <p>{category.name}</p>
                </div>
                <div className="erize-box__buttons-box">
                  <a
                    className="update-btn btn"
                    onClick={() => showModal2(category.id)}
                  >
                    Yenilə
                  </a>
                  <a
                    className="download-btn btn"
                    onClick={() => showModal(category.id)}
                  >
                    Sil
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Modal
        title="Təsdiq etmək"
        open={isOpen}
        onOk={handleDelete}
        onCancel={handleCancel}
        okText="Təsdiq et"
        cancelText="Ləğv et"
      >
        <p>
          Kateqoriyanı silmək istədiyinizə əminsinizmi? Bu əməliyyatı geri
          qaytarmaq olmur
        </p>
      </Modal>

      <Modal
        title="Redaktə etmək"
        open={isOpen2}
        onOk={handleUpdate}
        onCancel={handleCancel}
        okText="Təsdiq et"
        cancelText="Ləğv et"
      >
        <InputLabel shrink id="docFile-label">
          Kateqoriya adı
        </InputLabel>
        <TextField
          value={categoryData.name}
          onChange={(e) =>
            setCategoryData({ ...categoryData, name: e.target.value })
          }
        />
        <InputLabel shrink id="docFile-label">
          Haqqında
        </InputLabel>
        <TextField
          value={categoryData.description}
          onChange={(e) =>
            setCategoryData({ ...categoryData, description: e.target.value })
          }
        />
      </Modal>
    </div>
  );
};

export default AllCategories;
