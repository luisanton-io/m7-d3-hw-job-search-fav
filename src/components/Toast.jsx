import React from 'react'

import { Alert } from 'react-bootstrap'
import { connect } from 'react-redux'

const mapStateToProps = state => state

class Toast extends React.Component {
    render() {
        return this.props.toast.message
            ? <Alert variant="info" style={{ position: 'fixed', bottom: '1em', left: '1em' }}>
                {this.props.toast.message}
            </Alert>
            : null
    }
}

export default connect(mapStateToProps)(Toast)