import React, { FC, ReactElement } from 'react';
import { Redirect } from 'react-router-dom';
import { useUserFormValidation } from '../../hooks/user-form-validation/user-form-validation.hook';
import { useCreateUserRequest } from '../../hooks/create-user-request/create-user-request.hook';
import { url } from '../../constants/url';
import CommonUserForm from '../common-user-form/common-user-form.component';

interface PropTypes {
  children?: never,
}

const CreateUserForm: FC<PropTypes> = (props: PropTypes): ReactElement => {
  const {
    firstName,
    onFirstNameChange,
    hasFirstNameError,
    firstNameErrorMessage,
    lastName,
    onLastNameChange,
    hasLastNameError,
    lastNameErrorMessage,
    email,
    onEmailChange,
    hasEmailError,
    emailErrorMessage,
    licenseType,
    onLicenceTypeChange,
    role,
    onRoleChange,
    formTouched,
    saveButtonDisabled,
  } = useUserFormValidation();

  const {
    loading,
    createUserAsync,
    createUserData,
    errorMessage,
  } = useCreateUserRequest();

  if (createUserData) {
    return (<Redirect to={url.users} />);
  }

  return (
    <>
      <CommonUserForm
        title='Create'
        firstName={firstName}
        hasFirstNameError={hasFirstNameError}
        firstNameErrorMessage={firstNameErrorMessage}
        onFirstNameChange={onFirstNameChange}
        lastName={lastName}
        hasLastNameError={hasLastNameError}
        lastNameErrorMessage={lastNameErrorMessage}
        onLastNameChange={onLastNameChange}
        email={email}
        hasEmailError={hasEmailError}
        emailErrorMessage={emailErrorMessage}
        onEmailChange={onEmailChange}
        licenseType={licenseType}
        onLicenseTypeChange={onLicenceTypeChange}
        role={role}
        onRoleChange={onRoleChange}
        formTouched={formTouched}
        submitButtonDisabled={saveButtonDisabled}
        formErrorMessage={errorMessage}
        loading={loading}
        submitFn={() => {
          return createUserAsync(firstName, lastName, email, 'password', role, licenseType);
        }}
      />
    </>
  );
};

export default CreateUserForm;