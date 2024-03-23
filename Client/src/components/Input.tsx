import { useState } from "react";

const Input = () => {
  const [input, setInput] = useState<string>("");

  console.log(input);

  return (
    <>
      <div className="flex">
        <input
          className="w-80 outline-none px-2"
          type="text"
          onChange={(e) => setInput(e.target.value)}
        />
        <button className=" bg-sky-500 py-1 px-4 text-white font-semibold active:bg-sky-600 hover:bg-sky-400">
          Short
        </button>
      </div>
    </>
  );
};

export default Input;
