import AdminLayout from "@/components/layouts/AdminLayout";
import Image from "next/image";
import React, { useState } from "react";
import {
  UserPlusIcon,
  SearchIcon,
  FilterIcon,
  TrashIcon,
  PencilIcon,
} from "lucide-react";
import AddTeams from "@/components/pages/teams/AddTeams";
import {
  useDeleteTeamMembersMutation,
  useGetAllTeamQuery,
} from "@/redux/api/teamApi/teamApi";
import ConfirmationModal from "@/components/shared/ConfirmationModal";
import UpdateTeams from "@/components/pages/teams/UpdateTeams";

const TeamsPage = () => {
  const { data, isLoading: teamLoading } = useGetAllTeamQuery(undefined);
  const [deleteTeam, { isLoading: deleteLoading }] =
    useDeleteTeamMembersMutation();

  const users = data?.teams;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [filterRole, setFilterRole] = useState("");
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [singleTeam, setSingleTeam] = useState<any>(null);

  const filteredUsers = users?.filter((user: any) => {
    const matchesSearch = user.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesRole =
      !filterRole ||
      (filterRole === "Board of Director" && user.board_of_director) ||
      (filterRole === "Executive" && user.executive) ||
      (filterRole === "Shareholder" && user.shareholder);

    return matchesSearch && matchesRole;
  });

  const handleDeleteClick = (id: number) => {
    setSelectedUserId(id);
    setIsDeleteModal(true);
  };

  const handleCloseModal = () => {
    setIsDeleteModal(false);
    setSelectedUserId(null);
  };

  const handleConfirmDelete = async () => {
    if (selectedUserId !== null) {
      await deleteTeam({ id: selectedUserId });
      handleCloseModal();
    }
  };

  const handleEdit = (user: any) => {
    setSingleTeam(user);
    setIsModalUpdateOpen(true);
  };

  return (
    <AdminLayout>
      <div>
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Teams</h1>

        {/* Add User Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="mb-6 flex items-center gap-2 px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg shadow-md hover:bg-blue-600 transition"
        >
          <UserPlusIcon className="w-5 h-5" />
          Add User
        </button>

        {/* Search and Filter */}
        <div className="mb-6 flex justify-between items-center gap-4">
          <div className="relative w-full max-w-sm">
            <input
              type="text"
              placeholder="Search by name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <SearchIcon className="absolute right-3 top-3 w-5 h-5 text-gray-500" />
          </div>

          <div className="relative w-[400px]">
            <select
              value={filterRole}
              onChange={(e) => setFilterRole(e.target.value)}
              className="px-4 w-full py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All roles</option>
              <option value="Board of Director">Board of Director</option>
              <option value="Executive">Executive</option>
              <option value="Shareholder">Shareholder</option>
            </select>
            <FilterIcon className="absolute right-4 top-3 w-5 h-5 text-gray-500" />
          </div>
        </div>

        {/* User List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {teamLoading ? (
            <div>Loading...</div>
          ) : (
            filteredUsers.map((user: any) => (
              <div
                key={user.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden relative hover:shadow-xl transition-shadow duration-300"
              >
                {user.image && (
                  <Image
                    width={200}
                    height={200}
                    src={user.image_url}
                    alt={user.name}
                    className="w-full h-56 object-cover"
                  />
                )}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 truncate">
                    {user.name}
                  </h3>
                  <p className="text-sm text-gray-600">{user.designation}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {user.board_of_director ? (
                      <span className="inline-block bg-blue-100 text-blue-500 text-xs font-medium px-2 py-1 rounded-full">
                        Board of Director
                      </span>
                    ) : (
                      ""
                    )}
                    {user.executive ? (
                      <span className="inline-block bg-green-100 text-green-500 text-xs font-medium px-2 py-1 rounded-full">
                        Executive
                      </span>
                    ) : (
                      ""
                    )}
                    {user.shareholder ? (
                      <span className="inline-block bg-yellow-100 text-yellow-500 text-xs font-medium px-2 py-1 rounded-full">
                        Shareholder
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                </div>

                <div className="absolute top-2 right-2 flex items-center gap-2">
                  <button
                    onClick={() => handleEdit(user)}
                    className=" bg-green-500 text-white p-2 rounded-full shadow-md hover:bg-green-600 transition"
                  >
                    <PencilIcon className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDeleteClick(user.id)}
                    className=" bg-red-500 text-white p-2 rounded-full shadow-md hover:bg-red-600 transition"
                  >
                    <TrashIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Add User Modal */}
        {isModalOpen && <AddTeams onClose={() => setIsModalOpen(false)} />}

        {/* Update User Modal  */}
        {isModalUpdateOpen && (
          <UpdateTeams
            user={singleTeam}
            onClose={() => setIsModalUpdateOpen(false)}
          />
        )}
      </div>

      {/* Confirmation Modal */}
      <ConfirmationModal
        isOpen={isDeleteModal}
        onClose={handleCloseModal}
        onConfirm={handleConfirmDelete}
        loading={deleteLoading}
        title="Delete Image"
        message="Are you sure you want to delete this image? This action cannot be undone."
      />
    </AdminLayout>
  );
};

export default TeamsPage;
