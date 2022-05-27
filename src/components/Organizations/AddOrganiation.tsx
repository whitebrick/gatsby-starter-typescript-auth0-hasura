import React from "react";
import { useAddOrganization } from "../../controllers/Organizations";

// const postMutation = React.useCallback(() => {
//   executeMutation({ url, description }).then(() => {
//     props.history.push("/new/1");
//   });
// }, [url, description, executeMutation, props.history]
// });

const AddOrganization = () => {
  const [name, setName] = React.useState("");
  const [label, setLabel] = React.useState("");

  // const { organizations, loading } = useAddOrganization();

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
        <button class="btn btn-success">
          {/*<button disabled={state.fetching} onClick={postMutation}>*/}
          Add
        </button>
      </div>
    </div>
  );
};

export default AddOrganization;
