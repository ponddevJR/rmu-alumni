
const Table = ({ thList, data, displayReccord, title, children }) => {
  return (
    <>
      <table className={`hidden lg:inline-table  mt-3 table-main w-full`}
      >
        <thead>
          <tr>
            {thList.map((item, index) => {
              return <th key={index}>{item}</th>;
            })}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </>
  );
};
export default Table;
