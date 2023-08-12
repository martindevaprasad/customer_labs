import React, { useState } from "react";

const availableSchemas = [
  { label: "First Name", value: "first_name" },
  { label: "Last Name", value: "last_name" },
  { label: "Gender", value: "gender" },
  { label: "Age", value: "age" },
  { label: "Account Name", value: "account_name" },
  { label: "City", value: "city" },
  { label: "State", value: "state" },
];

const Newhome = () => {
  const [selectedSchema, setSelectedSchema] = useState(null);
  const [filteredAvailableSchemas, setFilteredAvailableSchemas] = useState(availableSchemas);
  const [selectedArray, setSelectedArray] = useState([]);

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    const newSelectedSchema = filteredAvailableSchemas.find(
      (option) => option.value === selectedValue
    ); //  get selected obj from availableSchemas
    setSelectedSchema(newSelectedSchema);
  };

  const handleAdd = () => {
    if (selectedSchema) {
      setSelectedArray([...selectedArray, selectedSchema]); // push selected option to new array
      // remove option from availableSchemas
      setFilteredAvailableSchemas(filteredAvailableSchemas.filter(option => option.value !== selectedSchema.value)); 
    //   setSelectedSchema(null)
    }
  };




  console.log(filteredAvailableSchemas);

  return (
    <div className="App">
      <>
        {selectedArray?.map((option, index) => (
          <div key={index}>
            <select
              className="custom-dropdown"
              value={selectedSchema ? selectedSchema.value : ""}
              onChange={handleChange}
            >
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            </select>
            <br />
          </div>
        ))}

        <br />
        <label>
          Select schema for the segment:
          <br />
          <select
            className="custom-dropdown"
            value={selectedSchema ? selectedSchema.value : ""}
            onChange={handleChange}
          >
            <option value="">Select a schema</option>
            {filteredAvailableSchemas.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <br />
        <br />
        <button onClick={handleAdd}>Add new schema</button>
      </>
    </div>
  );
};

export default Newhome;