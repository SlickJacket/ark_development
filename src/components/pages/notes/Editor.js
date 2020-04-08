import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import ToolTip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import SaveIcon from "@material-ui/icons/Save";

import "../../App.css";

const useStyles = makeStyles(theme => ({
  editorTitle: {
    backgroundColor: theme.palette.secondary.main,
    height: "3em"
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
  saveIcon: {
    color: "white",
    "&:hover": {
      color: theme.palette.primary.main
    }
  }
}));

export default function Editor() {
  const classes = useStyles();
  const [value, setValue] = useState("");

  const modules = {
    toolbar: [
      [{ font: [] }],
      [{ align: [] }],
      [{ size: ["small", false, "large", "huge"] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" }
      ],
      ["link", "image"],
      [{ color: [] }, { background: [] }],
      ["clean"]
    ]
  };
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "color",
    "background",
    "size",
    "align",
    "font"
  ];

  return (
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
                  inputProps={{ maxLength: 30 }}
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
          <ReactQuill
            theme="snow"
            value={value}
            onChange={setValue}
            modules={modules}
            formats={formats}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}
