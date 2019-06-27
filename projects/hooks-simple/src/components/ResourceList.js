import React, { useState, useEffect } from "react";
import useResources from "./useResources";

const ResourceList = ({ resource }) => {
  const resources = useResources(resource);
  return (
    <ol>
      {resources.map(record => (
        <li key={record.id}>{record.title}</li>
      ))}
    </ol>
  );
};
export default ResourceList;
