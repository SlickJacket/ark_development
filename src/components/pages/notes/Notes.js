import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import Editor from "./Editor";
import FolderIcon from "@material-ui/icons/Folder";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import CreateNewFolderIcon from "@material-ui/icons/CreateNewFolder";
import NoteTabs from "./NoteTabs";
import ToolTip from "@material-ui/core/Tooltip";

import "../../App.css";

const permDrawerWidth = 240;

const useStyles = makeStyles(theme => ({
  notesPageContainer: {
    width: `calc(100% - ${permDrawerWidth}px)`,
    marginLeft: `${permDrawerWidth}px`,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      margin: 0
    }
  },
  notePaper: {
    backgroundColor: "white",
    height: "40em",
    textAlign: "center",
    overflowY: "scroll"
  },
  titleTextField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
    // width: "90%"
  },
  contentTextField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  notesAndFolders: {
    height: "40em"
  },
  folderMenuIcons: {
    "&:hover": {
      color: theme.palette.primary.main
    }
  }
}));

export default function Notes() {
  const classes = useStyles();

  return (
    <Grid
      className={classes.notesPageContainer}
      container
      direction="row"
      justify="space-between"
    >
      <Grid item xs={3}>
        <Paper>
          <Grid
            container
            direction="row"
            alignItems="center"
            className={classes.notesAndFolders}
          >
            <Grid item xs={12} className={classes.folderMenu}>
              <Grid container justify="space-between">
                <Grid item xs={3}>
                  <ToolTip title="Folders">
                    <IconButton color="secondary">
                      <FolderIcon
                        className={classes.folderMenuIcons}
                        alt="go to folders"
                      />
                    </IconButton>
                  </ToolTip>
                </Grid>
                <Grid item xs={3}>
                  <ToolTip title="Add Folder">
                    <IconButton color="secondary">
                      <CreateNewFolderIcon
                        className={classes.folderMenuIcons}
                      />
                    </IconButton>
                  </ToolTip>
                </Grid>
                <Grid item xs={3}>
                  <ToolTip title="Add Note">
                    <IconButton color="secondary">
                      <NoteAddIcon className={classes.folderMenuIcons} />
                    </IconButton>
                  </ToolTip>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <NoteTabs />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={9}>
        <Editor />
      </Grid>
    </Grid>
  );
}
