import React from "react";

import {
  ContentWrapper,
  Header,
  InfoBox,
  PersonWrapper,
  Wrapper,
} from "./team.styles";

import TeamImage1 from "assets/images/13_team.jpg";
import TeamImage2 from "assets/images/14_team.jpg";
import TeamImage3 from "assets/images/15_team.jpg";
import TeamImage4 from "assets/images/16_team.jpg";
import MainImage from "assets/images/17_team.jpg";

const teamData = [
  {
    name: "Anna Żarczyńska",
    licence: 666,
    description:
      "Założycielka Modern Studio. Z wykształcenia prawnik, absolwentka UAM w Poznaniu. Doświadczenie zawodowe zdobywała w poznańskich kancelariach prawnych. Swoją pracę opiera na przyjaznych relacjach, szacunku i zaufaniu. Pasjonatka wyjątkowych wnętrz, niebanalnej architektury i sztuki w każdej postaci.",
    number: "730 026 439",
    email: "ania@msnieruchomosci.pl",
    image: TeamImage1,
  },
  {
    name: "Anna Żarczyńska",
    licence: 667,
    description:
      "Założycielka Modern Studio. Z wykształcenia prawnik, absolwentka UAM w Poznaniu. Doświadczenie zawodowe zdobywała w poznańskich kancelariach prawnych. Swoją pracę opiera na przyjaznych relacjach, szacunku i zaufaniu. Pasjonatka wyjątkowych wnętrz, niebanalnej architektury i sztuki w każdej postaci.",
    number: "730 026 439",
    email: "ania@msnieruchomosci.pl",
    image: TeamImage2,
  },
  {
    name: "Anna Żarczyńska",
    licence: 668,
    description:
      "Założycielka Modern Studio. Z wykształcenia prawnik, absolwentka UAM w Poznaniu. Doświadczenie zawodowe zdobywała w poznańskich kancelariach prawnych. Swoją pracę opiera na przyjaznych relacjach, szacunku i zaufaniu. Pasjonatka wyjątkowych wnętrz, niebanalnej architektury i sztuki w każdej postaci.",
    number: "730 026 439",
    email: "ania@msnieruchomosci.pl",
    image: TeamImage3,
  },
  {
    name: "Anna Żarczyńska",
    licence: 669,
    description:
      "Założycielka Modern Studio. Z wykształcenia prawnik, absolwentka UAM w Poznaniu. Doświadczenie zawodowe zdobywała w poznańskich kancelariach prawnych. Swoją pracę opiera na przyjaznych relacjach, szacunku i zaufaniu. Pasjonatka wyjątkowych wnętrz, niebanalnej architektury i sztuki w każdej postaci.",
    number: "730 026 439",
    email: "ania@msnieruchomosci.pl",
    image: TeamImage4,
  },
];

const Team = () => {
  return (
    <Wrapper>
      <Header image={MainImage}>
        <h4>Poznajmy się</h4>
        <p>
          Razem tworzymy wyjątkowy zespół. Zobacz, dlaczego warto z nami
          współpracować.
        </p>
        <p>⬇️</p>
      </Header>
      <ContentWrapper>
        {teamData.map((person) => {
          return (
            <PersonWrapper key={person.licence}>
              <img src={person.image} />
              <div>
                <h4> {person.name} </h4>
                <h5>Pośrednik nieruchomości nr licencji {person.licence}</h5>
                <p> {person.description} </p>
                <InfoBox>
                  <p> {person.email} </p>
                  <p> {person.number} </p>
                </InfoBox>
              </div>
            </PersonWrapper>
          );
        })}
      </ContentWrapper>
    </Wrapper>
  );
};

export default Team;
