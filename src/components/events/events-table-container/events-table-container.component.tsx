import React, { FC, ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button,
  Grid,
} from '@material-ui/core';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { useStyles } from './events-table-container.styles';
import { CREATE_EVENT_URL } from '../../../constants/route.constants';
import { useGetEventsRequest } from '../../../hooks/graphql/events-request/events-request.hook';
import EventsTable from '../events-table/events-table.component';


const EventsTableContainer: FC = (props): ReactElement => {

  const classes = useStyles();
  const history = useHistory();

  const {
    getEventsAsync,
    events,
    loading,
    error,
  } = useGetEventsRequest();

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
            startIcon={<PersonAddIcon />}
            onClick={(e: React.MouseEvent) => {
              history.push(CREATE_EVENT_URL);
            }}
          >
            Create
          </Button>
        </Grid>
        <Grid item xs={12}>
          <EventsTable
            getEventsAsync={getEventsAsync}
            error={error}
            events={events}
            loading={loading}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default EventsTableContainer;
