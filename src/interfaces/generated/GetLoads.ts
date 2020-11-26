/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LoadStatus } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetLoads
// ====================================================

export interface GetLoads_getLoads_slots {
  __typename: "SlotModel";
  userId: number;
  description: string;
}

export interface GetLoads_getLoads {
  __typename: "LoadModel";
  id: number;
  status: LoadStatus;
  order: number;
  date: any;
  aircraft: string;
  notes: string | null;
  slots: GetLoads_getLoads_slots[];
}

export interface GetLoads {
  getLoads: GetLoads_getLoads[];
}

export interface GetLoadsVariables {
  eventId: number;
}
