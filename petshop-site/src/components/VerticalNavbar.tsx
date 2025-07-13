type Props = {
  selected: string;
  onSelect: (category: string) => void;
};

export default function VerticalNav({ selected, onSelect }: Props) {
  return (
    <div className="flex flex-col gap-4 bg-white p-4 shadow-lg rounded-md h-fit">
      <button
        onClick={() => onSelect("banhos")}
        className={`px-4 py-2 rounded text-left ${
          selected === "banhos"
            ? "bg-pink-500 text-white"
            : "bg-gray-100 text-gray-800 hover:bg-gray-200"
        }`}
      >
        🛁 Banhos
      </button>
      <button
        onClick={() => onSelect("tosas")}
        className={`px-4 py-2 rounded text-left ${
          selected === "tosas"
            ? "bg-pink-500 text-white"
            : "bg-gray-100 text-gray-800 hover:bg-gray-200"
        }`}
      >
        ✂️ Tosas
      </button>
    </div>
  );
}
