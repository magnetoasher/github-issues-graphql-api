import React from "react";

const FilterInput = ({
  filterText,
  onFilter,
  onClear,
}: {
  filterText: string;
  onFilter: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
}) => {
  return (
    <React.Fragment>
      <input
        id="search"
        type="text"
        className="h-[32px] w-[200px] rounded-[3px] rounded-top-left-[5px] rounded-bottom-left-[5px] rounded-top-right-0 rounded-bottom-right-0 border border-[1px] border-[#e5e5e5] p-0 pr-[32px] pl-[16px] focus:outline-none"
        placeholder="Filter table data..."
        value={filterText}
        onChange={onFilter}
      />
      <button
        className="absolute bg-gray-300 h-[30px] w-[32px] text-center flex items-center justify-center"
        onClick={onClear}
      >
        X
      </button>
    </React.Fragment>
  );
};

export default FilterInput;
