/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetUser
// ====================================================

export interface GetUser_getUser {
  __typename: "UserModel";
  id: string;
  status: string;
  firstName: string;
  lastName: string;
  email: string;
  roles: string[];
  licenseType: string | null;
}

export interface GetUser {
  getUser: GetUser_getUser | null;
}

export interface GetUserVariables {
  input: string;
}
