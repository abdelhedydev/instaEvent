/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components';
import places from 'places.js';
import {
  Table, Grid, Button, Icon, Modal, Form, TextArea, Dropdown, Header,
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

const EventForm = ({ trigger, setTrigger }) => {
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
  const [place, setPlace] = React.useState();

  function getPlaces(event) {
    const placesAutocomplete = places({
      appId: 'pl7S67C0RLLN',
      apiKey: '1e80c97215c82068df40ccb8c80ec717',
      container: document.querySelector('#address-input'),
    });
    placesAutocomplete.on('change', (e) => {
      event.textContent = e.suggestion.value;
    });
    placesAutocomplete.on('clear', () => {
      event.textContent = 'none';
    });
  }


  function submitForm(e) {
    e.preventDefault();
  }
  return (
    <Modal
      centered
      open={trigger}
      onClose={() => setTrigger()}
    >
      <Modal.Header>Nouvelle Événement</Modal.Header>
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
              <input type="search" value={place} onChange={(e) => getPlaces(e)} id="address-input" placeholder="Lieu d'evenement" />

            </Form.Field>
            <Form.Field />
            <Form.Field
              control={TextArea}
              label="Description"
              placeholder="Tell us more about you..."
            />
            <Button onClick={(e) => submitForm(e)} color="green" type="submit">Submit</Button>
          </Form>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};
const Events = () => {
  const [trigger, setTrigger] = React.useState(false);
  return (
    <Sidebar>
      <br />
      <br />
      <Grid>
        <Grid.Column floated="left" width={10}>
          <Header as="h2">Événements</Header>
        </Grid.Column>
        <Grid.Column floated="right" width={2}>
          <Button onClick={() => setTrigger(true)} color="twitter">
            <Icon name="calendar" />
            Ajouter
          </Button>
        </Grid.Column>
      </Grid>
      <EventForm trigger={trigger} setTrigger={() => setTrigger(!trigger)} />
      <br />
      <Table striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Titre</Table.HeaderCell>
            <Table.HeaderCell>Date de début</Table.HeaderCell>
            <Table.HeaderCell>Date de fin</Table.HeaderCell>
            <Table.HeaderCell>Lieu</Table.HeaderCell>
            <Table.HeaderCell>Actions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>John Lilki</Table.Cell>
            <Table.Cell>15/10/2020 08:00</Table.Cell>
            <Table.Cell>
              15/10/2020 18:00
            </Table.Cell>
            <Table.Cell>
              Tunis
            </Table.Cell>
            <Table.Cell>
              <Grid.Row>
                <Button color="blue" icon>
                  <Icon name="eye" />
                </Button>
                <Button color="grey" icon>
                  <Icon name="wrench" />
                </Button>
                <Button color="red" icon>
                  <Icon name="trash" />
                </Button>

              </Grid.Row>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Sidebar>
  );
};
export default Events;
