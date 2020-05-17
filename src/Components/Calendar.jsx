import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import { Loader } from "semantic-ui-react";
import moment from "moment";
import styled from "styled-components";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Sidebar from "./Sidebar";
import { getEvents } from "../api";

moment.locale("fr");
const localizer = momentLocalizer(moment);


const Wrapper = styled.div`
  margin-top:20px;
`;

const messages = {
  allDay: "Journée",
  previous: "Précédent",
  next: "Suivant",
  today: "Aujourd'hui",
  month: "Mois",
  week: "Semaine",
  day: "Jour",
  agenda: "Agenda",
  date: "Date",
  time: "Heure",
  event: "Evénement", // Or anything you want
  showMore: (total) => `+ ${total} événement(s) supplémentaire(s)`,
};

const colors = [
  "#86E3CE",
  "#D0E6A5",
  "#FFDD94",
  "#FA897B",
  "#CCABD8",
  "#66ccff",
  "#99ffbb",
  "#ffe0b3",
];

const Cldr = () => {
  const [events, setEvents] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await getEvents();
      const data = result.data.map((e) => ({
        allDay: false,
        title: e.title,
        start: new Date(e.start_date),
        end: new Date(e.end_date),
        color: colors[Math.floor(Math.random() * colors.length)],
      }));
      setEvents(data);
      setLoading(false);
    };

    fetchData();
  }, []);
  if (loading) return <Loader />;

  return (
    <Sidebar>
      <Wrapper>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: '90vh' }}
          messages={messages}
          eventPropGetter={(event) => {
            const newStyle = {
              backgroundColor: event.color,
              color: "black",
              borderRadius: "0px",
              border: "none",
            };

            return {
              className: "",
              style: newStyle,
            };
          }}
        />
      </Wrapper>
    </Sidebar>
  );
};
export default Cldr;
