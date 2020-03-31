import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { FixedSizeList } from "react-window";
import Typography from "@material-ui/core/Typography"
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Checkbox from "@material-ui/core/Checkbox";


const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
}));

export default function VirtualizedList() {
  const classes = useStyles();

  const [checked, setChecked] = React.useState([]);

  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  function renderRow(props) {
    const { index, style } = props;
    const labelId = `checkbox-list-label-${index}`;

    return (
      <ListItem button style={style} key={index}>
        <ListItemIcon onClick={handleToggle(index)}>
          <Checkbox
            edge="start"
            checked={checked.indexOf(index) !== -1}
            tabIndex={-1}
            disableRipple
            inputProps={{ "aria-labelledby": labelId }}
            color="primary"
          />
        </ListItemIcon>
        <ListItemText>
          <Typography>{`John Doe:...............Custom Order Quote Inquiry..................... ${index +
            1}`}</Typography>{" "}
        </ListItemText>
      </ListItem>
    );
  }

  renderRow.propTypes = {
    index: PropTypes.number.isRequired,
    style: PropTypes.object.isRequired
  };

  return (
    <div className={classes.root}>
      <FixedSizeList height={500} width="100%" itemSize={46} itemCount={50}>
        {renderRow}
      </FixedSizeList>
    </div>
  );
}
