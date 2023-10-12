import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function LearnMore() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Our Mission">
        <p>Our Mission: To provide information that will help you and your family enjoy a fun, relaxing, and memorable Disneyland experience.</p>
      </Tab>
      <Tab eventKey="profile" title="Founders">
        <p>Reviews found on this page are selected from random public postings found across the web.</p>
      </Tab>
      <Tab eventKey="contact" title="Contact">
        <p>Email Megan at esler6724@gmail.com for feedback on this website!</p>
      </Tab>
    </Tabs>
  );
}

export default LearnMore;