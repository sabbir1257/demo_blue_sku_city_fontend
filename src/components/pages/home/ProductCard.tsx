import Image from 'next/image';

type ProductCardProps = {
  image: string;
  title: string;
  color: 'blue' | 'green' | 'purple';
  description: string;
};

export default function ProductCard({ image, title, color, description }: ProductCardProps) {
  // Map color prop to Tailwind classes
  const colorTextClass = {
    blue: 'text-blue-500',
    green: 'text-green-500',
    purple: 'text-purple-500',
  };

  return (
    <div className="bg-white shadow-lg rounded-xl transform transition-all hover:scale-105 hover:shadow-2xl">
      <Image
        src={image}
        alt={title}
        width={400}   
        height={300}
        className="w-full object-cover rounded-t-xl"
      />
      <div className="p-6">
        <h3 className={`text-2xl font-semibold mb-2 ${colorTextClass[color]}`}>
          {title}
        </h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
}