import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { loader } from 'graphql.macro';
import { useSelector } from 'react-redux';
import { useGraphQlErrorHandler } from '../grahhql-error-handler/grahpql-error-handler.hook';
import { UpdateUser, UpdateUserVariables } from '../../../interfaces/generated/UpdateUser';
import { IRootState } from '../../../redux/root.reducer';
import { getAccessToken } from '../../../redux/auth/auth.selector';

const updateUserMutation = loader('./gql/mutationUpdateUser.graphql');

export const useUpdateUserRequest = () => {

  const accessToken = useSelector((state: IRootState) => getAccessToken(state));
  const { getFormattedErrorMessage } = useGraphQlErrorHandler();

  const [errorMessage, setErrorMessage] = useState('');
  const [_updateUserAsync, { loading, data }] = useMutation<UpdateUser, UpdateUserVariables>(updateUserMutation, {
    context: {
      headers: {
        authorization: `Bearer ${accessToken} `,
      },
    },
  });


  const updateUserAsync = async (
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string | null,
    role: string,
    licenseType: string,
  ): Promise<void> => {
    try {
      const variables: UpdateUserVariables = {
        input: {
          id,
          firstName,
          lastName,
          email,
          password,
          role,
          licenseType,
        },
      };
      setErrorMessage('');
      await _updateUserAsync({
        variables,
      });
    } catch (e) {
      const formattedErrorMessage = getFormattedErrorMessage(e);
      setErrorMessage(formattedErrorMessage);
    }
  };

  return {
    loading,
    updateUserAsync,
    updatedUserData: data,
    updateErrorMessage: errorMessage,
  };
};