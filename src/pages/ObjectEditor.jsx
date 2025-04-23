import React from "react";
import { useSearchParams } from "react-router";
import { OPTIONS } from "../utils/data";

const ObjectEditor = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const cornerRadius = searchParams.get("radius") || "rounded-full";
  const color = searchParams.get("color") || "red";
  const size = searchParams.get("size") || 200;

  const handleSizeChange = (e) => {
    setSearchParams((url) => ({
      ...Object.fromEntries(url),
      size: e.target.value,
    }));
  };

  const handleColorChange = (e) => {
    setSearchParams((url) => ({
      ...Object.fromEntries(url),
      color: e.target.value,
    }));
  };

  const handleCornerRadiusChange = (r) => {
    setSearchParams((url) => ({ ...Object.fromEntries(url), radius: r }));
  };

  return (
    <div className="w-full h-screen md:h-full flex flex-col md:flex-row">
      <div className="md:w-1/2 bg-gray-200 flex items-center justify-center h-full md:h-screen">
        <div
          className={`m-10 ${cornerRadius}`}
          style={{
            backgroundColor: color,
            width: size + "px",
            height: size + "px",
          }}
        ></div>
      </div>

      <div className="md:w-1/2 bg-gray-300 flex items-center justify-center p-10 h-full md:h-screen">
        <ul className="flex flex-col gap-5">
          <li className="flex items-center gap-5">
            <label htmlFor="size" className="font-bold min-w-[120px]">
              Size
            </label>
            {/* <input
              type="number"
              min={OPTIONS.size.min}
              max={OPTIONS.size.max}
              value={size}
              id="size"
              className="shadow-2xl rounded-md px-3 py-2 w-[120px] focus:bg-gray-200 outline-none appearance-none bg-white"
              onChange={handleSizeChange}
            /> */}
            <input
              type="range"
              id="size"
              min={OPTIONS.size.min}
              max={OPTIONS.size.max}
              value={size}
              step={1}
              className="w-48 cursor-pointer"
              onChange={handleSizeChange}
            />
          </li>

          <li className="flex gap-5 items-center">
            <label htmlFor="color" className="font-bold min-w-[120px]">
              Color
            </label>
            <select
              id="color"
              className="w-32 px-3 py-2 shadow-2xl rounded cursor-pointer bg-white
              hover:bg-gray-100 outline-none"
              onChange={handleColorChange}
              value={color}
            >
              {OPTIONS.color.map((color) => (
                <option key={color.value} value={color.value} className="py-2">
                  {color.label}
                </option>
              ))}
            </select>
          </li>

          <li className="flex gap-5 items-center justify-center">
            <label htmlFor="radius" className="font-bold min-w-[120px]">
              Corner Radius
            </label>
            <div className="flex flex-wrap gap-5">
              {OPTIONS.radius.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={`px-3 py-2 shadow-2xl rounded cursor-pointer hover:bg-blue-200 hover:text-black ${
                    cornerRadius === option.value
                      ? "bg-blue-500 text-white"
                      : "bg-white text-black"
                  }`}
                  onClick={() => handleCornerRadiusChange(option.value)}
                >
                  {option.value}
                </button>
              ))}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ObjectEditor;
