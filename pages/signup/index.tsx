import React, { FC, ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Content } from '../../src/components/layout/content/content.component';


const SignUp: FC = (props): ReactElement => {

  const dispatch = useDispatch();

  return (
    <>
      <Content>
        History
      </Content>
    </>
  );
};

export async function getServerSideProps(context) {

  // Pass data to the page via props
  return { props: {} };
}

export default SignUp;

