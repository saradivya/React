import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Link from 'react-router-dom/Link';
import React from 'react';

function MainMenu(props) {
  return (
    <List>
      <ListItem component={Link} to={{ pathname: '/start' }}>
        <ListItemText primary={'start'} />
      </ListItem>
      <ListItem component={Link} to={{ pathname: '/stop' }}>
        <ListItemText primary={'stop'} />
      </ListItem>
    </List>
  );
}
export default MainMenu;
