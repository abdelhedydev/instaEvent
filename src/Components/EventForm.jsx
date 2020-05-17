/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import styled from "styled-components";
import places from "places.js";
import {
  Button,
  Form,
  Modal,
  TextArea,
  Icon,
  Label,
  Input,
} from "semantic-ui-react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { addEvent, editEvent } from "../api";

const Wrapper = styled.div`
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
  .react-datepicker-wrapper {
    width: 45%;
  }
`;

const options = [
  { key: "1", text: "Technique", value: "Technique" },
  { key: "2", text: "Sport", value: "Sport" },
  { key: "3", text: "Culturel", value: "Culturel" },
  { key: "4", text: "Autre", value: "Autre" },
];

const EventForm = ({
  trigger, setTrigger, event, fetchData,
}) => {
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());
  const [title, setTitle] = React.useState();
  const [participants, setParticiants] = React.useState([]);
  const [place, setPlace] = React.useState();
  const [category, setCategory] = React.useState("Technique");
  const [email, setEmail] = React.useState();
  const [error, setError] = React.useState({ email: false });
  const [description, setDescription] = React.useState();

  React.useEffect(() => {
    if (event) {
      if (event.participants) {
        const parts = event.participants.split(";");
        setParticiants(parts);
      }
      if (event.start_date) {
        setStartDate(new Date(event.start_date));
      }
      if (event.end_date) {
        setStartDate(new Date(event.end_date));
      }
      if (event.title) {
        setTitle(event.title);
      }
      if (event.place) {
        setPlace(event.place);
      }
      if (event.description) {
        setDescription(event.description);
      }
    }
  }, [event]);

  function getPlaces(elm) {
    setPlace(elm.target.value);
    elm.target.focus();
    const placesAutocomplete = places({
      appId: "pl7S67C0RLLN",
      apiKey: "1e80c97215c82068df40ccb8c80ec717",
      container: document.querySelector("#address-input"),
    });
    placesAutocomplete.on("change", (e) => {
      setPlace(e.suggestion.value);
    });
    placesAutocomplete.on("clear", () => {
      setPlace('');
    });
  }

  async function submitForm(e) {
    e.preventDefault();
    const data = {
      title,
      startDate,
      endDate,
      participants: participants.join(";"),
      category,
      place,
      description,
    };
    if (event) {
      await editEvent(data, event.id);
    } else {
      await addEvent(data);
    }

    setTrigger(false);
    await fetchData();
  }
  return (
    <Modal centered open={trigger} onClose={() => setTrigger()}>
      <Modal.Header>Nouvelle Événement</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Form>
            <Form.Field>
              <label>Titre</label>
              <Form.Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="First Name"
                defaultValue={event ? event.title : ""}
              />
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
                value={event ? event.category : category}
                onChange={(e) => setCategory(e.target.textContent)}
              />
            </Form.Field>
            <Form.Field>
              <label>Particpants</label>
              <Input
                icon={(
                  <Icon
                    onClick={() => {
                      if (email) {
                        setParticiants(participants.concat(email));
                        setEmail("");
                      } else {
                        setError({ ...error, email: true });
                      }
                    }}
                    name="plus"
                    circular
                    link
                  />
                )}
                placeholder="example@example.fr"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={error.email}
              />
              <div>
                {participants.length > 0 && <br />}
                {participants.length > 0
                  && participants.map((part) => (
                    <Label>
                      {part}
                      <Icon
                        name="delete"
                        onClick={() => {
                          const newParts = participants.filter(
                            (e) => e !== part,
                          );
                          setParticiants(newParts);
                        }}
                      />
                    </Label>
                  ))}
              </div>
            </Form.Field>
            <Form.Field>
              <label>Lieu</label>
              <input
                type="search"
                value={event ? event.place : place}
                onChange={(e) => {
                  getPlaces(e);
                  e.target.focus();
                }}
                id="address-input"
                placeholder="Lieu d'evenement"
              />
            </Form.Field>
            <Form.Field />
            <Form.Field
              control={TextArea}
              label="Description"
              placeholder="Tell us more about you..."
              defaultValue={event && event.description}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <Button
              onClick={(e) => submitForm(e)}
              color="green"
              type="submit"
            >
              {
                event ? 'Modifier' : 'Enregistrer'
              }
            </Button>
          </Form>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};
export default EventForm;
