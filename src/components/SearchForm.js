import React, { useState } from 'react';
import { Form, Button ,Col,Row} from 'react-bootstrap';

const SearchForm = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleInputChange = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
  };

  const handleSearch = (event) => {
    event.preventDefault();

    if (searchTerm.trim() !== '') {
      setErrorMsg('');
      props.handleSearch(searchTerm);
    } else {
      setErrorMsg('Please enter a search term.');
    }
  };

  return (
    <div>
      <Form onSubmit={handleSearch}>
        {errorMsg && <p className="errorMsg">{errorMsg}</p>}
        <Row>
        <Col xg={6}>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            type="search"
            name="searchTerm"
            value={searchTerm}
            placeholder="Search for album, artist or playlist"
            onChange={handleInputChange}
            autoComplete="off"
          />
        </Form.Group>
        </Col>
        <Col xl={3}>
        <Button style={{marginTop:"0px",width:"250px",height:"50px"}} variant="success" type="submit">
          Search
        </Button>
        </Col>
        </Row>
      </Form>
    </div>
  );
};

export default SearchForm;
