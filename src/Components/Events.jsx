import React from "react";
import {
  Table,
  Grid,
  Button,
  Icon,
  Header,
  Loader,
  List,
} from "semantic-ui-react";
import dateformat from "dateformat";
import "react-datepicker/dist/react-datepicker.css";
import Sidebar from "./Sidebar";
import EventForm from "./EventForm";
import { getEvents, deleteEvent } from "../api";

dateformat.i18n = {
  dayNames: [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
  ],
  monthNames: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Aout",
    "Septembre",
    "Octobre",
    "Nouvembre",
    "Décembre",
  ],
  timeNames: ["a", "p", "am", "pm", "A", "P", "AM", "PM"],
};

const Events = () => {
  const [trigger, setTrigger] = React.useState(false);
  const [events, setEvents] = React.useState([]);
  const [elm, setElm] = React.useState();
  const [loading, setLoading] = React.useState(true);
  const fetchData = async () => {
    setLoading(true);
    const result = await getEvents();
    setEvents(result.data);
    setLoading(false);
  };
  React.useEffect(() => {
    fetchData();
  }, []);
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
      <EventForm
        trigger={trigger}
        setTrigger={() => setTrigger(!trigger)}
        event={elm}
        fetchData={() => fetchData()}
      />
      <br />
      {loading ? (
        <Loader size="big" active inline="centered" />
      ) : (
        <Table striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Titre</Table.HeaderCell>
              <Table.HeaderCell>Date de début</Table.HeaderCell>
              <Table.HeaderCell>Date de fin</Table.HeaderCell>
              <Table.HeaderCell>Lieu</Table.HeaderCell>
              <Table.HeaderCell>Catégorie</Table.HeaderCell>
              <Table.HeaderCell>Participants</Table.HeaderCell>
              <Table.HeaderCell>Participants</Table.HeaderCell>
              <Table.HeaderCell>Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {events.map((event) => (
              <Table.Row key={event.id}>
                <Table.Cell>{event.title}</Table.Cell>
                <Table.Cell>
                  {dateformat(
                    event.start_date,
                    "dddd d mmmm yyyy h:MM:ss TT",
                  )}
                </Table.Cell>
                <Table.Cell>
                  {dateformat(event.end_date, "dddd d mmmm yyyy h:MM:ss TT")}
                </Table.Cell>
                <Table.Cell>{event.place}</Table.Cell>
                <Table.Cell>{event.category}</Table.Cell>
                <Table.Cell>
                  <List bulleted>
                    {event.participants
                      && event.participants
                        .split(";")
                        .map((el, key) => (
                          <List.Item key={key}>{el}</List.Item>
                        ))}
                  </List>
                </Table.Cell>
                <Table.Cell>{event.description}</Table.Cell>
                <Table.Cell>
                  <Grid.Row>
                    <Button
                      onClick={() => {
                        setElm(event);
                        setTrigger(true);
                      }}
                      color="grey"
                      icon
                    >
                      <Icon name="wrench" />
                    </Button>
                    <Button
                      onClick={async () => {
                        setLoading(true);
                        await deleteEvent(event.id);
                        await fetchData();
                        setLoading(false);
                      }}
                      color="red"
                      icon
                    >
                      <Icon name="trash" />
                    </Button>
                  </Grid.Row>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      )}
    </Sidebar>
  );
};
export default Events;
