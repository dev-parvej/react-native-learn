import React from 'react'
import { Header } from '../components'
import Library from './Libraries/Libraries'

const main = props => {
    return (
        <React.Fragment>
            <Header title="Stack" />
            <Library />
        </React.Fragment>
    );
}

export default main;