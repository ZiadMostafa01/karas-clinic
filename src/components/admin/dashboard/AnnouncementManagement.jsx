import { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "../../../config/api";
import Alert from "../../ui/Alert";
import { X, Megaphone, Trash2, Edit3, Plus, CheckCircle2 } from "lucide-react";

export default function AnnouncementManagement() {
  const [announcements, setAnnouncements] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const [alert, setAlert] = useState(null);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    id: null,
    title: "",
    description: "",
    isActive: false,
  });

  const showAlert = (variant, title, message) => {
    setAlert({ variant, title, message });
    setTimeout(() => setAlert(null), 5000);
  };

  const fetchAnnouncements = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/Announcements`);
      setAnnouncements(response.data);
    } catch (err) {
      console.error("Failed to fetch announcements:", err);
    }
  };

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }));
  };

  const handleAddNew = () => {
    setFormData({ id: null, title: "", description: "", isActive: false });
    setErrors({});
    setIsModalOpen(true);
  };

  const handleEdit = (announcement) => {
    setFormData({ ...announcement });
    setErrors({});
    setIsModalOpen(true);
  };

  const handleDeleteClick = (announcement) => {
    setItemToDelete(announcement);
    setIsDeleteModalOpen(true);
  };

  // دالة تفعيل إعلان معين
  const handleSetActive = async (announcement) => {
    try {
      // نرسل الإعلان مع جعل isActive قيمتها true
      // ملاحظة: الـ Backend يجب أن يتولى تعطيل الباقي أو يمكنك عمل ذلك يدوياً إذا لزم الأمر
      const payload = { ...announcement, isActive: true };
      await axios.put(
        `${API_BASE_URL}/api/Announcements/${announcement.id}`,
        payload,
      );

      fetchAnnouncements();
      showAlert("success", "Activated", "This announcement is now live!");
    } catch (err) {
      console.error("Activation error:", err);
      showAlert("error", "Error", "Failed to activate announcement.");
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.description.trim())
      newErrors.description = "Description is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = async () => {
    if (!validate()) return;

    const payload = {
      id: formData.id || 0,
      title: formData.title,
      description: formData.description,
      isActive: formData.isActive || false, // الحفاظ على الحالة الحالية أو false للجديد
    };

    try {
      let response;
      if (formData.id) {
        response = await axios.put(
          `${API_BASE_URL}/api/Announcements/${formData.id}`,
          payload,
        );
      } else {
        response = await axios.post(
          `${API_BASE_URL}/api/Announcements`,
          payload,
        );
      }

      if (
        response.status === 200 ||
        response.status === 201 ||
        response.status === 204
      ) {
        setIsModalOpen(false);
        fetchAnnouncements();
        showAlert(
          "success",
          formData.id ? "Updated" : "Created",
          "Announcement has been published successfully.",
        );
      }
    } catch (err) {
      console.error("Save error:", err);
      showAlert(
        "error",
        "Error",
        "Failed to save announcement. Check console for details.",
      );
    }
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `${API_BASE_URL}/api/Announcements/${itemToDelete.id}`,
      );
      if (response.status === 200 || response.status === 204) {
        setIsDeleteModalOpen(false);
        fetchAnnouncements();
        showAlert("success", "Deleted", "Announcement removed successfully.");
      }
    } catch (err) {
      console.error("Delete error:", err);
      showAlert("error", "Error", "Failed to delete.");
    }
  };

  return (
    <div className="font-sans relative">
      {alert && (
        <div className="fixed top-20 right-5 z-[1100] w-full max-w-md animate-fadeIn">
          <Alert
            variant={alert.variant}
            title={alert.title}
            message={alert.message}
          />
        </div>
      )}

      <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
        <div className="flex flex-col sm:flex-row gap-4 p-5 border-b border-gray-100 lg:p-6 justify-between items-center">
          <div>
            <h4 className="text-xl font-bold text-gray-800 flex items-center gap-2">
              <Megaphone size={20} className="text-[var(--karas_aubergine)]" />
              Announcements Bar
            </h4>
            <p className="text-sm text-gray-500">
              Manage what users see in the top bar
            </p>
          </div>
          <button
            onClick={handleAddNew}
            className="cursor-pointer flex items-center gap-2 bg-[var(--karas_aubergine)] hover:bg-[var(--karas_aubergine_ink)] text-white px-5 py-2.5 rounded-xl font-medium text-sm transition-colors shadow-sm"
          >
            <Plus size={18} /> Add New Announcement
          </button>
        </div>

        <div className="divide-y divide-gray-100">
          {announcements.length === 0 && (
            <div className="p-10 text-center text-gray-400">
              No announcements found.
            </div>
          )}
          {announcements.map((item) => (
            <div
              key={item.id}
              className={`flex flex-col sm:flex-row justify-between p-5 gap-4 hover:bg-gray-50/50 transition-colors ${item.isActive ? "border-l-4 border-[var(--karas_aubergine)] bg-purple-50/20" : ""}`}
            >
              <div className="flex gap-4">
                <div
                  className={`h-10 w-10 rounded-lg flex items-center justify-center shrink-0 ${item.isActive ? "bg-[var(--karas_aubergine)] text-white" : "bg-purple-50 text-[var(--karas_aubergine)]"}`}
                >
                  <Megaphone size={20} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h5 className="font-semibold text-gray-800">
                      {item.title}
                    </h5>
                    {item.isActive && (
                      <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                        Active
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 line-clamp-1">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {!item.isActive && (
                  <button
                    onClick={() => handleSetActive(item)}
                    className="cursor-pointer flex items-center gap-1.5 px-3 py-2 hover:bg-green-50 rounded-lg text-green-600 transition-all text-xs font-bold"
                    title="Make Active"
                  >
                    <CheckCircle2 size={16} /> Activate
                  </button>
                )}
                <button
                  onClick={() => handleEdit(item)}
                  className="cursor-pointer p-2 hover:bg-gray-100 rounded-lg text-gray-600 transition-all"
                  title="Edit"
                >
                  <Edit3 size={18} />
                </button>
                <button
                  onClick={() => handleDeleteClick(item)}
                  className="cursor-pointer p-2 hover:bg-red-50 rounded-lg text-red-600 transition-all"
                  title="Delete"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden animate-fadeIn">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
              <h3 className="text-lg font-bold text-gray-800">
                {formData.id ? "Edit Announcement" : "New Announcement"}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 cursor-pointer text-2xl"
              >
                &times;
              </button>
            </div>

            <form className="p-6 flex flex-col gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-500 uppercase ml-1">
                  Title (Short)
                </label>
                <input
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className={`border rounded-xl p-3 outline-none transition-all ${errors.title ? "border-red-500 bg-red-50" : "border-gray-200 focus:border-blue-500"}`}
                  placeholder="e.g. 20% Discount on Vaccines!"
                />
                {errors.title && (
                  <span className="text-[10px] text-red-500 font-bold ml-1">
                    {errors.title}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-500 uppercase ml-1">
                  Content / Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="3"
                  className={`border rounded-xl p-3 outline-none transition-all resize-none ${errors.description ? "border-red-500 bg-red-50" : "border-gray-200 focus:border-blue-500"}`}
                  placeholder="The message that will appear in the bar..."
                />
                {errors.description && (
                  <span className="text-[10px] text-red-500 font-bold ml-1">
                    {errors.description}
                  </span>
                )}
              </div>

              <div className="flex justify-end gap-3 mt-4 pt-5 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-bold hover:bg-gray-50 cursor-pointer transition-all"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSave}
                  className="px-8 py-2.5 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 shadow-lg shadow-blue-100 cursor-pointer transition-all"
                >
                  {formData.id ? "Update Announcement" : "Publish"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isDeleteModalOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-sm rounded-2xl p-8 text-center shadow-2xl animate-scaleIn">
            <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-100">
              <Trash2 size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-800">
              Delete Announcement?
            </h3>
            <p className="text-sm text-gray-500 my-4">
              This will remove the announcement for all users.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setIsDeleteModalOpen(false)}
                className="cursor-pointer flex-1 py-3 rounded-xl border border-gray-200 text-gray-600 font-bold hover:bg-gray-50 transition-all"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="cursor-pointer flex-1 py-3 rounded-xl bg-red-500 text-white font-bold hover:bg-red-600 shadow-lg shadow-red-100 transition-all"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
