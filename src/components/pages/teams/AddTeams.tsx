import React, { useState } from "react";
import Image from "next/image";
import { useCreateTeamMutation } from "@/redux/api/teamApi/teamApi";
import { toast } from "react-toastify";

interface AddTeamsProps {
  onClose: () => void;
}

const AddTeams: React.FC<AddTeamsProps> = ({ onClose }) => {
  const [createTeam, { isLoading: createLoading }] = useCreateTeamMutation();
  const [newUser, setNewUser] = useState({
    image: null as File | null,
    imagePreview: "",
    name: "",
    designation: "",
    board_of_director: false,
    executive: false,
    shareholder: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setNewUser((prev) => ({ ...prev, [name]: checked }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setNewUser((prev) => ({
        ...prev,
        image: file,
        imagePreview: URL.createObjectURL(file),
      }));
    }
  };

  const handleAddUser = async () => {
    const formData = new FormData();

    formData.append("name", newUser.name);
    formData.append("designation", newUser.designation);
    formData.append("board_of_director", newUser.board_of_director ? "1" : "0");
    formData.append("executive", newUser.executive ? "1" : "0");
    formData.append("shareholder", newUser.shareholder ? "1" : "0");

    if (newUser.image) {
      formData.append("image", newUser.image);
    }

    try {
      const res: any = await createTeam(formData);

      if ("error" in res) {
        toast.error(res.error.data?.message || "Something went wrong");
        return;
      }

      toast.success(res.data?.message || "Team member added successfully!");

      // Reset form
      setNewUser({
        image: null,
        imagePreview: "",
        name: "",
        designation: "",
        board_of_director: false,
        executive: false,
        shareholder: false,
      });

      onClose();
    } catch (error) {
      toast.error("An unexpected error occurred.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Add New User</h2>
        <div className="space-y-4">
          {/* Image */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              User Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {newUser.imagePreview && (
              <div className="mt-4">
                <Image
                  width={200}
                  height={200}
                  src={newUser.imagePreview}
                  alt="Preview"
                  className="w-40 h-48 object-cover rounded-lg border"
                />
              </div>
            )}
          </div>

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter user name"
              value={newUser.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Designation */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Designation
            </label>
            <input
              type="text"
              name="designation"
              placeholder="Enter designation"
              value={newUser.designation}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Roles */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Roles
            </label>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="board_of_director"
                  checked={newUser.board_of_director}
                  onChange={handleCheckboxChange}
                  className="form-checkbox"
                />
                Board of Director
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="executive"
                  checked={newUser.executive}
                  onChange={handleCheckboxChange}
                  className="form-checkbox"
                />
                Executive
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="shareholder"
                  checked={newUser.shareholder}
                  onChange={handleCheckboxChange}
                  className="form-checkbox"
                />
                Shareholder
              </label>
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="mt-6 flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleAddUser}
            disabled={createLoading}
            className={`px-4 py-2 rounded-lg text-white transition ${
              createLoading
                ? "bg-blue-300 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {createLoading ? "Adding..." : "Add User"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTeams;
