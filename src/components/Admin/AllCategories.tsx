import React from "react";
import { Category } from "../../interfaces";
import { APIURL } from "../../config";
import axios from "axios";
import { Modal } from "antd";
import { toast } from "react-toastify";
import { useAuth } from "../../context/auth";

const AllCategories: React.FC = () => {
  const [categories, setCategories] = React.useState<Category[]>([]);
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [deleteId, setDeleteId] = React.useState<number | null>(null);

  const [auth] = useAuth();

  const getAllCategories = async () => {
    try {
      const { data } = await axios.get(
        `${APIURL}/api/category/getAllCategories`
      );
      if (data?.success) {
        setCategories(data?.categories);
      }
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getAllCategories();
  }, []);

  const handleDelete = async () => {
    try {
      await axios.delete(
        `http://localhost:8080/api/category/deleteCategory/${deleteId}`,
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      );

      await getAllCategories();

      toast.success("Kateqoriya uğurla silindi");
    } catch (error) {
      console.error("Error deleting document:", error);
      toast.error("Xəta baş verdi");
    }
    setIsOpen(false);
  };

  const showModal = (id: number) => {
    setDeleteId(id);
    setIsOpen(true);
  };

  const handleCancel = () => {
    setIsOpen(false);
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
          Kateqoriyanı silmək istədiyinizə əminsinizmi? Bu əməliyyatı geri qaytarmaq
          olmur
        </p>
      </Modal>
    </div>
  );
};

export default AllCategories;