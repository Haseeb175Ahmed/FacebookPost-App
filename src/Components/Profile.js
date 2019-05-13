import '../profile.css';
import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
 

const gridExamplesPage = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol>col</MDBCol>
        <MDBCol>col</MDBCol>
        <MDBCol>col</MDBCol>
        <MDBCol>col</MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol size="8">col-8</MDBCol>
        <MDBCol size="4">col-4</MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default gridExamplesPage;
