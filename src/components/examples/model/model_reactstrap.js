import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, FormGroup, Label, Input } from 'reactstrap';


class Model extends Component {
    constructor(props) {
        super(props);
        this.state = {
            model: false,
        }
    }

    setModel = () => {
        this.setState({
            model: true,
        });
    }

    render() {
        return (
            <div>
                <Button type="submit" color="primary" onClick={() => (this.setState({ model: true }))}>Add</Button>
                <Modal isOpen={this.state.model} >
                    <ModalHeader >Add a new car</ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label for="description">Description</Label>
                            <Input type="text" name="description" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="model">Model</Label>
                            <Input type="text" name="model" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="produced_on">Produced_on</Label>
                            <Input type="date" name="produced_on" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="image">Image</Label>
                            <Input id="fileupload" type="file" name="image" />
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button type="submit" color="primary" >Add</Button>
                        <Button color="secondary" onClick={() => (this.setState({ model: false }))}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default Model;