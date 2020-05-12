/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components';
import places from 'places.js';
import {
  Table, Grid, Button, Icon, Modal, Form, TextArea, Dropdown,
} from 'semantic-ui-react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import Sidebar from './Sidebar';

const Wrapper = styled.div`
  width:100%;
  display: inline-flex;
  justify-content: space-between;
  .react-datepicker-wrapper{
    width:45%
  }

`;


const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
];

const EventForm = () => {
  const [startDate, setStartDate] = React.useState(new Date('2014/02/08'));
  const [endDate, setEndDate] = React.useState(new Date('2014/02/10'));
  const [particpants, setParticiants] = React.useState([{
    key: 1,
    text: 'abdelhedi.hlel@aa.fr',
    value: 1,
  }, {
    key: 2,
    text: 'ahmed.hlel@aa.fr',
    value: 2,
  }]);
  return (
    <Modal
      trigger={(
        <Button floated="right" color="twitter">
          <Icon name="calendar" />
          Ajouter
        </Button>
      )}
      centered={false}
    >
      <Modal.Header>Nouvelle Evenement</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Form>
            <Form.Field>
              <label>Titre</label>
              <input placeholder="First Name" />
            </Form.Field>
            <Form.Field>
              <label>Date de début et de fin</label>

              <Wrapper>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  timeCaption="time"
                  dateFormat="MMMM d, yyyy h:mm aa"
                />
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  timeCaption="time"
                  dateFormat="MMMM d, yyyy h:mm aa"
                />
              </Wrapper>
            </Form.Field>
            <Form.Field widths="equal">
              <Form.Select
                fluid
                label="Catégorie"
                options={options}
                placeholder="Catégorie"
              />
            </Form.Field>
            <Form.Field>
              <label>Particpants</label>
              <Dropdown
                placeholder="State"
                fluid
                multiple
                search
                selection
                options={particpants}
              />

            </Form.Field>
            <Form.Field>
              <label>Lieu</label>
              <input type="search" id="address-input" placeholder="Where are we going?" />

            </Form.Field>
            <Form.Field />
            <Form.Field
              control={TextArea}
              label="Description"
              placeholder="Tell us more about you..."
            />
            <Button color="green" type="submit">Submit</Button>
          </Form>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

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
