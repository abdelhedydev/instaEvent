import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Sidebar from './Sidebar';

const localizer = momentLocalizer(moment);


const Cldr = () => {
  const [events, setEvents] = React.useState([]);
  React.useEffect(() => {
    setEvents([]);
  }, []);
  return (
    <Sidebar>
      Calendrier
      <div style={{ marginTop: '20px' }}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
        />
      </div>
    </Sidebar>
  );
};
export default Cldr;
