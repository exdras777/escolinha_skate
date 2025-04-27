import React from 'react';
import { Carousel, Container } from 'react-bootstrap';

import imagem1 from '../assets/images/img1.jpeg'; // Ajuste o caminho e nome do arquivo
import imagem2 from '../assets/images/img2.jpeg'; // Ajuste o caminho e nome do arquivo
import imagem3 from '../assets/images/img3.jpeg';  // Ajuste o caminho e nome do arquivo
// Importe quantas imagens você tiver para o carrossel

// --- IMPORTANTE ---
// Substitua as URLs 'https://via.placeholder.com/...' pelas URLs das suas imagens reais.
// Use imagens com pegada jovem e urbana (skatistas, grafites, paisagens urbanas, etc.)
const carouselItems = [
  {
    imgSrc: imagem1,
    alt: 'Jovem skatista realizando uma manobra em ambiente urbano',
    title: 'Manobre Seu Futuro!',
    caption: 'Aulas de skate gratuitas para todas as idades e níveis.',
  },
  {
    imgSrc: imagem2,
    alt: 'Grupo de jovens reunidos em um skate park',
    title: 'Comunidade e Diversão',
    caption: 'Mais que um esporte, um estilo de vida e amizade.',
  },
  {
    imgSrc: imagem3,
    alt: 'Skate encostado em parede com grafite',
    title: 'Cultura Urbana na Veia',
    caption: 'Explore a cidade sobre quatro rodas.',
  },
];

function HeroCarousel() {
  return (
    <section id="home">
       <Container fluid className="p-0"> {/* Container fluido para ocupar largura */}
         <Carousel fade interval={4000}> {/* fade para transição suave, interval para tempo */}
            {carouselItems.map((item, index) => (
            <Carousel.Item key={index}>
                <img
                className="d-block w-100"
                src={item.imgSrc}
                alt={item.alt}
                />
                <Carousel.Caption className="d-none d-md-block"> {/* Legenda visível em telas médias e maiores */}
                <h3>{item.title}</h3>
                <p>{item.caption}</p>
                </Carousel.Caption>
            </Carousel.Item>
            ))}
         </Carousel>
        </Container>
    </section>
  );
}

export default HeroCarousel;