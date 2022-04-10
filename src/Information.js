import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { IconContext } from "react-icons";
import { BsTwitter, BsFacebook, BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';

export default function Information() {
  return (
    <Card id="card2">
    <Card.Title id="card-header">Artist Note's</Card.Title>
    <Accordion id="information-panel" defaultActiveKey="0" flush>
  <Accordion.Item eventKey="0">
    <Accordion.Header>Project Information</Accordion.Header>
    <Accordion.Body>
      This is a free NFT art project on the Rinkeby blockchain. Timeless Impressions is a collection that is inspired by the beauty of abstract art and woman figure...and its a great collection for testing dapps.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Supply Number</Accordion.Header>
    <Accordion.Body>
      There is a supply of 333 for this collection. This is an incredibly low supply count in comparison to other NFT projects. This is just a test collection however.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>Mint Limitations</Accordion.Header>
    <Accordion.Body>
      You can only mint two NFT per wallet. One of the goals and hopes for this project is to provide art for as many as possible from the start for people that want to test the dapp.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header>Roadmap</Accordion.Header>
    <Accordion.Body>
      There are no roadmaps for this collection. This is just to test and showcase web3 skills.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="4">
    <Accordion.Header>Traits and Reveal</Accordion.Header>
    <Accordion.Body>
      The traits are all equally calculated and there is no reveal. As soon as you mint, head to OpenSea to take a look at your new NFT.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="5">
    <Accordion.Header>Social Media</Accordion.Header>
    <Accordion.Body>
      There are no Discord channels or social media outlets for the collection since it's just used for testing. However this NFT project is "doxxed" and my information can be found below.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="6">
    <Accordion.Header>Founder Information</Accordion.Header>
    <Accordion.Body>
      Information and social media links regarding the project founder and creator can be found below.
      <br/>
      <div className="icon-container">
      <IconContext.Provider value={{ color: "black", size: "25px"}}>
      <a href="https://mobile.twitter.com/dmcdonald1991" target="_blank" rel="noreferrer"><BsTwitter id="icon"/></a>
      <a href="https://www.facebook.com/dominik.mcdonald.731" target="_blank" rel="noreferrer"><BsFacebook id="icon" /></a>
      <a href="https://www.instagram.com/nikolas0/?hl=en" target="_blank" rel="noreferrer"><BsInstagram id="icon" /></a>
      <a href="https://www.linkedin.com/in/dominik-mcdonald-a70ab2146" target="_blank" rel="noreferrer"><BsLinkedin id="icon" /></a>
      <a href="https://github.com/DDMcDonald91" target="_blank" rel="noreferrer"><BsGithub id="icon" /></a>
      </IconContext.Provider>
      </div>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
</Card>
  );
}
