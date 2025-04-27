import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

// Use uma imagem relevante aqui, pode ser da equipe, do espaço, etc.
const aboutImage = '../assets/images/logo1.jpg';

function About() {
  return (
    <section id="sobre" className="section">
      <Container>
        <h2 className="section-heading">Sobre Nós</h2>
        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-0">
            {/* Idealmente, use uma imagem real da ONG ou skatistas */}
            <Image src={aboutImage} rounded fluid alt="Escolinha de Skate do Bob - Nossa Missão" />
          </Col>
          <Col md={6}>
            <h3>Nossa Missão: Skate Para Todxs!</h3>
            <p className="lead">
              A Escolinha de Skate do Bob nasceu do sonho de compartilhar a paixão pelo skate
              e promover inclusão social através do esporte e da cultura urbana.
            </p>
            <p>
              Somos uma ONG filantrópica dedicada a oferecer aulas de skate totalmente gratuitas
              para crianças, jovens e adultos da nossa comunidade. Acreditamos no poder
              transformador do skate para desenvolver habilidades motoras, autoconfiança,
              disciplina e, claro, criar laços de amizade.
            </p>
            <h4>Nossa História</h4>
            <p>
              Tudo começou com o "Bob" (uma figura inspiradora, real ou fictícia) que via no skate
              uma ferramenta de mudança. Reunindo amigos e voluntários, a escolinha tomou forma,
              crescendo com o apoio da comunidade e a energia contagiante dos nossos alunos.
              Hoje, somos um ponto de encontro, aprendizado e muita diversão sobre rodinhas!
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;