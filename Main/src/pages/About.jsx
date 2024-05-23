import { Container, Row } from 'react-bootstrap';
import React from "react";

export default function About() {
  return (
    <Container>
      <Row>
    <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center">
      <br></br>
        <h1 className="text-4xl font-bold text-center my-8">About Me</h1>
        <p className="text-lg text-center">Hello! My name is Edward Lawrence and I've been learning full stack development through the UofT Coding Bootcamp. </p>
        <p className="text-lg text-center">Though I had some experience with web design, throughout this course I learned an enormous amount about all the pieces of a website. </p>
        <p className="text-lg text-center">This website is a small example of everything I learned throughout the course! </p>
    </div>

      </Row>
    </Container>
  );
}