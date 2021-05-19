import { Col, Image, Button } from 'react-bootstrap'
import { Star, StarFill } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

export default function JobListing({ job, isFav, removeFromFav, addToFav, displayMessage }) {
    return <Col xs={12} className="d-flex">
        <Col xs={2}>
            <Image fluid className="result-img" src={job.company_logo} />
        </Col>
        <Col xs={10} className="ps-2">
            <h6 className="mt-3">{job.company}</h6>
            <Link to={`/${job.id}`} className="btn btn-primary">Show more</Link>

            {
                isFav
                    ?
                    <StarFill className="my-2" style={{ fontSize: '1.3em' }} onClick={() => removeFromFav(job)} />
                    :
                    <Star className="my-2" style={{ fontSize: '1.3em' }} onClick={() => addToFav(job)} />
            }

            <Button onClick={() => displayMessage(job.company + " " + job.title)} />
        </Col>
    </Col>
}