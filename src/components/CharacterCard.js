import {Card, CardBody, CardSubtitle} from 'reactstrap'

import React from "react";

export default function CharacterCard(props) {
  const {data} = props;
  return  <Card>
  <CardBody className="card-body">
  <CardSubtitle>Name: {data.name} </CardSubtitle>
  <CardSubtitle> Species: {data.species}</CardSubtitle>
  <CardSubtitle>Status: {data.status}</CardSubtitle>
  </CardBody>
  
  </Card>;
}
