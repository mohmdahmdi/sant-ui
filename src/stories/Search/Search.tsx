import React from "react";
import clsx from "clsx";
import SearchIcon from "../../assets/svg/SearchIcon";

interface IProps {
  placeHolder: string;
  className?: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<IProps> = ({
  placeHolder,
  className,
  value,
  onChange,
}) => {
  return (
    <div
      className={clsx(
        "flex items-center gap-2 rounded-xl border border-neutral-300 px-3 py-2",
        className
      )}
    >
      <SearchIcon className=""/>
      <input
        type="text"
        placeholder={placeHolder}
        value={value}
        onChange={onChange}
        className="w-full bg-transparent outline-none placeholder-gray-400 text-sm border-0"
      />
    </div>
  );
};

export default Search;
