import React from "react"
import { OrganizationItemType } from "../../types"

interface Props {
  organization: OrganizationItemType
}

const OrganizationItem: React.FC<Props> = ({ organization: { name, label } }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{label}</td>
    </tr>
  );
}

export default OrganizationItem
