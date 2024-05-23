import { Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// Portfolio component that will display the projects that I have worked on
export default function Portfolio() {
  const projects = [
    {
      "title": "Helldivers Deployment",
      "link": "https://helldivers-deployment.onrender.com/",
      "GitHub": "https://github.com/BryanPeens/helldivers-deployment",
      "image": "/src/assets/images/helldive.png"
    },
    {
      "title": "Pocket Monster Battler",
      "link": "https://j-0987.github.io/PocketMonsterBattler/",
      "GitHub": "https://github.com/J-0987/PocketMonsterBattler/",
      "image": "/src/assets/images/pika.png"
    },
    {
      "title": "Note Taker",
      "link": "https://react-text-editor-sica.onrender.com/",
      "GitHub": "https://github.com/ZeDevGit/Note-Taker",
      "image": "/src/assets/images/note.png"
    },
    {
      "title": "Regex Tutorial",
      "link": "https://github.com/ZeDevGit/regex-tutorial",
      "GitHub": "https://github.com/ZeDevGit/regex-tutorial",
      "image": "/src/assets/images/regex.png"
    },
    {
      "title": "SVG-Logo-maker",
      "link": "https://github.com/ZeDevGit/SVG-Logo-maker",
      "GitHub": "https://github.com/ZeDevGit/SVG-Logo-maker",
      "image": "/src/assets/images/svg-file.jpg"
    },
    {
      "title": "README-Generator",
      "link": "https://github.com/ZeDevGit/README-Generator",
      "GitHub": "https://github.com/ZeDevGit/README-Generator",
      "image": "/src/assets/images/readme.png"
    }
  ];

  // Return the portfolio component with the projects displayed in cards with images, titles, and buttons to view the project and the GitHub repository
  return (
    <Container>
      <Row>
    <div className="mb-5 pb-5">
      <header>
        <h1>My Portfolio</h1>
      </header>

      <main className="d-flex flex-wrap gap-2 mb-3 pb-3">
        {projects.map((project, index) => (
          <Card key={index} style={{ width: '15rem' }}>
            <Card.Img variant="top" src={project.image} />
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Button  className="m-1 p-1" variant="secondary"><a className="text-white" target="_blank" href = {project.link}>Project Demo</a></Button>
              <Button className="m-1 p-1" variant="secondary"><a className="text-white" target="_blank" href = {project.GitHub}>GitHub</a></Button>
            </Card.Body>
          </Card>

        ))}


      </main>
        <br></br>
    </div>
  </Row>
  </Container>

  )
}
