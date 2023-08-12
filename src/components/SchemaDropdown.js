export const SchemaDropdown = (props) => {
  const { selectedSchema, handleChange, option } = props;


  return (
    <>
      {/* {option.map((item,index)=>(
      <div key={item.value}>
        <p>{item.label}</p>
      </div>
    ))} */}
      <div className="d-flex">
        <input
          className="mx-2"
          style={{ accentColor: "#e2e4e6" }}
          type="radio"
          value="option1"
          checked={true}
        />
        <select
          value={selectedSchema ? selectedSchema.value : ""}
          onChange={handleChange}
          className="form-control"
          id="exampleFormControlSelect1"
        >
          <option value=""><em>Add schema to segment</em></option>
          {option.map((item) => (
            <>
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            </>
          ))}
        </select>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 1024 1024"
        >
          <path
            fill="#f2fbf9"
            d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"
          />
          <path
            fill="#f2fbf9"
            fill-opacity=".15"
            d="M184 840h656V184H184v656zm136-352c0-4.4 3.6-8 8-8h368c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8H328c-4.4 0-8-3.6-8-8v-48z"
          />
          <path
            fill="currentColor"
            d="M328 544h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"
          />
        </svg>
      </div>
    </>
  );
};
