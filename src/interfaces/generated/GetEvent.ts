/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserStatus, UserRole, LicenseType } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetEvent
// ====================================================

export interface GetEvent_getEvent_loads {
  __typename: "LoadModel";
  id: string;
  aircraft: string;
  date: any;
  status: string;
}

export interface GetEvent_getEvent_staff {
  __typename: "UserModel";
  id: string;
  status: UserStatus;
  firstName: string;
  lastName: string;
  email: string;
  roles: UserRole[];
  licenseType: LicenseType | null;
  createdAt: string;
  updatedAt: string;
}

export interface GetEvent_getEvent {
  __typename: "EventModel";
  id: string;
  name: string;
  date: any;
  notes: string;
  loads: GetEvent_getEvent_loads[];
  staff: GetEvent_getEvent_staff[];
}

export interface GetEvent_getStaff {
  __typename: "UserModel";
  id: string;
  status: UserStatus;
  firstName: string;
  lastName: string;
  email: string;
  roles: UserRole[];
  licenseType: LicenseType | null;
  createdAt: string;
  updatedAt: string;
}

export interface GetEvent {
  getEvent: GetEvent_getEvent | null;
  getStaff: GetEvent_getStaff[] | null;
}

export interface GetEventVariables {
  eventId: string;
}
