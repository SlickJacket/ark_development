import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Editor from "./Editor";
import SaveIcon from "@material-ui/icons/Save";
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
  titleInput: {
    color: "white",
    fontSize: "24px",

    "&&&:before": {
      borderBottom: "none"
    },
    "&&:after": {
      borderBottom: "none"
    }
  },
  contentTextField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  editorTitle: {
    backgroundColor: theme.palette.secondary.main,
    height: "3em"
  },
  notesAndFolders: {
    height: "40em"
  },
  folderMenuIcons: {
    "&:hover": {
      color: theme.palette.primary.main
    }
  },
  saveIcon: {
    color: "white",
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
        <Paper className="notePaper">
          <Grid container>
            <Grid item xs={12}>
              <Paper className={classes.editorTitle}>
                <Grid container justify="space-around" alignItems="center">
                  <Grid item xs={4}>
                    <TextField
                      placeholder="Title"
                      InputProps={{
                        className: classes.titleInput
                      }}
                      inputProps={{ maxLength: 20 }}
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <ToolTip title="Save">
                      <IconButton>
                        <SaveIcon className={classes.saveIcon} />
                      </IconButton>
                    </ToolTip>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Editor />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}

// <Grid container direction="row" justify="flex-start">
//             <Grid item xs={5}>
//               <TextField
//                 // label="Add a Note"
//                 placeholder="Title"
//                 variant="standard"
//                 // rowsMax="4"
//                 // onChange={handleChange("multiline")}
//                 className={classes.titleTextField}
//                 InputProps={{
//                   classes: {
//                     input: classes.titleInput
//                   }
//                 }}
//                 inputProps={{maxLength: 20}}
//                 margin="normal"
//               />
//             </Grid>
//             <Grid item xs={11}>
//               <TextField
//                 id="standard-multiline-flexible"
//                 // label="Add a Note"
//                 placeholder="Add a Note"
//                 variant="standard"
//                 multiline
//                 // rowsMax="4"
//                 fullWidth
//                 // onChange={handleChange("multiline")}
//                 className={classes.contentTextField}
//                 margin="normal"
//               />
//             </Grid>
//           </Grid>
