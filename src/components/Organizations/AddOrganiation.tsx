import React from "react";
import { useAddOrganization } from "../../controllers/Organizations";

const AddOrganization = () => {
  const { state, executeMutation } = useAddOrganization();

  const [name, setName] = React.useState("");
  const [label, setLabel] = React.useState("");

  const handleSubmit = () => {
    const variables = { name, label };
    executeMutation(variables).then((result) => {
      if (result.error) {
        console.log("executeMutation error:", result.error);
      }
      setName("");
      setLabel("");
    });
  };

  return (
    <div className="row">
      <div className="col-2">
        <input
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Organization Name"
        />
      </div>
      <div className="col-2">
        <input
          className="form-control"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          type="text"
          placeholder="Organization Label"
        />
      </div>
      <div className="col-2">
        <button
          className="btn btn-success"
          onClick={handleSubmit}
          disabled={state.fetching}
        >
          {!state.fetching ? "Add" : "Adding..."}
        </button>
      </div>
    </div>
  );
};

export default AddOrganization;
