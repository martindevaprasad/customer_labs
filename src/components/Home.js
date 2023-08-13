import React, { useState } from "react";
import "./style.css";
import { GetSegmentName } from "./GetSegmentName";
import { GetSelectedschema } from "./GetSelectedschema";
import { SchemaDropdown } from "./SchemaDropdown";

const availableSchemas = [
  { label: "First Name", value: "first_name" },
  { label: "Last Name", value: "last_name" },
  { label: "Gender", value: "gender" },
  { label: "Age", value: "age" },
  { label: "Account Name", value: "account_name" },
  { label: "City", value: "city" },
  { label: "State", value: "state" }
];

export const Home = () => {
  const [segmentName, setSegmentName] = useState("");
  const [selectedSchema, setSelectedSchema] = useState(null);
  const [filteredAvailableSchemas, setFilteredAvailableSchemas] =
    useState(availableSchemas);
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
      setFilteredAvailableSchemas(
        filteredAvailableSchemas.filter(
          (option) => option.value !== selectedSchema.value
        )
      );
     
    }
  };
  const handleRemove = (schemaToRemove) => {
    const removedSchema = selectedArray.find(
      (schema) => schema.id === schemaToRemove.id
    );
  
    const updatedSelectedArray = selectedArray.filter(
      (schema) => schema.id !== schemaToRemove.id
    );
  
    setSelectedArray(updatedSelectedArray);
  
   
    setFilteredAvailableSchemas([...filteredAvailableSchemas, removedSchema]);

   
  };



  console.log(filteredAvailableSchemas);
  const handleSegmentNameChange = (event) => {
    setSegmentName(event.target.value);
  };

  const handleSaveSegment = () => {
    const formattedvalue = selectedArray.map((schemaValue) => ({
      [schemaValue.value]: schemaValue.label
    }));
    const dataToSend = {
      segment_name: segmentName,
      schema: formattedvalue
    };

    const jsonData = JSON.stringify(dataToSend, null, 2);

    console.log(jsonData);

    setSegmentName("");
    setFilteredAvailableSchemas([]);
  };

  return (
    <div>
      <nav className=" appbar d-flex align-items-center">
        <svg
          className="mx-3"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <path
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="48"
            d="M328 112L184 256l144 144"
          />
        </svg>
        <p>View audience</p>
      </nav>
      <div>
        <button
          type="button"
          data-toggle="modal"
          data-target="#modal_aside_right"
          className="btn mx-5 mt-5 homebutton"
        >
          Save segment
        </button>
      </div>
      <div>
        <div
          id="modal_aside_right"
          class="modal fixed-left fade"
          // tabindex="-1"
          role="dialog"
        >
          <div class="modal-dialog modal-dialog-aside" role="document">
            <div class="modal-content">
              <div class="modal-header modalnav">
                <svg
                  className="mx-3"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 512 512"
                  style={{ cursor: "pointer" }}
                >
                  <path
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="48"
                    d="M328 112L184 256l144 144"
                  />
                </svg>

                <h5 class="modal-title">Saving segment</h5>
              </div>
              <div class="modal-body">
                <GetSegmentName
                  inputValue={segmentName}
                  onChangeHandler={handleSegmentNameChange}
                />

                <div>
                  <p>
                    To save your segment, you need to add the schemas to build
                    the query
                  </p>
                </div>
                <div className="mb-4 d-flex justify-content-end">
                  <label className="mx-2">
                    <input
                      style={{ accentColor: "#5ddb78" }}
                      type="radio"
                      value="option1"
                      checked={true}
                    />
                    - User traits
                  </label>
                  <label className="mx-2">
                    <input
                      style={{ accentColor: "#d24572" }}
                      type="radio"
                      value="option1"
                      checked={true}
                    />
                    - Group traits
                  </label>
                </div>
                <div className="mt-5">
                  <div>
                    {selectedArray?.map((option, index) => (
                      <div key={index} class="form-group">
                        {/* <label for="exampleFormControlSelect1">
                        Example select
                      </label> */}
                        <GetSelectedschema
                          selectedSchema={selectedSchema}
                          handleChange={handleChange}
                          option={option}
                          onClickhandler={handleRemove}
                        />
                      </div>
                    ))}
                  </div>
                  <div class="form-group">
                    {/* <label for="exampleFormControlSelect1">Example select</label> */}

                    <div class="form-group">
                      <SchemaDropdown
                        selectedSchema={selectedSchema}
                        handleChange={handleChange}
                        option={filteredAvailableSchemas.map(
                          (option) => option
                        )}
                      />
                    </div>
                  </div>
                </div>
                <button onClick={handleAdd} type="button" class="btn btn-link">
                  +Add new schema
                </button>
              </div>
              <div class="modal-footer">
                <button
                  onClick={handleSaveSegment}
                  type="button"
                  class="btn homebutton  mx-1"
                >
                  Save the segment
                </button>
                <button
                  type="button"
                  class="btn cancelbtn mx-2"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
