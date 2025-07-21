import AdminLayout from "@/components/layouts/AdminLayout";
import ConfirmationModal from "@/components/shared/ConfirmationModal";
import {
  useDeleteGalleryImageMutation,
  useFeatureChangeStatusMutation,
  useGetAllGalleryImagesQuery,
  useHeroChangeStatusMutation,
  useUploadImagesMutation,
} from "@/redux/api/galleryApi/galleryApi";
import { CopyIcon, TrashIcon } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-toastify";

const GalleryPage = () => {
  const { data: gallery, isLoading: galleryLoading } =
    useGetAllGalleryImagesQuery(undefined);
  const [deleteImage, { isLoading: deleteLoading }] =
    useDeleteGalleryImageMutation();
  const [uploadImages, { isLoading }] = useUploadImagesMutation();
  const [toggleFeatured, { isLoading: featureLoading }] =
    useFeatureChangeStatusMutation();
  const [toggleHero, { isLoading: heroLoading }] =
    useHeroChangeStatusMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageToDelete, setImageToDelete] = useState<number | null>(null);
  const [filter, setFilter] = useState<"all" | "featured" | "hero">("all");

  // Filtered images based on selected filter
  const filteredImages =
    filter === "all"
      ? gallery?.images
      : gallery?.images.filter((img: any) =>
          filter === "featured" ? img.featured : img.hero
        );

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files) {
      const uploadedFiles = Array.from(event.target.files);
      const formData = new FormData();
      uploadedFiles.forEach((img) => {
        formData.append("images[]", img);
      });

      const res: any = await uploadImages(formData);

      if ("error" in res) {
        toast.error(res.error.data.message || "Something went wrong!");
        return;
      }
      toast.success(res.data.message);
    }
  };

  const openDeleteModal = (id: number) => {
    setImageToDelete(id);
    setIsModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (!imageToDelete) {
      toast.error("No Image Deleted");
      return;
    }
    const res: any = await deleteImage({
      id: imageToDelete,
    });
    if ("error" in res) {
      toast.error(res?.error?.data?.message || "Something went wrong!");
      return;
    }
    toast.success("Image Deleted Successfully");
    setImageToDelete(null);
    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setImageToDelete(null);
  };

  const handleCopyLink = (image: string) => {
    navigator.clipboard
      .writeText(image)
      .then(() => {
        toast.success("Image link copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  const handleToggleFeatured = async (id: number) => {
    const res: any = await toggleFeatured({ id });
    if ("error" in res) {
      toast.error(res?.error?.data?.message || "Failed to toggle featured!");
      return;
    }
    toast.success("Featured status updated!");
  };

  const handleToggleHero = async (id: number) => {
    const res: any = await toggleHero({ id });
    if ("error" in res) {
      toast.error(res?.error?.data?.message || "Failed to toggle hero!");
      return;
    }
    toast.success("Hero status updated!");
  };

  return (
    <AdminLayout>
      <div>
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Gallery Management
        </h1>

        {/* Filter Options */}
        <div className="mb-6 flex gap-3 items-center">
          <span className="font-medium text-gray-700">Filter:</span>
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-1 rounded-full border text-sm font-semibold transition
              ${
                filter === "all"
                  ? "bg-blue-500 text-white border-blue-600 shadow"
                  : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-blue-100"
              }
            `}
          >
            All
          </button>
          <button
            onClick={() => setFilter("featured")}
            className={`px-4 py-1 rounded-full border text-sm font-semibold transition
              ${
                filter === "featured"
                  ? "bg-blue-500 text-white border-green-600 shadow"
                  : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-green-100"
              }
            `}
          >
            Featured
          </button>
          <button
            onClick={() => setFilter("hero")}
            className={`px-4 py-1 rounded-full border text-sm font-semibold transition
              ${
                filter === "hero"
                  ? "bg-green-400 text-white border-yellow-500 shadow"
                  : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-yellow-100"
              }
            `}
          >
            Hero
          </button>
        </div>

        {/* Upload Section */}
        <div className="mb-6 flex items-center gap-4">
          <label
            htmlFor="image-upload"
            className="cursor-pointer px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg shadow-md hover:bg-blue-600 transition"
          >
            {isLoading ? "Loading..." : "Upload Images"}
          </label>
          <input
            disabled={isLoading}
            id="image-upload"
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
            className="hidden"
          />
          <p className="text-sm text-gray-500">
            Select multiple images to upload.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
          {galleryLoading ? (
            <div>Loading...</div>
          ) : filteredImages?.length === 0 ? (
            <div className="col-span-full text-center text-gray-400 py-10">
              No images found for this filter.
            </div>
          ) : (
            filteredImages?.map((image: any, index: number) => (
              <div
                key={index}
                className="relative bg-white border border-gray-100 rounded-2xl shadow-xl overflow-hidden group transition-transform hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="relative">
                  <Image
                    width={400}
                    height={300}
                    src={image.image_url}
                    alt={`Uploaded ${index}`}
                    className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Overlay Actions */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center gap-4">
                    <button
                      onClick={() => handleCopyLink(image.image_url)}
                      className="bg-blue-500 text-white p-2 rounded-full shadow-md hover:bg-blue-600 transition"
                      title="Copy Image Link"
                    >
                      <CopyIcon />
                    </button>
                    <button
                      onClick={() => openDeleteModal(image?.id)}
                      className="bg-red-500 text-white p-2 rounded-full shadow-md hover:bg-red-600 transition"
                      title="Delete Image"
                    >
                      <TrashIcon className="h-5 w-5" />
                    </button>
                  </div>
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    {image.featured ? (
                      <span className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full shadow">
                        Featured
                      </span>
                    ) : null}
                    {image.hero ? (
                      <span className="bg-green-400 text-white text-xs px-2 py-0.5 rounded-full shadow">
                        Hero
                      </span>
                    ) : null}
                  </div>
                </div>
                {/* Info & Actions */}
                <div className="p-4 flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">
                      ID: {image.id}
                    </span>
                    <span className="text-xs text-gray-400 truncate max-w-[120px]">
                      {image.image.split("/").pop()}
                    </span>
                  </div>
                  <div className="flex gap-2 mt-2">
                    {/* Toggle Featured */}
                    <button
                      disabled={featureLoading}
                      onClick={() => handleToggleFeatured(image.id)}
                      className={`flex-1 px-3 py-1 text-xs font-semibold rounded-full border transition
                        ${
                          image.featured
                            ? "bg-blue-500 text-white border-green-600 shadow"
                            : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-green-100"
                        }
                      `}
                    >
                      {image.featured
                        ? "Featured"
                        : featureLoading
                        ? "Loading..."
                        : "Mark Featured"}
                    </button>
                    {/* Toggle Hero */}
                    <button
                      disabled={heroLoading}
                      onClick={() => handleToggleHero(image.id)}
                      className={`flex-1 px-3 py-1 text-xs font-semibold rounded-full border transition
                        ${
                          image.hero
                            ? "bg-green-400 text-white border-yellow-500 shadow"
                            : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-yellow-100"
                        }
                      `}
                    >
                      {image.hero
                        ? "Hero"
                        : heroLoading
                        ? "Loading.."
                        : "Mark Hero"}
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Confirmation Modal */}
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmDelete}
        loading={deleteLoading}
        title="Delete Image"
        message="Are you sure you want to delete this image? This action cannot be undone."
      />
    </AdminLayout>
  );
};

export default GalleryPage;
