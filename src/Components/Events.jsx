import React from 'react';
import {
  Table, Grid, Button, Icon, Modal, Header,
} from 'semantic-ui-react';
import Sidebar from './Sidebar';


const EventForm = () => (
  <Modal
    trigger={(
      <Button floated="right" color="twitter">
        <Icon name="calendar" />
        Ajouter
      </Button>
)}
    centered={false}
  >
    <Modal.Header>Nouveau Evenement</Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <Header>Default Profile Image</Header>
        <p>
          Don&apos;t forgert Drop down : Multiple Search Selection
          Adresse: city api
        </p>
        <p>Is it okay to use this photo?</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

const Events = () => (
  <Sidebar>
    <Grid.Row>
      <EventForm />
    </Grid.Row>
    <br />
    <br />
    <Table striped>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Date Joined</Table.HeaderCell>
          <Table.HeaderCell>E-mail</Table.HeaderCell>
          <Table.HeaderCell>Called</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>John Lilki</Table.Cell>
          <Table.Cell>September 14, 2013</Table.Cell>
          <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
          <Table.Cell>No</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Jamie Harington</Table.Cell>
          <Table.Cell>January 11, 2014</Table.Cell>
          <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
          <Table.Cell>Yes</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Jill Lewis</Table.Cell>
          <Table.Cell>May 11, 2014</Table.Cell>
          <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
          <Table.Cell>Yes</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>John Lilki</Table.Cell>
          <Table.Cell>September 14, 2013</Table.Cell>
          <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
          <Table.Cell>No</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>John Lilki</Table.Cell>
          <Table.Cell>September 14, 2013</Table.Cell>
          <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
          <Table.Cell>No</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Jamie Harington</Table.Cell>
          <Table.Cell>January 11, 2014</Table.Cell>
          <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
          <Table.Cell>Yes</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Jill Lewis</Table.Cell>
          <Table.Cell>May 11, 2014</Table.Cell>
          <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
          <Table.Cell>Yes</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>John Lilki</Table.Cell>
          <Table.Cell>September 14, 2013</Table.Cell>
          <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
          <Table.Cell>No</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </Sidebar>
);
export default Events;
