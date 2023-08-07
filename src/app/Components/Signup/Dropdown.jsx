import React from "react";
import Select from "react-select";

export default function Dropdown() {
  const options = [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
    { label: "Other", value: "Other" },
  ];
  return (
    <div className="h-[50px]">
      <Select
        className="basic-single   mt-2"
        classNamePrefix="select"
        name="Select"
        isClearable={false}
        isSearchable={false}
        label="Gender"
        options={options}
        placeholder="Gender"
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            borderColor: state.isFocused ? "grey" : "black",
          }),
        }}
      />
    </div>
  );
}
