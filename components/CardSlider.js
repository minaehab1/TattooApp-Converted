import Image from 'next/image';

export default function CardSlider({ items }) {
  return (
    <div className="flex space-x-4 overflow-x-auto pb-4">
      {items.map((item, index) => (
        <div key={index} className="flex-shrink-0 w-64">
          <Image
            src={item.image}
            alt={item.title}
            width={256}
            height={150}
            className="rounded-lg mb-2"
          />
          <h4 className="font-semibold">{item.title}</h4>
          <p className="text-sm text-gray-600">{item.description}</p>
        </div>
      ))}
    </div>
  );
}