import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Footer = () => (

<Card className='footer'>
  <Card.Body>
    <Button className="m-1 p-1"  variant="secondary"><a className="text-white" target="_blank"  href="https://github.com/ZeDevGit">GitHub</a></Button>
    <Button className="m-1 p-1" variant="secondary"><a className="text-white" target="_blank"  href="https://www.linkedin.com/in/edward-lawrence-22876830b/">LinkedIn</a></Button>
    <Button  className="m-1 p-1" variant="secondary"><a className="text-white"  target="_blank" href="https://stackexchange.com/users/32440912/zedevgit">StackOverflow</a></Button>
  </Card.Body>
</Card>

      
    );

  
 


export default Footer;