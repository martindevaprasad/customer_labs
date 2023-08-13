export const GetSelectedschema = (props) => {
  const { selectedSchema, handleChange, option,onClickhandler } = props;

  return (
    <div className="d-flex">
      <input
        className="mx-2"
        style={{ accentColor: "#d24572" }}
        type="radio"
        value="option1"
        checked={true}
      />
      <select
        value={selectedSchema ? selectedSchema.value : ""}
        onChange={handleChange}
        class="form-control"
        id="exampleFormControlSelect1"
      >
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      </select>

      <svg
      onClick={onClickhandler}
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
  );
};
