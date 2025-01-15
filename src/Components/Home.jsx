import React, { useState } from "react";
import UserCard from "./UserCard";

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
  const [editIndex, setEditIndex] = useState(null);

  const handleFormSubmit = () => {
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
    setShowForm(false);
  };

  const handleEdit = (index) => {
    setFormData(users[index]);
    setEditIndex(index);
    setShowForm(true);
  };

  const handleTextStyle = (style) => {
    document.body.style.fontFamily = style;
  };

  const themes = ["default", "dark", "contrast", "rainbow"];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-indigo-600 text-white py-4 px-6 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold">Directory App</h1>
        <div className="flex gap-4">
          <select
            className="px-4 py-2 rounded bg-white text-black"
            onChange={(e) => {
              const theme = e.target.value;
              document.body.setAttribute("data-theme", theme);

              switch (theme) {
                case "dark":
                  document.body.style.backgroundColor = "#121212";
                  document.body.style.color = "#ffffff";
                  break;
                case "contrast":
                  document.body.style.backgroundColor = "#ffefd5";
                  document.body.style.color = "#000000";
                  break;
                case "rainbow":
                  document.body.style.backgroundColor =
                    "linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)";
                  document.body.style.color = "#ffffff";
                  break;
                default:
                  document.body.style.backgroundColor = "#ffffff";
                  document.body.style.color = "#000000";
                  break;
              }
            }}
          >
            {themes.map((theme, i) => (
              <option key={i} value={theme}>
                {theme.charAt(0).toUpperCase() + theme.slice(1)}
              </option>
            ))}
          </select>

          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-green-500 px-4 py-2 rounded hover:bg-green-600"
          >
            {showForm ? "Close Form" : "Add New User"}
          </button>
        </div>
      </nav>

      {/* Text Styling Buttons */}
      <div className="p-4 flex gap-4 justify-center">
        <button
          className="bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-600"
          onClick={() => handleTextStyle("Arial, sans-serif")}
        >
          Sans-serif
        </button>
        <button
          className="bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-600"
          onClick={() => handleTextStyle("Georgia, serif")}
        >
          Serif
        </button>
        <button
          className="bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-600"
          onClick={() => handleTextStyle("monospace")}
        >
          Monospace
        </button>
        <button
          className="bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-600"
          onClick={() => handleTextStyle("cursive")}
        >
          Cursive
        </button>
      </div>

      {/* Main Section */}
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
                        Add
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
