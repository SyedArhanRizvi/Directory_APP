// UserCard.js
import React from "react";
import "../index.css"

function UserCard({ user, users, setUsers, onEdit }) {
    const handleDelete = () => {
      const updatedUsers = users.filter((u) => u !== user);
      setUsers(updatedUsers);
      localStorage.setItem("users", JSON.stringify(updatedUsers));
    };
  
    return (
      <tr className="text-inherit">
        <td className="border px-4 py-2 text-black">{user.name}</td>
        <td className="border px-4 py-2 text-black">{user.dob}</td>
        <td className="border px-4 py-2 text-black">{user.aadhar}</td>
        <td className="border px-4 py-2 text-black">{user.mobile}</td>
        <td className="border px-4 py-2 text-black">{user.age}</td>
        <td className="border px-4 py-2 flex gap-2">
          <button
            className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
            onClick={onEdit}
          >
            Update
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            onClick={handleDelete}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
  
  
export default UserCard;
