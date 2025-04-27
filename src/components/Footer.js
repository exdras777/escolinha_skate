import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto"> {/* mt-auto pode ajudar a fixar no fim em alguns layouts */}
      <Container>
        <p>&copy; {currentYear} Escolinha de Skate do Bob - Todos os direitos reservados.</p>
        <p>Feito com <i className="bi bi-heart-fill text-danger"></i> e muito skate!</p>
         {/* Repete ícones sociais se desejar */}
         <div className="social-icons">
            <a href="#" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
            <a href="#" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
            <a href="#" aria-label="Whatsapp"><i className="bi bi-whatsapp"></i></a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;