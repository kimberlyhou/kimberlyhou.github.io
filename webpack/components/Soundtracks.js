import React, { Component } from "react";
import { css } from "glamor";
import glamorous from "glamorous";
import { Container, Row, Col } from "glamorous-grid";

const Paragraph = glamorous.p({
  fontSize: 18,
  lineHeight: "normal"
});

const Heading = glamorous.h2({
  fontSize: 22,
  textAlign: "center",
  marginTop: 0,
  marginBottom: 20
});

const Div = glamorous.div({
  marginTop: 10
});

const style = {
  Container: {
    marginTop: 20,
    marginBottom: 30
  },
  Hyperlink: {
    display: "inline-block",
    textDecoration: "none"
  },
  Image: {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain",
    marginBottom: 10
  }
};

class Soundtracks extends Component {
  render() {
    return (
      <Container
        css={{
          marginTop: "5vh",
          marginBottom: "10vh"
        }}
      >
        <Row justifyContent="center">
          <Col>
            <Heading>Soundtracks and Film Music</Heading>
          </Col>
        </Row>
        <Row justifyContent="between">
          <Col>
            <div>
              <Paragraph>
                Below are a few highlights of my recent work composing music for
                films, podcasts, and video games.
              </Paragraph>
            </div>
          </Col>
        </Row>
        <Row justifyContent="between">
          <Col span={{ lg: 6 / 12 }}>
            <Div>
              <iframe
                width="100%"
                height="166"
                scrolling="yes"
                frameborder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/472716414&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
              />
            </Div>
            <Div>
              <iframe
                width="100%"
                height="166"
                scrolling="yes"
                frameborder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/496904949&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
              />
            </Div>
            <Div>
              <iframe
                width="100%"
                height="166"
                scrolling="yes"
                frameborder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/565236132&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
              />
            </Div>
          </Col>
          <Col span={{ lg: 6 / 12 }}>
            <Div>
              <iframe
                width="100%"
                height="166"
                scrolling="yes"
                frameborder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/565218903&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
              />
            </Div>
            <Div>
              <iframe
                width="100%"
                height="166"
                scrolling="yes"
                frameborder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/565217757&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
              />
            </Div>
            <Div>
              <iframe
                width="100%"
                height="166"
                scrolling="yes"
                frameborder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/569140290&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
              />
            </Div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Soundtracks;
