import React, { FC, ReactElement } from 'react';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import {
  Scheduler,
  MonthView,
  Appointments,
  Toolbar,
  DateNavigator,
  TodayButton,
  AllDayPanel,
  AppointmentForm,
  AppointmentTooltip,
  ConfirmationDialog,
} from '@devexpress/dx-react-scheduler-material-ui';
import { ViewState, EditingState, IntegratedEditing } from '@devexpress/dx-react-scheduler';
import { ApolloQueryResult } from '@apollo/client';
import { Button, Grid, LinearProgress } from '@material-ui/core';
import { useRouter } from 'next/router';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import { Content } from '../../src/components/layout/content/content.component';
import { initializeApollo } from '../../src/http/graphql.client';
import { EventInterface, InitialEventsPropTypesInterface } from '../../src/interfaces/event.interface';
import { GetEvents, GetEventsVariables } from '../../src/interfaces/generated/GetEvents';
import { getEventsQuery } from '../../src/hooks/graphql/queries/get-events/get-events.query.hook';
import { useEvents } from '../../src/hooks/events/events/events.hook';
import Notification from '../../src/components/common/notification/notification.compontent';

const currentDate = new Date();

const AppointmentTooltipContent: React.ComponentType<AppointmentTooltip.ContentProps> = (
  {
    children,
    appointmentData,
    ...restProps
  }) => (
  <AppointmentTooltip.Content
    {...restProps}
    appointmentData={appointmentData}
  >
    <Grid container>
      <Grid item xs={12}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          startIcon={<FlightTakeoffIcon />}
          onClick={(e: React.MouseEvent) => {
            alert(appointmentData.id);
          }}
        >
          Manage Loads
        </Button>
      </Grid>
    </Grid>
  </AppointmentTooltip.Content>
);


const Events: FC<InitialEventsPropTypesInterface> = (props): ReactElement => {

  const router = useRouter();

  const {
    handleCommitChanges,
    schedulerErrorMessage,
    schedulerSuccessMessage,
    initialEventsLoadErrorMessage,
    isLoading,
    events,
  } = useEvents(props);


  return (
    <>
      <Content>
        <>
          <Notification
            hasNotification={initialEventsLoadErrorMessage !== null}
            message={initialEventsLoadErrorMessage}
            buttonTitle='Reload'
            buttonHandler={() => {
              window.location.href = router.pathname;
            }}
            type='error'
          />
          <Notification
            hasNotification={schedulerErrorMessage !== null}
            message={schedulerErrorMessage}
            autoHide={true}
            type='error'
          />
          <Notification
            hasNotification={schedulerSuccessMessage !== null}
            message={schedulerSuccessMessage}
            autoHide={true}
            type='success'
          />
          <Scheduler
            data={events}
          >
            {isLoading ? <LinearProgress /> : ''}
            <ViewState
              defaultCurrentDate={currentDate}
            />
            <MonthView />
            <Toolbar />
            <DateNavigator />
            <TodayButton />
            <Appointments />
            <AllDayPanel />
            <EditingState
              onCommitChanges={handleCommitChanges}
            />
            <IntegratedEditing />
            <AppointmentTooltip
              showOpenButton
              showDeleteButton
              contentComponent={AppointmentTooltipContent}
            />
            <AppointmentForm
              readOnly={isLoading}
            />
            <ConfirmationDialog />
          </Scheduler>
        </>
      </Content>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext<ParsedUrlQuery>) => {

  let initialEvents: EventInterface[] = [];
  let initialEventsLoadErrorMessage: string | null = null;
  const { accessToken } = context.req.cookies;
  if (accessToken) {
    const apolloClient = initializeApollo();
    try {
      const variables: GetEventsVariables = {
        getEventsFilter: {
          dateMin: null,
          dateMax: null,
        },
      };

      const result: ApolloQueryResult<GetEvents> = await apolloClient.query({
        query: getEventsQuery,
        context: {
          headers: {
            authorization: `Bearer ${accessToken} `,
          },
        },
        fetchPolicy: 'network-only',
        variables,
      });
      initialEvents = result.data.getEvents;
    } catch (e: unknown) {
      initialEventsLoadErrorMessage = (e as Error).message;
    }
  }

  return {
    props: {
      initialEvents,
      initialEventsLoadErrorMessage,
    },
  };
};

export default Events;

