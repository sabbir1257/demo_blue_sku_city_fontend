import AdminLayout from "@/components/layouts/AdminLayout";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { TagIcon, ImageIcon, FileTextIcon, ArrowLeftIcon } from "lucide-react";
import Image from "next/image";
import { toast } from "react-toastify";
import {
  useUpdataBlogMutation,
  useSingleBlogQuery,
} from "@/redux/api/blogApi/blogApi";

const UpdateBlogPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Fetch the blog by id
  const { data, isLoading } = useSingleBlogQuery(id, { skip: !id });
  const [updateBlog, { isLoading: updateLoading }] = useUpdataBlogMutation();

  const blogData = data?.blog;

  const [blog, setBlog] = useState({
    title: "",
    description: "",
    image: "",
    tags: "",
  });

  useEffect(() => {
    if (blogData) {
      setBlog({
        title: blogData.title || "",
        description: blogData.description || "",
        image: blogData.image || "",
        tags: blogData.tags
          ? blogData.tags.map((t: any) => t.title).join(", ")
          : "",
      });
    }
  }, [blogData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!blog.tags || !blog.title || !blog.description || !blog.image) {
      toast.error("Fill All Field");
      return;
    }
    const updatedBlog = {
      id,
      ...blog,
      tags: blog.tags.split(",").map((tag) => tag.trim()),
    };

    const res: any = await updateBlog(updatedBlog);

    if ("error" in res) {
      toast.error(res?.error?.data?.message || "Some Wrong!");
      return;
    }

    toast.success(res?.data?.message || "Blog Updated Successfully!");
    router.push("/admin/blog");
  };

  if (isLoading) {
    return (
      <AdminLayout>
        <div>Loading...</div>
      </AdminLayout>
    );
  }

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

        <h1 className="text-2xl font-bold text-gray-800 mb-6">Update Blog</h1>
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
                value={blog.title}
                onChange={(e) => setBlog({ ...blog, title: e.target.value })}
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
                value={blog.image}
                onChange={(e) => setBlog({ ...blog, image: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ImageIcon className="absolute right-3 top-3 w-5 h-5 text-gray-500" />
            </div>
            {/* Image Preview */}
            {blog.image && blog.image.startsWith("http") && (
              <div className="mt-3">
                <Image
                  width={1200}
                  height={240}
                  src={blog.image}
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
              value={blog.description}
              onChange={(e) =>
                setBlog({ ...blog, description: e.target.value })
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
                value={blog.tags}
                onChange={(e) => setBlog({ ...blog, tags: e.target.value })}
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
              disabled={updateLoading}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              {updateLoading ? "Updating..." : "Update Blog"}
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
};

export default UpdateBlogPage;
