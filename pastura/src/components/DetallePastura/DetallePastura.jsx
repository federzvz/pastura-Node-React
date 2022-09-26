import React, { useState, useEffect, Fragment } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';


const DetallePastura = (props) => {
    console.log(props.pastura);
    let RizomaEngrosado = '-';
    let NervaduraCentralMarcada = '-';
    if(props.pastura.RizomaEngrosado === true)
        RizomaEngrosado = 'Si';
    else if(props.pastura.RizomaEngrosado === false)
        RizomaEngrosado = 'No';

    if(props.pastura.NervaduraCentralMarcada === true)
        NervaduraCentralMarcada = 'Si';
    else if(props.pastura.NervaduraCentralMarcada === false)
        NervaduraCentralMarcada = 'No';
    return (
        <Modal show={props.show} onHide={props.close} 
            backdrop="static" 
            keyboard={false}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>{props.pastura.Especie}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Row>
                        <Col xs={12} md={2}>
                            <Form.Label>Familia: </Form.Label>
                        </Col>
                        <Col xs={6} md={3}>
                            <Form.Control
                                value="Gramineas"
                                readonly="readonly"
                            />
                        </Col>
                        <Col xs={12} md={3}>
                            <Form.Label>Tipo vegetativo: </Form.Label>
                        </Col>
                        <Col xs={6} md={4}>
                            <Form.Control
                                value={props.pastura.TipoVegetativo}
                                readonly="readonly"
                            />
                        </Col>
                    </Row>
                    
                    <Form.Label>Especie:</Form.Label>
                    <Form.Control as="textarea" rows={2} 
                        value={props.pastura.Especie}
                    />
                    
                    <Row>
                        <Col xs={12} md={2}>
                            <Form.Label>Macollo 1: </Form.Label>
                        </Col>
                        <Col xs={6} md={4}>
                            <Form.Control
                                value={props.pastura.Mocollo1}
                                readonly="readonly"
                            />
                        </Col>
                        <Col xs={12} md={2}>
                            <Form.Label>Macollo 2: </Form.Label>
                        </Col>
                        <Col xs={6} md={4}>
                            <Form.Control
                                value={props.pastura.Mocollo2}
                                readonly="readonly"
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={12} md={3}>
                            <Form.Label>Rizoma engrozado: </Form.Label>
                        </Col>
                        <Col xs={6} md={2}>
                            <Form.Control
                                value={RizomaEngrosado}
                                readonly="readonly"
                            />
                        </Col>
                        <Col xs={12} md={3}>
                            <Form.Label>Consistecia de la ligula: </Form.Label>
                        </Col>
                        <Col xs={6} md={4}>
                            <Form.Control
                                value={props.pastura.ConsistenciaLigula}
                                readonly="readonly"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={3}>
                            <Form.Label>Forma de la ligula: </Form.Label>
                        </Col>
                        <Col xs={6} md={3}>
                            <Form.Control
                                value={props.pastura.FormaLigula}
                                readonly="readonly"
                            />
                        </Col>
                        <Col xs={12} md={2}>
                            <Form.Label>Tamaño: </Form.Label>
                        </Col>
                        <Col xs={6} md={4}>
                            <Form.Control
                                value={props.pastura.Tamano}
                                readonly="readonly"
                            />
                        </Col>
                    </Row>

                    <Form.Label>Otra caracteristica ligula:</Form.Label>
                    <Form.Control as="textarea" rows={3} 
                        value={props.pastura.OtrasCaracteristicasLigula}
                    />
                    <Row>
                        <Col xs={12} md={3}>
                            <Form.Label>Color de la ligula: </Form.Label>
                        </Col>
                        <Col xs={6} md={3}>
                            <Form.Control
                                value={props.pastura.ColorLigula}
                                readonly="readonly"
                            />
                        </Col>
                        <Col xs={12} md={3}>
                            <Form.Label>Forma de la lamina: </Form.Label>
                        </Col>
                        <Col xs={6} md={3}>
                            <Form.Control
                                value={props.pastura.FormaLamina}
                                readonly="readonly"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={2}>
                            <Form.Label>Canaliculada: </Form.Label>
                        </Col>
                        <Col xs={6} md={3}>
                            <Form.Control
                                value={props.pastura.Canaliculada}
                                readonly="readonly"
                            />
                        </Col>
                        <Col xs={12} md={3}>
                            <Form.Label>Tipo de lamina: </Form.Label>
                        </Col>
                        <Col xs={6} md={4}>
                            <Form.Control
                                value={props.pastura.FormaLamina}
                                readonly="readonly"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={2}>
                            <Form.Label>Apice: </Form.Label>
                        </Col>
                        <Col xs={6} md={3}>
                            <Form.Control
                                value={props.pastura.Apice}
                                readonly="readonly"
                            />
                        </Col>
                        <Col xs={12} md={4}>
                            <Form.Label>Nervadura central marcada: </Form.Label>
                        </Col>
                        <Col xs={6} md={3}>
                            <Form.Control
                                value={NervaduraCentralMarcada}
                                readonly="readonly"
                            />
                        </Col>
                    </Row>
                    <Form.Label>Observaciones:</Form.Label>
                    <Form.Control as="textarea" rows={2} 
                        value={props.pastura.Observaciones}
                    />
                    <Row>
                        <Col xs={12} md={2}>
                                <Form.Label>Pelos: </Form.Label>
                            </Col>
                        <Col xs={6} md={10}>
                            <Form.Control
                                value={props.pastura.Pelos}
                                readonly="readonly"
                                />
                        </Col>
                    </Row>
                    <Form.Label>Ubicación de los pelos:</Form.Label>
                    <Form.Control as="textarea" rows={2} 
                        value={props.pastura.UbicacionPelos}
                    />
                    <Form.Label>Observaciones:</Form.Label>
                    <Form.Control as="textarea" rows={2} 
                        value={props.pastura.Observacion}
                    />
                    <Form.Label>Observaciones generales:</Form.Label>
                    <Form.Control as="textarea" rows={2} 
                        value={props.pastura.ObservacionesGenerales}
                    />
                    <Row>
                        <Col xs={12} md={3}>
                                <Form.Label>Ciclo de vida: </Form.Label>
                            </Col>
                        <Col xs={6} md={3}>
                            <Form.Control
                                value={props.pastura.CicloVida}
                                readonly="readonly"
                                />
                        </Col>
                        <Col xs={12} md={3}>
                                <Form.Label>Ciclo productivo: </Form.Label>
                            </Col>
                        <Col xs={6} md={3}>
                            <Form.Control
                                value={props.pastura.CicloProductivo}
                                readonly="readonly"
                                />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={3}>
                                <Form.Label>Tipo productivo: </Form.Label>
                            </Col>
                        <Col xs={6} md={9}>
                            <Form.Control
                                value={props.pastura.Pelos}
                                readonly="readonly"
                                />
                        </Col>
                    </Row>
                    <Form.Label>Tipo de campo:</Form.Label>
                    <Form.Control as="textarea" rows={2} 
                        value={props.pastura.TipoCampo}
                    />
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.close}>
                    Cerrar 
                </Button>
                <Button variant="primary" onClick={props.close}>
                    Guardar cambios
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DetallePastura;