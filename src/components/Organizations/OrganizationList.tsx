import React from "react";
import OrganizationItem from "./OrganizationItem";
import { useOrganizations } from "../../controllers/Organizations";
import { OrganizationItemType } from "../../types";

const OrganizationList = () => {
  const { organizations, loading } = useOrganizations();

  return (
    <div className="table-responsive">
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Label</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={2}>Loading...</td>
            </tr>
          ) : (
            organizations.map((organization: OrganizationItemType) => (
              <OrganizationItem
                organization={organization}
                key={organization.name}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default OrganizationList;
