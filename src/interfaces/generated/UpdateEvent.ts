/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UpdateEventInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateEvent
// ====================================================

export interface UpdateEvent_updateEvent {
  __typename: "EventModel";
  id: number;
  title: string;
  startDate: any;
  endDate: any;
  notes: string;
}

export interface UpdateEvent {
  updateEvent: UpdateEvent_updateEvent;
}

export interface UpdateEventVariables {
  event: UpdateEventInput;
}
