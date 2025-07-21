import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface Post {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

const CategoryList = () => {
  const router = useRouter();
  const currentCategory = router.query.category;
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("/datas/blog/Category.json");
        const data: Post[] = await res.json(); // array of posts

        // Extract unique categories
        const uniqueCategories = Array.from(
          new Set(data.map((post) => post.category))
        );

        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Failed to fetch categories", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) return <p className="text-sm text-gray-500 px-6">Loading categories...</p>;

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Category</h2>
      <div className="flex flex-wrap gap-6">
        {categories.map((cat) => {
          const isActive = currentCategory === cat;

          return (
            <Link key={cat} href={`/blog/category/${cat}`}>
              <span
                className={`cursor-pointer px-4 py-2 rounded-md shadow-sm capitalize transition-all duration-200 border
                  ${
                    isActive
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-blue-600 hover:text-white"
                  }`}
              >
                {cat.replace("-", " ")}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryList;