import React from "react";
import IconExternalLink from "../assets/external-link-icon";

export default function RepoLinks({ text, url }) {
  return (
    <a href={url} className='button' target='_blank'>
      {text}
      <IconExternalLink />
    </a>
  );
}
