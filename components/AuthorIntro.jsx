import { Col, Media, Image } from "react-bootstrap";

const AuthorIntro = () => (
  <Media className="flex-column flex-md-row-reverse mb-4 admin-intro align-items-center">
    <Col md="4" className="d-flex justify-content-center">
      {/* AUTHOR INTRO STARTS */}
      <Image
        roundedCircle
        width={300}
        height={300}
        className="img-fluid mr-3"
        src="img/man.png"
        alt="Generic placeholder"
      />
    </Col>
    <Col md="8" className="mt-4 mt-md-0">
      <Media.Body>
        <h5 className="font-weight-bold mb-0 text-center">
          Hi there, I’m <span className="text-gradient">Trung</span> 👋
        </h5>
        <p className="welcome-text mt-2 mt-md-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          malesuada nisi tellus, non imperdiet nisi tempor at. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore.
        </p>
      </Media.Body>
    </Col>
    {/* AUTHOR INTRO ENDS */}
  </Media>
);

export default AuthorIntro;
