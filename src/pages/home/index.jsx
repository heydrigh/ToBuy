import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { useForm } from "react-hook-form";
import FlipCard from 'react-flipcard-2';
import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  Card,
  CardColumns,
} from "react-bootstrap";
import { GiShoppingCart } from "react-icons/gi";
import {
  Title,
  CreatePreviewContainer,
  FormCreateTitle,
  FormCreatePrice,
  TitleCreate,
  CardShow,
  ModalCustom,
  FormCreate,
} from "./styles";

export default function Details() {

  

  const { register, handleSubmit } = useForm();
  const [show, setShow] = useState(false);
  const [details, setDetails] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseDetails = () => setDetails(false);
  const handleShowDetails = () => setDetails(true);

  const [items, setItems] = useState(null);

  const onSubmit = async (data) => {
    await api.post("/items", data);
  };

  useEffect(() => {
    api.get("/items").then((response) => {
      setItems(response.data.docs);
      console.log(response.data.docs);
    });
  }, []);

  return (
    <Container>
      <ModalCustom>
        <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={show}
          onHide={handleClose}
          backdrop="static"
          closeButton={true}
          className="modalCustom"
        >
          <Modal.Header closeButton>
            <Modal.Title>Adicione seu produto</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormCreate onSubmit={handleSubmit(onSubmit)}>
              <h1>Cadastre um item</h1>

              <input
                name="title"
                ref={register}
                placeholder="Nome do produto"
              />
              <input name="price" ref={register} placeholder="Preço" />
              <input name="currency" ref={register} placeholder="Moeda" />
              <input
                name="description"
                ref={register}
                placeholder="Descrição do produto"
                className="description"
              />
              <input
                name="imageUrl"
                ref={register}
                placeholder="Endereço da imagem"
              />

              <Button type="submit">Cadastrar</Button>
            </FormCreate>
          </Modal.Body>
        </Modal>
      </ModalCustom>
      <Row>
        <Col>
          <Title>
            ToBuy <GiShoppingCart size={36} />
          </Title>
          <TitleCreate>Criar</TitleCreate>
        </Col>
      </Row>
      <Row>
        <Col>
          <CreatePreviewContainer onClick={handleShow}>
            <FormCreateTitle>
              <input type="text" placeholder="Digite o nome do produto" />
            </FormCreateTitle>
            <FormCreatePrice>
              <input type="text" placeholder="Digite o preço" />
            </FormCreatePrice>
          </CreatePreviewContainer>
        </Col>
      </Row>
      <CardShow>
        <Row>
          <Col>
            <CardColumns>
              {items &&
                items.map((item, index) => {
                  return (
                    <div className="items" key={item._id}>
                      <Card style={{ width: "18rem" }}>
                        <Card.Img variant="top" src={item.imageUrl} />
                        <Card.Body>
                          <Card.Title>{item.title}</Card.Title>
                          <Card.Text>
                            {" "}
                            {item.currency} {item.price}
                          </Card.Text>
                          <Button variant="primary" onClick={handleShowDetails}>
                            Detalhes
                          </Button>
                        </Card.Body>
                      </Card>
                    </div>
                  );
                })}
            </CardColumns>
          </Col>
        </Row>
      </CardShow>
    </Container>
  );
}
