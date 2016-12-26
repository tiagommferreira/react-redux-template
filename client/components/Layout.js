import React from "react";
import NavigationBar from './NavigationBar';
import { Grid, Row, Col } from 'react-bootstrap';

export default class Layout extends React.Component {
	render() {
		const { location } = this.props;
		const containerStyle = {
			marginTop: "60px"
		};
		
		return (
			<div>
				<NavigationBar location={location} />
				<Grid style={containerStyle}>
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
