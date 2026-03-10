import { useState, useEffect } from "react";
import axios from "axios"; // استيراد axios
import { API_BASE_URL } from "../../config/api";
import Alert from "../../components/ui/Alert";

export default function InsightsManagement() {
  const [insights, setInsights] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [insightToDelete, setInsightToDelete] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  // حالة الـ Alert
  const [alert, setAlert] = useState(null);

  const showAlert = (variant, title, message) => {
    setAlert({ variant, title, message });
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  };

  // State للأخطاء
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    id: null,
    title: "",
    description: "",
    type: "Article", // القيمة الافتراضية
    image: null,
  });

  // جلب البيانات باستخدام Axios
  const fetchInsights = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/api/Insights`);
      setInsights(res.data);
    } catch (err) {
      console.error("Failed to fetch insights:", err);
    }
  };

  useEffect(() => {
    fetchInsights();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const imageUrl = URL.createObjectURL(file);
      setFormData((prev) => ({ ...prev, image: imageUrl }));
      if (errors.image) setErrors((prev) => ({ ...prev, image: null }));
    }
  };

  const handleAddNew = () => {
    setFormData({
      id: null,
      title: "",
      description: "",
      type: "Article",
      image: null,
    });
    setImageFile(null);
    setErrors({});
    setIsModalOpen(true);
  };

  const handleEdit = (insight) => {
    setFormData({
      id: insight.id,
      title: insight.title || "",
      description: insight.description || "",
      type: insight.type || "Article",
      image: insight.imageUrl ? `${API_BASE_URL}${insight.imageUrl}` : null,
    });
    setImageFile(null);
    setErrors({});
    setIsModalOpen(true);
  };

  const handleDeleteClick = (insight) => {
    setInsightToDelete(insight);
    setIsDeleteModalOpen(true);
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.description.trim())
      newErrors.description = "Description is required";
    if (!formData.type.trim()) newErrors.type = "Type is required";

    if (!formData.id && !imageFile) {
      newErrors.image = "Cover image is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // حفظ البيانات (POST / PUT) باستخدام Axios
  const handleSave = async () => {
    if (!validate()) return;

    const fd = new FormData();
    fd.append("title", formData.title);
    fd.append("description", formData.description);
    fd.append("type", formData.type);
    if (imageFile) fd.append("image", imageFile);

    try {
      let url = `${API_BASE_URL}/api/Insights`;
      let res;

      if (formData.id) {
        // حالة التعديل PUT
        res = await axios.put(`${url}/${formData.id}`, fd);
      } else {
        // حالة الإضافة POST
        res = await axios.post(url, fd);
      }

      if (res.status === 200 || res.status === 201) {
        setIsModalOpen(false);
        fetchInsights();
        showAlert(
          "success",
          formData.id ? "Insight Updated" : "Insight Created",
          `"${formData.title}" has been saved successfully.`,
        );
      }
    } catch (err) {
      console.error("Failed to save insight:", err);
      showAlert(
        "error",
        "Error",
        err.response?.data?.message ||
          "Failed to save insight. Please check your data.",
      );
    }
  };

  // حذف البيانات باستخدام Axios
  const handleDelete = async () => {
    try {
      const res = await axios.delete(
        `${API_BASE_URL}/api/Insights/${insightToDelete.id}`,
      );

      if (res.status === 200 || res.status === 204) {
        setIsDeleteModalOpen(false);
        fetchInsights();
        showAlert("success", "Deleted", "Insight has been removed.");
      }
    } catch (err) {
      console.error("Failed to delete insight:", err);
      showAlert("error", "Error", "Failed to delete insight.");
    }
  };

  return (
    <div className="py-5 sm:p-5 lg:p-6">
      <h3 className="mb-5 text-xl font-bold text-gray-800 lg:mb-7">
        Team Administration
      </h3>

      <div className="mt-4">
        <div className="font-sans relative">
          {/* Alert Notification */}
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
                <h4 className="text-xl font-bold text-gray-800">
                  Insights & Articles Management
                </h4>
                <p className="text-sm text-gray-500">
                  Total Published: {insights.length}
                </p>
              </div>
              <button
                onClick={handleAddNew}
                className="cursor-pointer flex items-center gap-2 bg-[var(--karas_aubergine)] hover:bg-[var(--karas_aubergine_ink)] text-white px-5 py-2.5 rounded-xl font-medium text-sm transition-colors shadow-sm"
              >
                <span className="text-lg font-bold">+</span> Create New Insight
              </button>
            </div>

            <div className="divide-y divide-gray-100">
              {insights.map((insight) => (
                <div
                  key={insight.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-5 gap-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center border border-gray-200">
                      {insight.imageUrl ? (
                        <img
                          src={`${API_BASE_URL}${insight.imageUrl}`}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-gray-400 text-[10px]">
                          No Image
                        </span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h5 className="font-semibold text-gray-800 truncate max-w-[250px]">
                        {insight.title}
                      </h5>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mt-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--karas_aubergine)] bg-purple-50 px-2 py-0.5 rounded">
                          {insight.type}
                        </span>
                        <span className="text-[10px] text-gray-400 italic">
                          {insight.date
                            ? new Date(insight.date).toLocaleDateString(
                                "en-GB",
                                {
                                  day: "numeric",
                                  month: "short",
                                  year: "numeric",
                                },
                              )
                            : "No Date"}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleEdit(insight)}
                      className="cursor-pointer text-sm font-bold text-gray-600 hover:bg-gray-100 border border-transparent py-2 px-4 rounded-lg transition-all"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteClick(insight)}
                      className="cursor-pointer text-sm font-bold text-red-600 hover:bg-red-100 py-2 px-4 rounded-lg transition-all"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
              {insights.length === 0 && (
                <div className="p-10 text-center text-gray-400 italic">
                  No insights found. Start by adding one!
                </div>
              )}
            </div>
          </div>

          {/* Form Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm">
              <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden animate-fadeIn">
                <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                  <h3 className="text-lg font-bold text-gray-800">
                    {formData.id ? "Edit Insight" : "Create New Insight"}
                  </h3>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="cursor-pointer text-2xl text-gray-400 hover:text-gray-600"
                  >
                    &times;
                  </button>
                </div>

                <form className="p-6 flex flex-col gap-5 max-h-[75vh] overflow-y-auto">
                  {/* Image Upload Area */}
                  <div
                    className={`flex flex-col sm:flex-row items-center gap-4 p-4 rounded-xl border-2 border-dashed transition-all ${errors.image ? "border-red-300 bg-red-50" : "border-gray-100 bg-gray-50"}`}
                  >
                    <div className="h-20 w-20 rounded-full border-4 border-white shadow-md overflow-hidden bg-white flex shrink-0">
                      {formData.image ? (
                        <img
                          src={formData.image}
                          className="w-full h-full object-cover"
                          alt="Preview"
                        />
                      ) : (
                        <div className="m-auto text-gray-300 text-[10px]">
                          No Image
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-gray-600 uppercase">
                        Insight Photo
                      </label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="text-xs cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-bold file:bg-[var(--karas_aubergine)] file:text-white"
                      />
                      {errors.image && (
                        <p className="text-[10px] text-red-500 font-bold uppercase italic">
                          {errors.image}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-gray-500 uppercase ml-1">
                        Insight Title
                      </label>
                      <input
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className={`border rounded-xl p-3 outline-none transition-all ${errors.title ? "border-red-500 bg-red-50" : "border-gray-200 focus:border-blue-500"}`}
                        placeholder="e.g. 5 Tips for Puppy Care"
                      />
                      {errors.title && (
                        <span className="text-[10px] text-red-500 font-bold ml-1">
                          {errors.title}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-gray-500 uppercase ml-1">
                        Content Type
                      </label>
                      <input
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        className={`border rounded-xl p-3 outline-none transition-all ${errors.type ? "border-red-500 bg-red-50" : "border-gray-200 focus:border-blue-500"}`}
                        placeholder="e.g. Article"
                      />
                      {errors.type && (
                        <span className="text-[10px] text-red-500 font-bold ml-1">
                          {errors.type}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5 w-full">
                    <label className="text-xs font-bold text-gray-500 uppercase ml-1">
                      Short Description / Summary
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows="4"
                      className={`border rounded-xl p-3 outline-none transition-all resize-none w-full ${errors.description ? "border-red-500 bg-red-50" : "border-gray-200 focus:border-blue-500"}`}
                      placeholder="What is this insight about?..."
                    />
                    {errors.description && (
                      <span className="text-[10px] text-red-500 font-bold ml-1">
                        {errors.description}
                      </span>
                    )}
                  </div>

                  <div className="flex justify-end gap-3 mt-4 pt-5 border-t border-gray-100 w-full">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="px-6 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-bold hover:bg-gray-50 transition-all cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      onClick={handleSave}
                      className="px-8 py-2.5 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 cursor-pointer"
                    >
                      {formData.id ? "Update" : "Publish"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Delete Confirmation Modal */}
          {isDeleteModalOpen && (
            <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm">
              <div className="bg-white w-full max-w-sm rounded-2xl p-8 text-center shadow-2xl animate-scaleIn">
                <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-100">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Delete Insight?
                </h3>
                <p className="text-sm text-gray-500 my-4">
                  Are you sure you want to remove{" "}
                  <span className="font-bold text-gray-700">
                    "{insightToDelete?.title}"
                  </span>
                  ?
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
                    className="cursor-pointer flex-1 py-3 rounded-xl bg-red-500 text-white font-bold hover:bg-red-600 transition-all shadow-lg shadow-red-100"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
