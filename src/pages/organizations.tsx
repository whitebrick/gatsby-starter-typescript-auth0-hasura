import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import OrganizationList from "../components/Organizations/OrganizationList";
import { Helmet } from "react-helmet";
import AddOrganization from "../components/Organizations/AddOrganiation";

const Organizations = () => {
  const { isAuthenticated, loginWithRedirect, logout, isLoading } = useAuth0();

  return (
    <>
      <Helmet>
        <title>Organizations</title>
      </Helmet>
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div className="pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Organizations</h1>
          {isLoading ? (
            <p>Loading... </p>
          ) : (
            <>
              {isAuthenticated ? (
                <>
                  <OrganizationList />
                  <AddOrganization />
                </>
              ) : (
                <button className="btn btn-light" onClick={() => loginWithRedirect()}>Log In</button>
              )}
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default Organizations;
