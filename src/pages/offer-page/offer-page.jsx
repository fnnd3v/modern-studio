import axios from "axios";
import React, { useEffect, useState } from "react";

import { NavLink, useParams, Outlet } from "react-router-dom";

import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  padding: 110px 30px 10px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.color.black};
  h3 {
    font-family: ${({ theme }) => theme.font.family.cormorant};
    font-size: ${({ theme }) => theme.font.size.headingSmall};
    margin-bottom: 30px;
    font-weight: 400;

    span {
      position: relative;
      &::before {
        content: "";
        position: absolute;
        top: -15%;
        left: -60px;
        background-color: ${({ theme }) => theme.color.beige};
        width: calc(100% + 65px);
        height: 150%;
        z-index: -90;
      }
    }
  }
  div {
    margin: 50px auto;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  ${({ theme }) => theme.mq.desktop} {
    width: 40%;
    margin: 0 auto;
    text-align: center;
  }
`;

const StyledLink = styled(NavLink)`
  color: ${({ theme }) => theme.color.black};
  text-decoration: none;
  padding: 10px;
`;

const ContentWrapper = styled.div`
  width: 100%;

  ${({ theme }) => theme.mq.desktop} {
    width: 90%;
    margin: 20px auto;
    display: flex;
    flex-wrap: wrap;
    position: relative;

    &::after,
    &::before {
      content: "";
      position: absolute;
      background-color: ${({ theme }) => theme.color.black};
      margin: -25px;
      top: 0;
      left: 0;
    }

    &::after {
      width: 120px;
      height: 18px;
    }

    &::before {
      width: 18px;
      height: 120px;
    }
  }
`;

const OfferItem = styled.div`
  cursor: pointer;
  position: relative;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)),
    url(${({ image }) => image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 300px;
  margin: 10px auto;
  /* color: ${({ theme }) => theme.color.beige}; */
  color: white;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 30px;
  flex-direction: column;

  h4 {
    margin-top: 15px;
  }

  ${({ theme }) => theme.mq.desktop} {
    flex: 1 0 21%;
    margin: 10px;
  }
`;

const EmptyItems = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: ${({ theme }) => theme.font.size.headingMobile};
    color: ${({ theme }) => theme.color.black};
  }
`;

const OfferPage = () => {
  const [data, setData] = useState([]);

  const [apartments, setApartments] = useState([]);
  const [houses, setHouses] = useState([]);
  const [plots, setPlots] = useState([]);

  const { type } = useParams();

  const [activeCategory, setActiveCategory] = useState(apartments);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    switch (type) {
      case "mieszkania":
        setActiveCategory(apartments);
        break;
      case "domy":
        setActiveCategory(houses);
        break;
      case "dzialki":
        setActiveCategory(plots);
        break;

      default:
        break;
    }
  }, [type]);

  useEffect(() => {
    data.map((item) => {
      if (item.buildingType === "apartment") {
        setApartments((prevState) => [...prevState, item]);
        setActiveCategory((prevState) => [...prevState, item]);
      }
      if (item.buildingType === "house")
        setHouses((prevState) => [...prevState, item]);
      if (item.buildingType === "plot")
        setPlots((prevState) => [...prevState, item]);
    });
  }, [data]);

  window.apartments = apartments;
  window.houses = houses;
  window.plots = plots;
  window.active = activeCategory;

  const endpoint = "https://graphql.datocms.com/";

  const headers = {
    Authorization: "bearer d85514457e45c6b8f6b50354da2788",
  };

  const graphqlQuery = {
    operationName: "fetchOffers",
    query: `{
  allOffers {
    buildingType
    description
    surface
    id
    availability
    title
    adress
    typeOfOffer
    images {
      id
      url
    }
    nameAndSurname
    phoneNumber
    email
  }
}`,
  };

  const fetchData = async () => {
    const { data } = await axios({
      url: endpoint,
      method: "post",
      headers: headers,
      data: graphqlQuery,
    });
    setData(data.data.allOffers);
  };

  return (
    <Wrapper>
      <HeaderWrapper>
        <h3>
          <span>Nasza ofe</span>rta
        </h3>
        <p>
          Nieustannie poszukujemy nowych ofert nieruchomości. Wybierz typ
          nieruchomości, który Cię interesuje.
        </p>
        <div>
          <StyledLink to="/oferty/mieszkania">Mieszkania</StyledLink>
          <StyledLink to="/oferty/domy">Domy</StyledLink>
          <StyledLink to="/oferty/dzialki">Działki</StyledLink>
        </div>
      </HeaderWrapper>
      <ContentWrapper>
        {activeCategory.length > 0 ? (
          activeCategory.map((apartment) => {
            return (
              <OfferItem key={apartment.id} image={apartment.images[0].url}>
                <p> {apartment.adress} </p>
                <h4> {apartment.title} </h4>
              </OfferItem>
            );
          })
        ) : (
          <EmptyItems>
            {" "}
            <p>Niestety, nic tu nie ma.</p>{" "}
          </EmptyItems>
        )}
      </ContentWrapper>
      <Outlet />
    </Wrapper>
  );
};

export default OfferPage;
