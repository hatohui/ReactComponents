import React from "react";

type GenericTableProps<T extends Record<string, unknown>> = {
  data: T[];
};

const GenericTable = <T extends Record<string, unknown>>({
  data,
}: GenericTableProps<T>) => {
  if (data.length === 0) return <p>No data available</p>;

  const headers = Object.keys(data[0]) as (keyof T)[];

  return (
    <table className="table-auto border-collapse border border-gray-300 w-full text-left">
      <thead>
        <tr className="bg-gray-100">
          {headers.map((header) => (
            <th
              key={header as string}
              className="border border-gray-300 px-4 py-2"
            >
              {header.toString().charAt(0).toUpperCase() +
                header.toString().slice(1)}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((each, i) => (
          <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
            {headers.map((key) => (
              <td
                key={key as string}
                className="border border-gray-300 px-4 py-2"
              >
                {each[key] as React.ReactNode}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default GenericTable;
