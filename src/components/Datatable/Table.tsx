import React, { useState, useMemo } from "react";
import Datatable, { TableColumn } from "react-data-table-component";
import { DateTime } from "luxon";

import { IssuesData } from "../../ts-generalTypes/InitialInterfaces";
import FilterInput from "../Common/FilterInput";

const Table = ({ data }: { data: IssuesData }) => {
  const columns: TableColumn<IssuesData>[] = [
    {
      name: "Created At",
      selector: (row) =>
        DateTime.fromJSDate(new Date(row.createdAt)).toFormat("dd/MM/yyyy"),
      sortable: true,
      sortFunction: (a, b) => +a.createdAt - +b.createdAt,
      maxWidth: "200px",
    },
    {
      name: "Title",
      cell: (row) => (
        <a href={row.url} className="truncate hover:text-[#0073ff]">
          {row.title}
        </a>
      ),
      sortable: false,
      maxWidth: "800px",
    },
    {
      name: "Author",
      selector: (row) => row.author.login,
      sortable: true,
      maxWidth: "150px",
    },
    {
      name: "State",
      selector: (row) => row.state,
      sortable: false,
      maxWidth: "100px",
    },
    {
      name: "Action",
      cell: () => (
        <div className="flex justify-center items-center">
          <button
            type="button"
            className="px-2 py-2.5 mr-2 bg-blue-600 text-white font-medium text-xs uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            onClick={handleEditClick}
          >
            Edit
          </button>
          <button
            type="button"
            className="px-2 py-2.5 bg-red-600 text-white font-medium text-xs uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
            onClick={handleDeleteClick}
          >
            Delete
          </button>
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
      width: "250px",
    },
  ];

  const customStyles = {
    headCells: {
      style: {
        fontSize: "16px",
      },
    },
  };

  const handleEditClick = () => {
    alert("You clicked the Edit button");
  };

  const handleDeleteClick = () => {
    alert("You clicked the Delete button");
  };

  const [filterText, setFilterText] = useState<string>("");
  const [resetPaginationToggle, setResetPaginationToggle] =
    useState<boolean>(false);
  const filteredItems = Object.values(data)
    .filter(
      (item) =>
        JSON.stringify(item).toLowerCase().indexOf(filterText.toLowerCase()) !==
        -1
    )
    .map((item) => ({
      ...item,
      createdAt: DateTime.fromISO(item.createdAt).toJSDate(),
    }))
    .sort(function (a, b) {
      return +b.createdAt - +a.createdAt;
    });

  const subHeader = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <FilterInput
        onFilter={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFilterText(e.target.value)
        }
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  return (
    <Datatable
      columns={columns}
      data={filteredItems}
      customStyles={customStyles}
      pagination
      subHeader
      subHeaderComponent={subHeader}
    />
  );
};

export default Table;
