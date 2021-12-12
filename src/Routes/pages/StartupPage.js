import { Container, Row, Image, Col } from "react-bootstrap";
import LoginButton from "../../Components/Authentication/LoginButton";

const StartupPage = () => {

  return(
    <div style={{justifyContent: 'center', display: 'flex', paddingTop: 100}}>
      <Container>
        <Row>
          <Col md="auto">
            <Image src="https://kaientai-design.s3.eu-west-2.amazonaws.com/Logo/Logo+-+Black.png" alt="" style={{height: 100, margin: 15}}/>
          </Col>
        </Row>
        <Row style={{marginLeft: '40%', marginTop: 50}}>
          <LoginButton />
        </Row>
      </Container>
    </div>
  )
}

export default StartupPage;