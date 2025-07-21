import AdminLayout from "@/components/layouts/AdminLayout";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { TagIcon, ImageIcon, FileTextIcon, ArrowLeftIcon } from "lucide-react";
import Image from "next/image";
import { toast } from "react-toastify";
import { useUploadBlogMutation } from "@/redux/api/blogApi/blogApi";

const AddBlogPage = () => {
  const [uploadBlog, { isLoading: uploadLoading }] = useUploadBlogMutation();
  const [newBlog, setNewBlog] = useState({
    title: "",
    description: "",
    image: "",
    tags: "",
  });

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !newBlog.tags ||
      !newBlog.title ||
      !newBlog.description ||
      !newBlog.image
    ) {
      toast.error("Fill All Field");
      return;
    }
    const blog = {
      ...newBlog,
      tags: newBlog.tags.split(",").map((tag) => tag.trim()),
    };

    const res: any = await uploadBlog(blog);

    if ("error" in res) {
      toast.error(res?.error?.data?.message || "Some Wrong!");
      return;
    }

    toast.success(res?.data?.message || "Blog Added Successfully!");
    router.push("/admin/blog");
  };

  return (
    <AdminLayout>
      <div>
        {/* Back Button */}
        <button
          onClick={() => router.push("/admin/blog")}
          className="flex items-center gap-2 mb-6 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
        >
          <ArrowLeftIcon className="w-5 h-5" />
          Back to Blog Page
        </button>

        <h1 className="text-2xl font-bold text-gray-800 mb-6">Add New Blog</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Blog Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Blog Title
            </label>
            <div className="relative">
              <input
                required
                type="text"
                placeholder="Enter blog title"
                value={newBlog.title}
                onChange={(e) =>
                  setNewBlog({ ...newBlog, title: e.target.value })
                }
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <FileTextIcon className="absolute right-3 top-3 w-5 h-5 text-gray-500" />
            </div>
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Image URL
            </label>
            <div className="relative">
              <input
                required
                type="text"
                placeholder="Enter image URL"
                value={newBlog.image}
                onChange={(e) =>
                  setNewBlog({ ...newBlog, image: e.target.value })
                }
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ImageIcon className="absolute right-3 top-3 w-5 h-5 text-gray-500" />
            </div>
            {/* Image Preview */}
            {newBlog.image && newBlog.image.startsWith("http") && (
              <div className="mt-3">
                <Image
                  width={1200}
                  height={240}
                  src={newBlog.image}
                  alt="Preview"
                  className="w-fit max-h-60 object-contain border rounded-lg shadow"
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
              </div>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              required
              placeholder="Enter blog description"
              value={newBlog.description}
              onChange={(e) =>
                setNewBlog({ ...newBlog, description: e.target.value })
              }
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tags (comma separated)
            </label>
            <div className="relative">
              <input
                required
                type="text"
                placeholder="Enter tags (e.g., coding, javascript)"
                value={newBlog.tags}
                onChange={(e) =>
                  setNewBlog({ ...newBlog, tags: e.target.value })
                }
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <TagIcon className="absolute right-3 top-3 w-5 h-5 text-gray-500" />
            </div>
          </div>
          {/* Buttons */}
          <div className="mt-6 flex justify-end gap-4">
            <button
              type="button"
              onClick={() => router.push("/admin/blog")}
              className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={uploadLoading}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              {uploadLoading ? "Loading..." : "Add Blog"}
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
};

export default AddBlogPage;
