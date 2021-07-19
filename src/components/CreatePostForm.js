import React from 'react';
import {Form, Button} from "react-bootstrap";

const CreatePostForm = () => {
    return (
        <Form className="border border-3 border-secondary p-4">
            <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Mon super article..." />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control as="textarea" placeholder="Il était une fois...." rows={3} />
            </Form.Group>
            <Button variant="success">Créer l'article</Button>
        </Form>
    );
};

export default CreatePostForm;
