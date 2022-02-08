import React from "react";
import emojipedia from "../emojipedia";
import CreateEntry from "./CreateEntry";

function EmojiFinal() {
  return <dl className="dictionary">{emojipedia.map(CreateEntry)}</dl>;
}

export default EmojiFinal;
