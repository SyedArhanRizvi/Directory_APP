import React, { useState } from "react";
import UserCard from "./UserCard";
import { Link } from "react-router";

function Home() {
  const [showForm, setShowForm] = useState(false);
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    aadhar: "",
    mobile: "",
  });
  const [errors, setErrors] = useState({});
  const [editIndex, setEditIndex] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.dob) newErrors.dob = "Date of Birth is required.";
    if (!formData.aadhar) newErrors.aadhar = "Aadhar is required.";
    if (!formData.mobile) newErrors.mobile = "Mobile number is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = () => {
    if (!validateForm()) return;

    const age = new Date().getFullYear() - new Date(formData.dob).getFullYear();

    const newUser = { ...formData, age };
    const updatedUsers = [...users];

    if (editIndex !== null) {
      updatedUsers[editIndex] = newUser;
      setEditIndex(null);
    } else {
      updatedUsers.push(newUser);
    }

    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setFormData({ name: "", dob: "", aadhar: "", mobile: "" });
    setErrors({});
    setShowForm(false);
  };

  const handleEdit = (index) => {
    setFormData(users[index]);
    setEditIndex(index);
    setShowForm(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-indigo-600 text-white py-4 px-6 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold">Directory App</h1>
        <div className="flex gap-4">
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-green-500 px-4 py-2 rounded hover:bg-green-600"
          >
            {showForm ? "Close Form" : "Add New User"}
          </button>
          <div className="flex justify-center items-center">
            <Link
              to={"/find-user"}
              className=" px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 hover:shadow-lg transition-all duration-300 font-semibold"
            >
              Retrieve User Info
            </Link>
          </div>
        </div>
      </nav>

      <main className="p-6">
        <div className="bg-white shadow-lg rounded p-6">
          <h2 className="text-xl font-semibold mb-4">User Directory</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse border border-gray-300">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border px-4 py-2 text-black">Name</th>
                  <th className="border px-4 py-2 text-black">Date of Birth</th>
                  <th className="border px-4 py-2 text-black">Aadhar</th>
                  <th className="border px-4 py-2 text-black">Mobile</th>
                  <th className="border px-4 py-2 text-black">Age</th>
                  <th className="border px-4 py-2 text-black">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <UserCard
                    key={index}
                    user={user}
                    users={users}
                    setUsers={setUsers}
                    onEdit={() => handleEdit(index)}
                  />
                ))}
                {showForm && (
                  <tr>
                    <td className="border px-4 py-2">
                      <input
                        type="text"
                        placeholder="Name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full border rounded p-2"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm">{errors.name}</p>
                      )}
                    </td>
                    <td className="border px-4 py-2">
                      <input
                        type="date"
                        value={formData.dob}
                        onChange={(e) =>
                          setFormData({ ...formData, dob: e.target.value })
                        }
                        className="w-full border rounded p-2"
                      />
                      {errors.dob && (
                        <p className="text-red-500 text-sm">{errors.dob}</p>
                      )}
                    </td>
                    <td className="border px-4 py-2">
                      <input
                        type="text"
                        placeholder="Aadhar"
                        value={formData.aadhar}
                        onChange={(e) =>
                          setFormData({ ...formData, aadhar: e.target.value })
                        }
                        className="w-full border rounded p-2"
                      />
                      {errors.aadhar && (
                        <p className="text-red-500 text-sm">{errors.aadhar}</p>
                      )}
                    </td>
                    <td className="border px-4 py-2">
                      <input
                        type="text"
                        placeholder="Mobile"
                        value={formData.mobile}
                        onChange={(e) =>
                          setFormData({ ...formData, mobile: e.target.value })
                        }
                        className="w-full border rounded p-2"
                      />
                      {errors.mobile && (
                        <p className="text-red-500 text-sm">{errors.mobile}</p>
                      )}
                    </td>
                    <td className="border px-4 py-2 text-center">
                      {formData.dob
                        ? new Date().getFullYear() -
                          new Date(formData.dob).getFullYear()
                        : "-"}
                    </td>
                    <td className="border px-4 py-2 text-center">
                      <button
                        onClick={handleFormSubmit}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                      >
                        {editIndex !== null ? "Update" : "Add"}
                      </button>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
