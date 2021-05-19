import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { ADD_TO_FAV, REMOVE_FROM_FAV, RESET_TOAST_MESSAGE, SET_TOAST_MESSAGE } from '../store/actions'
import JobListing from './JobListing'

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => ({
    addToFav: job => dispatch({ type: ADD_TO_FAV, payload: job }),
    removeFromFav: job => dispatch({ type: REMOVE_FROM_FAV, payload: job }),
    displayMessage: message => {
        dispatch({ type: SET_TOAST_MESSAGE, payload: message })

        setTimeout(() => {
            dispatch({ type: RESET_TOAST_MESSAGE })
        }, 4000);
    }
})

class SearchPage extends React.Component {

    state = {
        description: "",
        location: "",
        results: []
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = async e => {
        e.preventDefault()
        const { description, location } = this.state
        const response = await fetch(`https://strive-proxy.herokuapp.com/https://jobs.github.com/positions.json?description=${description}&location=${location}`)

        if (!response.ok) this.props.displayMessage("ERROR")

        const results = await response.json()

        this.setState({ results })
    }

    render() {

        console.log(this.props)
        console.log(this.state)
        return <Container>
            <Row className="mt-5">
                <Col xs={12} md={8} className="mx-auto">
                    <h1>Search Jobs...</h1>
                    <Form onSubmit={this.handleSubmit}>
                        <div className="d-flex my-3">
                            <Form.Control name="description" className="me-1" type="search" placeholder="Search jobs" onChange={this.handleChange} />
                            <Form.Control name="location" type="search" placeholder="Location" onChange={this.handleChange} />
                        </div>
                        <Form.Control type="submit" value="Submit" />
                    </Form>
                    {this.state.results.map(result => {
                        const isFav = this.props.favourites.some(f => f.id === result.id)
                        return <JobListing job={result} isFav={isFav} addToFav={this.props.addToFav} removeFromFav={this.props.removeFromFav} displayMessage={this.props.displayMessage} />
                    })}
                </Col>
            </Row>
        </Container>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)