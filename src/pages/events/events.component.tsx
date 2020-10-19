import React, { FC, ReactElement } from 'react';
import Header from '../../components/layout/header/header.component';
import LeftMenu from '../../components/layout/left-menu/left-menu.component';
import { Content } from '../../components/layout/content/content.component';
import EventsTableContainer from '../../components/events/events-table-container/events-table-container.component';

const Events: FC = (props): ReactElement => {
  return (
    <>
      <Header />
      <LeftMenu />
      <Content>
        <EventsTableContainer />
      </Content>
    </>
  );
};

export default Events;
