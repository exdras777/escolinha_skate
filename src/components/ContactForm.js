import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Previne o reload da página
    setError(''); // Limpa erros anteriores

    // Validação simples
    if (!formData.name || !formData.email || !formData.message) {
        setError('Por favor, preencha nome, email e mensagem.');
        return;
    }
     // Validação básica de email (pode usar regex mais complexo)
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError('Por favor, insira um email válido.');
      return;
    }

    // --- Simulação de Envio ---
    console.log('Dados de Contato:', formData);
    setSubmitted(true);
    // Limpar o formulário após "envio" (opcional)
    // setFormData({ name: '', email: '', subject: '', message: '' });
    // setTimeout(() => setSubmitted(false), 5000); // Esconde a mensagem de sucesso após 5s
    setError(''); // Garante que a mensagem de erro suma no sucesso
  };

  return (
    <section id="contato" className="section">
      <Container>
        <h2 className="section-heading">Fale Conosco</h2>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <div className="form-section">
              {submitted && <Alert variant="success">Mensagem enviada com sucesso! Obrigado pelo contato.</Alert>}
              {error && <Alert variant="danger">{error}</Alert>}

              {!submitted && (
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formContactName">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Seu nome"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formContactEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="seu@email.com"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formContactSubject">
                    <Form.Label>Assunto</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Sobre o que você quer falar?"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-4" controlId="formContactMessage">
                    <Form.Label>Mensagem</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      placeholder="Deixe sua mensagem aqui..."
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <div className="d-grid">
                    <Button variant="custom-primary" type="submit" size="lg">
                      Enviar Mensagem
                    </Button>
                  </div>
                </Form>
              )}
            </div>
          </Col>
        </Row>
         {/* Informações de contato adicionais (opcional) */}
         <Row className="mt-5 text-center">
             <Col>
                <p>Ou entre em contato diretamente:</p>
                <p><i className="bi bi-envelope-fill me-2"></i> contato@escolinhadobob.org (exemplo)</p>
                <p><i className="bi bi-telephone-fill me-2"></i> (XX) 99999-8888 (exemplo)</p>
                 {/* Ícones de redes sociais */}
                <div className="social-icons mt-3">
                    <a href="#" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
                    <a href="#" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
                    <a href="#" aria-label="Whatsapp"><i className="bi bi-whatsapp"></i></a>
                </div>
             </Col>
         </Row>
      </Container>
    </section>
  );
}

export default ContactForm;