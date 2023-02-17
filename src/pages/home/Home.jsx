import React, { Component } from "react";
import Container from "../../components/atoms/container/Container";
import Carousel from "../../components/_components/carousel/Carousel";
import Categories from "../../components/_components/categories/Categories";
import Header from "../../components/_components/header/Header";
import Suggestions from "../../components/_components/suggestions/Suggestions";
import Cod from "../../components/_components/_recommendations/cod/Cod";
import NewMember from "../../components/_components/_recommendations/newMember/NewMember";
import styled from "styled-components";
import Catalogs from "../../components/_components/catalogs/Catalogs";
import Footer from "../../components/_components/footer/Footer";
import { getWindowDimensions } from "../../functions/getWindowDimensions";

const BreakSection = styled.div`
  min-width: 100vh;
  height: ${(props) => props.h || "10px"};
  margin-top: 1rem;
  z-index: 99;
  background: ${(props) =>
    props.bg ? props.theme.text.gray : props.theme.gray};
`;

class Home extends Component {
  state = {
    width: 0,
  };

  componentDidMount() {
    const { width } = getWindowDimensions();

    this.setState({ width });
  }
  render() {
    const { width } = this.state;
    return (
      <>
        <Header />
        {/* main content */}
        <Container pt="4rem">
          <Carousel />
          {/* on mobile set hidden */}
          {width > 600 && <Categories />}
          <NewMember />
          <Cod />
        </Container>
        {/* <BreakSection />
        <Container>
          <Suggestions />
          <Catalogs />
        </Container>
        <BreakSection h="2px" />
        <Container>
          <Footer />
        </Container> */}
      </>
    );
  }
}

export default Home;
