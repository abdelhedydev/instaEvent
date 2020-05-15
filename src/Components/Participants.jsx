/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { InputFile } from 'semantic-ui-react-input-file';
import {
  Table, Grid, Button, Icon, Modal, Form, Image, Header,
} from 'semantic-ui-react';
import Sidebar from './Sidebar';

const ParticipantForm = ({ trigger, setTrigger }) => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  // const [error, setError] = React.useState({ email: false, name: false });
  const [path, setPath] = React.useState('https://react.semantic-ui.com/images/avatar/large/matthew.png');
  function handleUpload(event) {
    const input = event.target;
    if (input.files && input.files[0]) {
      const reader = new FileReader();

      reader.onload = function (e) {
        setPath(e.target.result);
      };

      reader.readAsDataURL(input.files[0]);
    }
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
      <Modal.Header>Nouveau Participants</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Form>
            <Form.Field>
              <label >Nom de Participants</label>
              <Form.Input fluid value={name} onChange={(e) => setName(e.target.value)} placeholder="nom" />
            </Form.Field>
            <Form.Field>
              <label >Email de Participants</label>
              <Form.Input fluid type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" />
            </Form.Field>
            <Form.Field>
              <InputFile
                input={{
                  id: 'input-control-id',
                  onChange: handleUpload,
                }}
              />
              <Image src={path} size="small" />
            </Form.Field>
            <Button onClick={(e) => submitForm(e)} color="green" type="submit">Ajouter</Button>
          </Form>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

const Participants = () => {
  const [trigger, setTrigger] = React.useState(false);
  return (
    <Sidebar>
      <br />
      <br />
      <Grid>
        <Grid.Column floated="left" width={10}>
          <Header as="h2">Participants</Header>
        </Grid.Column>
        <Grid.Column floated="right" width={2}>
          <Button onClick={() => setTrigger(true)} color="twitter">
            <Icon name="users" />
            Ajouter
          </Button>
        </Grid.Column>
      </Grid>
      <ParticipantForm trigger={trigger} setTrigger={() => setTrigger(!trigger)} />
      <br />
      <Table striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Nom</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Image</Table.HeaderCell>
            <Table.HeaderCell>Actions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>John Lilki</Table.Cell>
            <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
            <Table.Cell>
              <Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" size="mini" circular />
            </Table.Cell>
            <Table.Cell>
              <Grid.Row>
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
export default Participants;
