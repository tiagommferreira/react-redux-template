import React from "react";
import NavigationBar from './NavigationBar';
import { Grid, Row, Col } from 'react-bootstrap';

import styles from './Layout.scss';

export default class Layout extends React.Component {
    render() {
        const { location } = this.props;

        return (
            <div>
                <NavigationBar location={location} />
                <Grid className="containerTest">
                    <Row className="show-grid">
                        <Col lg={12}>
                            {this.props.children}
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}
