import React, { useState } from "react";
import { Link } from "react-router-dom";

function FindUser({ users }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim() === "") {
      setFilteredUsers([]);
      return;
    }
    const lowerCaseQuery = query.toLowerCase();
    const filtered = users.filter(
      (user) =>
        user.name.toLowerCase().includes(lowerCaseQuery) ||
        user.aadhar.includes(lowerCaseQuery)
    );
    setFilteredUsers(filtered);
  };

  return (
    <div className="p-6 bg-gradient-to-r from-blue-500 to-indigo-600 min-h-screen flex flex-col items-center">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Find User
        </h3>
        <input
          type="text"
          placeholder="Search by Name or Aadhar"
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4"
        />
        {filteredUsers.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border px-4 py-2 text-left">Name</th>
                  <th className="border px-4 py-2 text-left">Date of Birth</th>
                  <th className="border px-4 py-2 text-left">Aadhar</th>
                  <th className="border px-4 py-2 text-left">Mobile</th>
                  <th className="border px-4 py-2 text-left">Age</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user, index) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0 ? "bg-gray-100" : "bg-white"
                    } hover:bg-indigo-100 transition`}
                  >
                    <td className="border px-4 py-2">{user.name}</td>
                    <td className="border px-4 py-2">{user.dob}</td>
                    <td className="border px-4 py-2">{user.aadhar}</td>
                    <td className="border px-4 py-2">{user.mobile}</td>
                    <td className="border px-4 py-2">{user.age}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-gray-600 text-center mt-4">
            {searchQuery
              ? "No matching users found."
              : "Start typing to search for users."}
          </p>
        )}
      </div>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 transition"
      >
        Back to Home
      </Link>
    </div>
  );
}

export default FindUser;
