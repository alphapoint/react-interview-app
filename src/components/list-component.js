import React, {Component} from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import "../styles//navbar.css";

class ListComponent extends Component {
  render() {
    const {items} = this.props;
    return (
        <List>
          {
            items && items.map((item, idx) => (
              <ListItem button key={idx}>
                <ListItemText primary={item} />
              </ListItem>
            ))
          }
        </List>
    );
  }
}


export default ListComponent;
