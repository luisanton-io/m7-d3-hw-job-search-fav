import React from 'react'
import { REMOVE_FROM_FAV } from '../store/actions'
import JobListing from './JobListing'
import { connect } from 'react-redux'
const mapStateToProps = state => state

const mapDispatchToProps = dispatch => ({
    removeFromFav: job => dispatch({ type: REMOVE_FROM_FAV, payload: job }),
})

class FavouritesPage extends React.Component {
    render() {
        console.log(this.props)
        return <>{
            this.props.favourites
                ? this.props.favourites.map(fav => (
                    <JobListing isFav job={fav} removeFromFav={this.props.removeFromFav} />
                ))
                : null
        }</>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavouritesPage)