/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum ClientStatus {
  ACTIVE = "ACTIVE",
  PROCESSED = "PROCESSED",
  REFUSED = "REFUSED",
}

export enum ClientType {
  AS_A_PASSENGER = "AS_A_PASSENGER",
  STATIC_LINE = "STATIC_LINE",
  TANDEM = "TANDEM",
}

export enum Gender {
  FEMALE = "FEMALE",
  MALE = "MALE",
}

export enum LicenseType {
  A = "A",
  B = "B",
  C = "C",
  D = "D",
  NONE = "NONE",
}

export enum LoadStatus {
  ACTIVE = "ACTIVE",
  CANCELLED = "CANCELLED",
  DRAFT = "DRAFT",
  PROCESSED = "PROCESSED",
}

export enum MemberRole {
  ADMIN = "ADMIN",
  CAMERAMAN = "CAMERAMAN",
  COACH = "COACH",
  MANIFEST = "MANIFEST",
  PACKER = "PACKER",
  RIGGER = "RIGGER",
  SKYDIVER = "SKYDIVER",
  STUDENT = "STUDENT",
  TM = "TM",
}

export enum MemberStatus {
  ACTIVE = "ACTIVE",
  BLOCKED = "BLOCKED",
}

export enum PaymentStatus {
  NOT_PAID = "NOT_PAID",
  PAID = "PAID",
  REFUNDED = "REFUNDED",
}

export interface CreateClientInput {
  type: ClientType;
  status: ClientStatus;
  gender: Gender;
  age: number;
  firstName: string;
  lastName: string;
  email?: string | null;
  weight: number;
  phone: string;
  address: string;
  withHandCameraVideo: boolean;
  withCameraman: boolean;
  paymentStatus: PaymentStatus;
  tmId?: number | null;
  cameramanId?: number | null;
  notes?: string | null;
  certificate?: string | null;
}

export interface CreateEventInput {
  name: string;
  date: any;
  staffIds?: number[] | null;
  notes: string;
}

export interface CreateMemberInput {
  status: MemberStatus;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  roles: MemberRole[];
  licenseType: LicenseType;
}

export interface ForgotPasswordInput {
  email: string;
}

export interface GetClientsFilterInput {
  clientStatuses?: ClientStatus[] | null;
  paymentStatuses?: PaymentStatus[] | null;
  createdAtMin?: any | null;
  createdAtMax?: any | null;
}

export interface GetEventsFilterInput {
  dateMin?: any | null;
  dateMax?: any | null;
}

export interface GetMembersFilterInput {
  statuses?: MemberStatus[] | null;
  roles?: MemberRole[] | null;
}

export interface LoginInput {
  email: string;
  password: string;
}

export interface ResetPasswordInput {
  password: string;
  token: string;
}

export interface UpdateClientInput {
  id: number;
  type?: ClientType | null;
  status?: ClientStatus | null;
  gender?: Gender | null;
  age?: number | null;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  weight?: number | null;
  phone?: string | null;
  address?: string | null;
  withHandCameraVideo?: boolean | null;
  withCameraman?: boolean | null;
  paymentStatus?: PaymentStatus | null;
  tmId?: number | null;
  cameramanId?: number | null;
  processedAt?: any | null;
  notes?: string | null;
  certificate?: string | null;
}

export interface UpdateEventInput {
  id: number;
  name?: string | null;
  date?: any | null;
  staffIds?: number[] | null;
  notes?: string | null;
}

export interface UpdateMemberInput {
  status?: MemberStatus | null;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  password?: string | null;
  roles?: MemberRole[] | null;
  licenseType?: LicenseType | null;
  id: number;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
