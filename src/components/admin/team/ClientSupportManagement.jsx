import { useState, useEffect } from "react";
import { API_BASE_URL } from "../../../config/api";
import Alert from "../../ui/Alert";

export default function ClientSupportManagement() {
  const [supportStaff, setSupportStaff] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [staffToDelete, setStaffToDelete] = useState(null);
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
    name: "",
    role: "",
    education: "",
    about: "",
    areasOfFocus: "",
    location: "JLT",
    image: null,
  });

  // المسار المطلوب: /api/administrators
  const fetchSupportStaff = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/administrators`);
      const data = await res.json();
      setSupportStaff(data);
    } catch (err) {
      console.error("Failed to fetch support staff:", err);
    }
  };

  useEffect(() => {
    fetchSupportStaff();
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
      name: "",
      role: "",
      education: "",
      about: "",
      areasOfFocus: "",
      location: "JLT",
      image: null,
    });
    setImageFile(null);
    setErrors({});
    setIsModalOpen(true);
  };

  const handleEdit = (staff) => {
    setFormData({
      ...staff,
      role: staff.title || "",
      image: staff.imageUrl ? `${API_BASE_URL}${staff.imageUrl}` : null,
    });
    setImageFile(null);
    setErrors({});
    setIsModalOpen(true);
  };

  const handleDeleteClick = (staff) => {
    setStaffToDelete(staff);
    setIsDeleteModalOpen(true);
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full Name is required";
    if (!formData.role.trim()) newErrors.role = "Job Title is required";
    if (!formData.education.trim()) newErrors.education = "Education is required";
    if (!formData.about.trim()) newErrors.about = "Bio is required";
    if (!formData.areasOfFocus.trim()) newErrors.areasOfFocus = "Skills/Focus areas are required";

    if (!formData.id && !imageFile) {
      newErrors.image = "Profile photo is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = async () => {
    if (!validate()) return;

    const fd = new FormData();
    fd.append("name", formData.name);
    fd.append("title", formData.role);
    fd.append("education", formData.education);
    fd.append("about", formData.about);
    fd.append("areasOfFocus", formData.areasOfFocus);
    fd.append("location", formData.location);
    if (imageFile) fd.append("image", imageFile);

    try {
      let url = `${API_BASE_URL}/api/administrators`;
      let method = "POST";

      if (formData.id) {
        url = `${API_BASE_URL}/api/administrators/${formData.id}`;
        method = "PUT";
      }

      const res = await fetch(url, {
        method: method,
        body: fd,
      });

      if (res.ok) {
        setIsModalOpen(false);
        fetchSupportStaff();
        showAlert(
          "success", 
          formData.id ? "Profile Updated" : "Staff Registered", 
          `${formData.name} has been saved successfully.`
        );
      } else {
        showAlert("error", "Error", "Failed to save data. Please try again.");
      }
    } catch (err) {
      console.error("Failed to save staff:", err);
      showAlert("error", "Connection Error", "Server is unreachable.");
    }
  };

  const handleDelete = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/administrators/${staffToDelete.id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setIsDeleteModalOpen(false);
        fetchSupportStaff();
        showAlert("success", "Deleted", "Staff profile has been removed.");
      } else {
        showAlert("error", "Error", "Failed to delete staff member.");
      }
    } catch (err) {
      console.error("Failed to delete staff:", err);
      showAlert("error", "Connection Error", "Server is unreachable.");
    }
  };

  return (
    <div className="font-sans relative">
      {/* عرض التنبيه في أعلى الصفحة */}
      {alert && (
        <div className="fixed top-20 right-5 z-[1100] w-full max-w-md animate-fadeIn">
          <Alert variant={alert.variant} title={alert.title} message={alert.message} />
        </div>
      )}

      <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
        <div className="flex flex-col sm:flex-row gap-4 p-5 border-b border-gray-100 lg:p-6 justify-between items-center">
          <div>
            <h4 className="text-xl font-bold text-gray-800">
              Client Support Directory
            </h4>
            <p className="text-sm text-gray-500">
              Total Staff: {supportStaff.length}
            </p>
          </div>
          <button
            onClick={handleAddNew}
            className="cursor-pointer flex items-center gap-2 bg-[var(--karas_aubergine)] hover:bg-[var(--karas_aubergine_ink)] text-white px-5 py-2.5 rounded-xl font-medium text-sm transition-colors shadow-sm"
          >
            <span className="text-lg font-bold">+</span> Add New Staff
          </button>
        </div>

        <div className="divide-y divide-gray-100">
          {supportStaff.map((staff) => (
            <div
              key={staff.id}
              className="flex flex-col sm:flex-row sm:items-center justify-between p-5 gap-4"
            >
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center border border-gray-200">
                  {staff.imageUrl ? (
                    <img
                      src={`${API_BASE_URL}${staff.imageUrl}`}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-gray-400 text-xs">No Img</span>
                  )}
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800">{staff.name}</h5>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                      {staff.title}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--karas_aubergine)] bg-purple-50 px-2 py-0.5 rounded">
                      {staff.location}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleEdit(staff)}
                  className="cursor-pointer text-sm font-bold text-gray-600 hover:bg-gray-100 border border-transparent py-2 px-4 rounded-lg transition-all"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteClick(staff)}
                  className="cursor-pointer text-sm font-bold text-red-600 hover:bg-red-100 py-2 px-4 rounded-lg transition-all"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden animate-fadeIn">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
              <h3 className="text-lg font-bold text-gray-800">
                {formData.id ? "Edit Support Profile" : "Register New Support Staff"}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="cursor-pointer text-2xl text-gray-400 hover:text-gray-600"
              >
                &times;
              </button>
            </div>

            <form className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-5 max-h-[75vh] overflow-y-auto">
              <div
                className={`sm:col-span-2 flex flex-col sm:flex-row items-center gap-4 p-4 rounded-xl border-2 border-dashed transition-all ${errors.image ? "border-red-300 bg-red-50" : "border-gray-100 bg-gray-50"}`}
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
                    Profile Photo
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

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-500 uppercase ml-1">
                  Full Name
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`border rounded-xl p-3 outline-none transition-all ${errors.name ? "border-red-500 bg-red-50" : "border-gray-200 focus:border-blue-500"}`}
                  placeholder="e.g. Sarah Connor"
                />
                {errors.name && (
                  <span className="text-[10px] text-red-500 font-bold ml-1">
                    {errors.name}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-500 uppercase ml-1">
                  Job Title
                </label>
                <input
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className={`border rounded-xl p-3 outline-none transition-all ${errors.role ? "border-red-500 bg-red-50" : "border-gray-200 focus:border-blue-500"}`}
                  placeholder="e.g. Client Happiness Officer"
                />
                {errors.role && (
                  <span className="text-[10px] text-red-500 font-bold ml-1">
                    {errors.role}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-500 uppercase ml-1">
                  Education / Certification
                </label>
                <input
                  name="education"
                  value={formData.education}
                  onChange={handleChange}
                  className={`border rounded-xl p-3 outline-none transition-all ${errors.education ? "border-red-500 bg-red-50" : "border-gray-200 focus:border-blue-500"}`}
                  placeholder="e.g. BA in Communication"
                />
                {errors.education && (
                  <span className="text-[10px] text-red-500 font-bold ml-1">
                    {errors.education}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-500 uppercase ml-1">
                  Location
                </label>
                <select
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="border border-gray-200 rounded-xl p-3 outline-none bg-white focus:border-blue-500 transition-all cursor-pointer appearance-none"
                >
                  <option value="JLT">JLT Branch</option>
                  <option value="DownTown">DownTown Branch</option>
                </select>
              </div>

              <div className="sm:col-span-2 flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-500 uppercase ml-1">
                  Skills / Focus Areas
                </label>
                <input
                  name="areasOfFocus"
                  value={formData.areasOfFocus}
                  onChange={handleChange}
                  className={`border rounded-xl p-3 outline-none transition-all ${errors.areasOfFocus ? "border-red-500 bg-red-50" : "border-gray-200 focus:border-blue-500"}`}
                  placeholder="e.g. Customer Support, Appointment Scheduling"
                />
                {errors.areasOfFocus && (
                  <span className="text-[10px] text-red-500 font-bold ml-1">
                    {errors.areasOfFocus}
                  </span>
                )}
              </div>

              <div className="sm:col-span-2 flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-500 uppercase ml-1">
                  Detailed Bio
                </label>
                <textarea
                  name="about"
                  value={formData.about}
                  onChange={handleChange}
                  rows="4"
                  className={`border rounded-xl p-3 outline-none transition-all resize-none ${errors.about ? "border-red-500 bg-red-50" : "border-gray-200 focus:border-blue-500"}`}
                  placeholder="Background and experience in client relations..."
                />
                {errors.about && (
                  <span className="text-[10px] text-red-500 font-bold ml-1">
                    {errors.about}
                  </span>
                )}
              </div>

              <div className="sm:col-span-2 flex justify-end gap-3 mt-4 pt-5 border-t border-gray-100">
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
                  {formData.id ? "Update Profile" : "Save Profile"}
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
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800">Remove Staff</h3>
            <p className="text-sm text-gray-500 my-4">
              Are you sure you want to delete{" "}
              <span className="font-bold text-gray-700">
                "{staffToDelete?.name}"
              </span>
              ? This action cannot be undone.
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
  );
}