import { useQuery, useMutation } from "urql";

const GET_ORGANIZATIONS = `
query get_organizations {
  organizations {
    name
    label
  }
}
`;

const ADD_ORGANIZATION = `
mutation add_organization($name: String!, $label: String!) {
  insert_organizations_one(
    object: {
      name: $name,
      label: $label
    }
  ){
    name,
    label
  }
}
`;

export const useOrganizations = () => {
  const [{ data, fetching }] = useQuery({
    query: GET_ORGANIZATIONS,
  });
  return {
    organizations: data?.organizations,
    loading: fetching,
  };
};

export const useAddOrganization = () => {
  const [state, executeMutation] = useMutation(ADD_ORGANIZATION);
  return {
    state,
    executeMutation,
  };
};
