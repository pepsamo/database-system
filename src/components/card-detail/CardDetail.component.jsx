import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CardDetail = ({ children, user }) => {
    const [ modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    const { name, lastname, city } = user;
    return (
        <div>
          <Button onClick={toggle}>{children}</Button>
          <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Dettagli</ModalHeader>
            <ModalBody>
              <div>
                <h2>Nome completo: </h2> <span>{ name } { lastname }</span>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={toggle}>Va bene</Button>{' '}
            </ModalFooter>
          </Modal>
        </div>);
};

export default CardDetail;