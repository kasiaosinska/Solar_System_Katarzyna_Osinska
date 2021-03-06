import React from 'react';
import { Col, Row} from 'react-bootstrap'


class Footer extends React.Component {

    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <Row className="icons">
                        <Col className="hidden-xs col-sm-4">
                            <img alt="Brand" src="./earth.png"/>
                        </Col>
                        <Col className="hidden-xs col-sm-4">
                            <img className="rocket-icon" alt="Brand" src="./rocket1.png" />
                        </Col>
                        <Col className="hidden-xs col-sm-4">
                            <img alt="Brand" src="./planet.png"/>
                        </Col>
                    </Row>
                </div>
            </footer>
        )
    }
}

export default Footer;