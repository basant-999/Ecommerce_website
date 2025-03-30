import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Inserdata = () => {
  return (
  <>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>product name</Form.Label>
        <Form.Control type="text" placeholder="Enter product" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Price</Form.Label>
        <Form.Control type="text" placeholder="enter price" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>data</Form.Label>
        <Form.Control type="text" placeholder="inter data" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>data</Form.Label>
        <Form.Select id="disabledSelect">
            <option>Fruits</option>
            <option>Non vag</option>
            <option>Dairy&bakery</option>
            <option>frozen</option>
            <option>personal care</option>
            <option>Kitchen/home</option>

          </Form.Select>
      </Form.Group>
    
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  </>
  )
}

export default Inserdata