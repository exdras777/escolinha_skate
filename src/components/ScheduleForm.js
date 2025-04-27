import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

function ScheduleForm() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    experience: 'iniciante',
    schedule: 'manha',
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

    // Validação simples (pode expandir)
    if (!formData.name || !formData.age) {
        setError('Por favor, preencha seu nome e idade.');
        return;
    }
    if (parseInt(formData.age) <= 0) {
        setError('Por favor, insira uma idade válida.');
        return;
    }


    // --- Simulação de Envio ---
    // No mundo real, aqui você enviaria os dados para um backend/API
    console.log('Dados do Agendamento:', formData);
    setSubmitted(true);
    // Limpar o formulário após "envio" (opcional)
    // setFormData({ name: '', age: '', experience: 'iniciante', schedule: 'manha' });
    // setTimeout(() => setSubmitted(false), 5000); // Esconde a mensagem de sucesso após 5s
     setError(''); // Garante que a mensagem de erro suma no sucesso
  };

  return (
    <section id="agendamento" className="section">
      <Container>
        <h2 className="section-heading">Agende Sua Aula</h2>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <div className="form-section">
              {submitted && <Alert variant="success">Seu pedido de agendamento foi recebido! Entraremos em contato em breve.</Alert>}
              {error && <Alert variant="danger">{error}</Alert>}

              {!submitted && ( // Mostra o formulário apenas se não foi enviado com sucesso
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formScheduleName">
                    <Form.Label>Nome Completo</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Seu nome"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formScheduleAge">
                    <Form.Label>Idade</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Sua idade"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      required
                      min="1" // Idade mínima
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formScheduleExperience">
                    <Form.Label>Nível de Experiência</Form.Label>
                    <Form.Select
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      aria-label="Selecione seu nível"
                    >
                      <option value="iniciante">Iniciante (Nunca subiu no skate)</option>
                      <option value="intermediario">Intermediário (Já rema, faz curvas)</option>
                      <option value="avancado">Avançado (Já manda umas manobras)</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-4" controlId="formScheduleTime">
                    <Form.Label>Horário Preferido</Form.Label>
                    <Form.Select
                      name="schedule"
                      value={formData.schedule}
                      onChange={handleChange}
                      aria-label="Selecione o horário"
                    >
                      <option value="manha">Manhã (9h - 12h)</option>
                      <option value="tarde">Tarde (14h - 17h)</option>
                      <option value="sabado">Sábado (10h - 13h)</option>
                    </Form.Select>
                  </Form.Group>

                  <div className="d-grid"> {/* Faz o botão ocupar a largura toda */}
                    <Button variant="custom-primary" type="submit" size="lg">
                      Enviar Pedido de Aula
                    </Button>
                  </div>
                </Form>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ScheduleForm;