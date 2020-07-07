import React, { FC, ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getCurrentUser } from '../../redux/auth/auth.selector';
import { url } from '../../constants/url';
import { IRootState } from '../../redux/root.reducer';
import ResetPasswordForm from '../../components/reset-password-form/reset-password-form.component';

const ResetPassword: FC = (props): ReactElement => {
  const isLogged = useSelector((state: IRootState) => getCurrentUser(state));

  if (isLogged) {
    return (
      <Redirect to={url.dashboard} />
    );
  }
  return (
    <>
      <ResetPasswordForm />
    </>
  );

};

export default ResetPassword;