import React from 'react';
import styled from 'styled-components';
import {
  Icon, Button, Menu, Segment, Sidebar,
} from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';

const Wrapper = styled.div`height:100vh;`;


const SidebarExampleSidebar = ({ children }) => {
  const [visible, setVisible] = React.useState(false);
  const history = useHistory();
  function goTo(path) {
    history.push(path);
    setVisible(false);
  }
  return (
    <Wrapper>
      <Sidebar.Pushable as={Segment}>
        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          inverted
          onHide={() => setVisible(false)}
          vertical
          visible={visible}
          width="thin"
        >
          <Menu.Item as="a" onClick={() => goTo('/')}>
            <Icon name="calendar alternate" />
            Calendrier
          </Menu.Item>
          <Menu.Item as="a" onClick={() => goTo('/evenements')}>
            <Icon name="calendar" />
            Evénements
          </Menu.Item>
          {/* <Menu.Item as="a" onClick={() => goTo('/connexion')}>
            <Icon name="arrow alternate circle left outline" />
            Déconnexion
          </Menu.Item> */}
        </Sidebar>

        <Sidebar.Pusher>
          <Segment basic>
            <Button icon="bars" onClick={() => setVisible(true)} />
            {
                            children
                        }
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </Wrapper>
  );
};

export default SidebarExampleSidebar;
