import React, { useState } from "react";
import AdminLayout from "@/components/layouts/AdminLayout";
import { useRouter } from "next/router";
import Image from "next/image";
import {
  useDeleteBlogMutation,
  useDisplayChangeMutation,
  useGetAllBlogQuery,
} from "@/redux/api/blogApi/blogApi";
import { CalendarDays, Eye, EyeOff, PencilIcon, TrashIcon } from "lucide-react";
import { toast } from "react-toastify";
import ConfirmationModal from "@/components/shared/ConfirmationModal";

const BlogPage = () => {
  const { data: blogs, isLoading: blogLoading } = useGetAllBlogQuery(undefined);

  const router = useRouter();

  const handleAddBlog = () => {
    router.push("/admin/blog/add");
  };

  return (
    <AdminLayout>
      <div>
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Blog Posts</h1>

        {/* Add Blog Button */}
        <button
          onClick={handleAddBlog}
          className="mb-6 px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg shadow-md hover:bg-blue-600 transition"
        >
          Add Blog
        </button>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {blogLoading ? (
            <div>Loading...</div>
          ) : (
            blogs?.blogs?.map((blog: any, index: number) => (
              <BlogCard
                id={blog?.id}
                key={index}
                title={blog.title}
                description={blog.description}
                image={blog.image}
                date={blog.created_at}
                display={blog?.display}
                tags={blog.tags}
              />
            ))
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default BlogPage;

const BlogCard = ({
  id,
  title,
  description,
  image,
  date,
  tags,
  display,
}: any) => {
  const router = useRouter();
  const [deleteBlog, { isLoading: deleteLoading }] = useDeleteBlogMutation();
  const [changeDisplay] = useDisplayChangeMutation();
  const [isDeleteModal, setIsDeleteModal] = useState(false);

  const formattedDate = date
    ? new Date(date).toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "";

  const handleDisplay = async () => {
    const res: any = await changeDisplay({ id });
    if ("error" in res) {
      toast.error(res?.error?.data?.message || "Failed to toggle display!");
      return;
    }
    toast.success("Status updated!");
  };

  const handleDeleteClick = () => {
    setIsDeleteModal(true);
  };

  const handleCloseModal = () => {
    setIsDeleteModal(false);
  };

  const handleConfirmDelete = async () => {
    const res: any = await deleteBlog({ id });
    if ("error" in res) {
      toast.error(res?.error?.data?.message || "Failed to delete blog!");
      return;
    }
    toast.success("Blog deleted successfully!");
    setIsDeleteModal(false);
  };

  return (
    <>
      <div className="bg-white border border-gray-100 rounded-2xl shadow-xl overflow-hidden group transition-transform hover:-translate-y-1 hover:shadow-2xl relative">
        {/* Display badge */}
        <div className="absolute cursor-pointer top-3 right-3 z-10 flex flex-col items-end gap-1">
          <div onClick={handleDisplay}>
            {display === 1 ? (
              <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full shadow">
                <Eye className="w-4 h-4" /> Displayed
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 bg-red-100 text-red-600 text-xs font-semibold px-3 py-1 rounded-full shadow">
                <EyeOff className="w-4 h-4" /> Hidden
              </span>
            )}
          </div>
          <div className=" flex items-center gap-2">
            <button
              onClick={() => {
                router.push(`/admin/blog/update?id=${id}`);
              }}
              className=" bg-green-500 text-white p-2 rounded-full shadow-md hover:bg-green-600 transition"
            >
              <PencilIcon className="w-4 h-4" />
            </button>
            <button
              onClick={handleDeleteClick}
              className=" bg-red-500 text-white p-2 rounded-full shadow-md hover:bg-red-600 transition"
            >
              <TrashIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="relative">
          <Image
            width={400}
            height={240}
            src={image}
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {/* Overlay effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all" />
        </div>
        <div className="p-3 flex flex-col gap-2">
          <h3 className="text-lg font-bold text-gray-800 line-clamp-2">
            {title}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-3">
            {description.length > 100 ? description + "..." : description}
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag: any, idx: number) => (
              <span
                key={idx}
                className="inline-block bg-blue-100 text-blue-600 text-xs font-semibold px-2 py-1 rounded-full"
              >
                {tag?.title}
              </span>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-2">
            <span className="inline-flex items-center gap-1 bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">
              <CalendarDays className="w-4 h-4 text-blue-400" />
              {formattedDate}
            </span>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      <ConfirmationModal
        isOpen={isDeleteModal}
        onClose={handleCloseModal}
        onConfirm={handleConfirmDelete}
        loading={deleteLoading}
        title="Delete Blog"
        message="Are you sure you want to delete this blog? This action cannot be undone."
      />
    </>
  );
};
