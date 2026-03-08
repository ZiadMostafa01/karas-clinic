import { useState, useEffect } from "react";
import { API_BASE_URL } from "../../../config/api";

export default function ClientSupportManagement() {
  const [supportStaff, setSupportStaff] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [staffToDelete, setStaffToDelete] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [formData, setFormData] = useState({ id: null, name: "", role: "", about: "", areasOfFocus: "", location: "JLT", status: "Active", image: null });

  const fetchStaff = async () => { try { const res = await fetch(`${API_BASE_URL}/api/administrators`); setSupportStaff(await res.json()); } catch (err) { console.error(err); } };
  useEffect(() => { fetchStaff(); }, []);

  const handleChange = (e) => { const { name, value } = e.target; setFormData((p) => ({ ...p, [name]: value })); };
  const handleImageChange = (e) => { const file = e.target.files[0]; if (file) { setImageFile(file); setFormData((p) => ({ ...p, image: URL.createObjectURL(file) })); } };
  const handleAddNew = () => { setFormData({ id: null, name: "", role: "", about: "", areasOfFocus: "", location: "JLT", status: "Active", image: null }); setImageFile(null); setIsModalOpen(true); };
  const handleEdit = (s) => { setFormData({ ...s, role: s.title || "", image: s.imageUrl ? `${API_BASE_URL}${s.imageUrl}` : null }); setImageFile(null); setIsModalOpen(true); };
  const handleDeleteClick = (s) => { setStaffToDelete(s); setIsDeleteModalOpen(true); };

  const handleSave = async () => {
    const fd = new FormData();
    fd.append("name", formData.name); fd.append("title", formData.role); fd.append("about", formData.about);
    fd.append("areasOfFocus", formData.areasOfFocus); fd.append("location", formData.location); fd.append("status", formData.status);
    if (imageFile) fd.append("image", imageFile);
    try {
      const url = formData.id ? `${API_BASE_URL}/api/administrators/${formData.id}` : `${API_BASE_URL}/api/administrators`;
      await fetch(url, { method: formData.id ? "PUT" : "POST", body: fd });
      setIsModalOpen(false); fetchStaff();
    } catch (err) { console.error(err); }
  };

  const handleDelete = async () => {
    try { await fetch(`${API_BASE_URL}/api/administrators/${staffToDelete.id}`, { method: "DELETE" }); setIsDeleteModalOpen(false); fetchStaff(); } catch (err) { console.error(err); }
  };

  return (
    <div className=" font-sans">
      <div className=" rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
        <div className="flex flex-col sm:flex-row gap-4 p-5 border-b border-gray-100 lg:p-6 justify-between items-center">
          <div>
            <h4 className="text-xl font-bold text-gray-800">Client Support Directory</h4>
            <p className="text-sm text-gray-500">Total Support Staff: {supportStaff.length}</p>
          </div>
          <button onClick={handleAddNew} className="cursor-pointer flex items-center gap-2 bg-[var(--karas_aubergine)] hover:bg-[var(--karas_aubergine_ink)] text-white px-5 py-2.5 rounded-xl font-medium text-sm transition-colors shadow-sm">
            <span className="text-lg font-bold">+</span> Add New Staff
          </button>
        </div>
        <div className="divide-y divide-gray-100">
          {supportStaff.map((staff) => (
            <div key={staff.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-5 gap-4">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full overflow-hidden bg-purple-50 flex items-center justify-center text-purple-600 border border-purple-100">
                  {staff.imageUrl ? (<img src={`${API_BASE_URL}${staff.imageUrl}`} alt="" className="w-full h-full object-cover" />) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                  )}
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800">{staff.name}</h5>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-md">{staff.title}</span>
                    <span className="text-xs text-gray-400 bg-gray-50 px-2 py-0.5 rounded-md">{staff.location}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button onClick={() => handleEdit(staff)} className="cursor-pointer text-sm font-bold text-gray-600 hover:bg-gray-100 py-2 px-4 rounded-lg hover:text-blue-600 transition-colors">Edit</button>
                <div className="h-4 w-px bg-gray-200"></div>
                <button onClick={() => handleDeleteClick(staff)} className="cursor-pointer text-sm font-bold text-red-500 hover:bg-red-100 py-2 px-4 rounded-lg hover:text-red-700 transition-colors">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-gray-900/40 backdrop-blur-[2px]">
          <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
              <h3 className="text-lg font-bold text-gray-800">{formData.id ? "Edit Staff Profile" : "Register New Staff"}</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-3xl text-gray-400 hover:text-gray-600 leading-none">&times;</button>
            </div>
            <form className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-5 max-h-[80vh] overflow-y-auto">
              <div className="sm:col-span-2 flex flex-col sm:flex-row items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                <div className="h-16 w-16 rounded-full border-2 border-white shadow-sm overflow-hidden bg-white flex items-center justify-center">
                  {formData.image ? (<img src={formData.image} className="w-full h-full object-cover" />) : (<span className="text-gray-300 text-[10px] text-center px-1">No Image</span>)}
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-gray-600 uppercase">Profile Photo</label>
                  <input type="file" accept="image/*" onChange={handleImageChange} className="text-xs file:mr-4 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-bold file:bg-white file:shadow-sm cursor-pointer" />
                </div>
              </div>
              <div className="flex flex-col gap-1.5"><label className="text-xs font-bold text-gray-600 uppercase tracking-wider ml-1">Full Name</label><input name="name" value={formData.name} onChange={handleChange} className="border border-gray-200 rounded-xl p-3 outline-none focus:border-blue-500 transition-all text-gray-800" placeholder="Staff Name" /></div>
              <div className="flex flex-col gap-1.5"><label className="text-xs font-bold text-gray-600 uppercase tracking-wider ml-1">Role / Job Title</label><input name="role" value={formData.role} onChange={handleChange} className="border border-gray-200 rounded-xl p-3 outline-none focus:border-blue-500 transition-all text-gray-800" placeholder="e.g. Support Specialist" /></div>
              <div className="flex flex-col gap-1.5"><label className="text-xs font-bold text-gray-600 uppercase tracking-wider ml-1">Location</label><select name="location" value={formData.location} onChange={handleChange} className="border border-gray-200 rounded-xl p-3 outline-none bg-white focus:border-blue-500 transition-all text-gray-800 appearance-none"><option value="JLT">JLT</option><option value="DownTown">DownTown</option></select></div>
              <div className="flex flex-col gap-1.5"><label className="text-xs font-bold text-gray-600 uppercase tracking-wider ml-1">Status</label><select name="status" value={formData.status} onChange={handleChange} className="border border-gray-200 rounded-xl p-3 outline-none bg-white focus:border-blue-500 transition-all text-gray-800 appearance-none"><option value="Active">Active</option><option value="On Leave">On Leave</option></select></div>
              <div className="sm:col-span-2 flex flex-col gap-1.5"><label className="text-xs font-bold text-gray-600 uppercase tracking-wider ml-1">Areas of Focus</label><input name="areasOfFocus" value={formData.areasOfFocus} onChange={handleChange} className="border border-gray-200 rounded-xl p-3 outline-none focus:border-blue-500 transition-all text-gray-800" placeholder="Customer Service, Booking, etc." /></div>
              <div className="sm:col-span-2 flex flex-col gap-1.5"><label className="text-xs font-bold text-gray-600 uppercase tracking-wider ml-1">About Staff</label><textarea name="about" value={formData.about} onChange={handleChange} rows="3" className="border border-gray-200 rounded-xl p-3 outline-none focus:border-blue-500 transition-all text-gray-800 resize-none" placeholder="Write a brief bio..." /></div>
              <div className="sm:col-span-2 flex justify-end gap-3 mt-4 border-t border-gray-50 pt-5">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-6 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-semibold hover:bg-gray-50 transition-colors">Discard</button>
                <button type="button" onClick={handleSave} className="px-6 py-2.5 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors shadow-sm shadow-blue-200">Save Profile</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isDeleteModalOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-gray-900/50">
          <div className="bg-white w-full max-sm:max-w-xs max-w-sm rounded-2xl p-8 text-center shadow-2xl border border-gray-100">
            <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-100">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800">Remove Staff</h3>
            <p className="text-sm text-gray-500 my-4 leading-relaxed">Are you sure you want to delete <span className="font-bold text-gray-700">"{staffToDelete?.name}"</span>?</p>
            <div className="flex gap-3">
              <button onClick={() => setIsDeleteModalOpen(false)} className="flex-1 py-3 rounded-xl border border-gray-200 text-gray-600 font-bold hover:bg-gray-50 transition-colors">Cancel</button>
              <button onClick={handleDelete} className="flex-1 py-3 rounded-xl bg-red-500 text-white font-bold hover:bg-red-600 transition-colors">Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}