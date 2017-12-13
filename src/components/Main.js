import React from 'react'
import { View, Button, Text } from 'react-native'
import { connect } from 'react-redux'
import * as actionTypes from '../redux/actionTypes/user'

class Main extends React.Component {
    componentDidUpdate() {
        console.log(this.props.user)
    }
    render() {
        return (
            <View>
                <Button
                    title='fetch user'
                    onPress={() => this.props.dispatch({ type: actionTypes.FETCH_USER })}
                />

                <Button
                    title='cancel fetch user'
                    onPress={() => this.props.dispatch({ type: actionTypes.CANCEL_FETCHING_USER })}
                />
                <Text>{this.props.number}</Text>
                <Text>{JSON.stringify(this.props.user)}</Text>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
        number: state.number
    }
}

export default connect(mapStateToProps)(Main)