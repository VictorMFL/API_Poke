import styled from "styled-components";

interface ColorPokemonProps extends React.HTMLAttributes<HTMLDivElement> {
  bg: string;
  width?: number;
}

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.grayscale.white};
  font-family: ${(props) => props.theme.fonts.poppins};
`;

export const Pokemon = styled.div<ColorPokemonProps>`
  position: relative;
  display: flex;
  width: 390px;
  min-height: 100vh;
  padding: 4px;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${(props) =>
    props.bg === "fire"
      ? props.theme.colors.pokemonType.fire
      : props.bg === "bug"
      ? props.theme.colors.pokemonType.bug
      : props.bg === "dark"
      ? props.theme.colors.pokemonType.dark
      : props.bg === "dragon"
      ? props.theme.colors.pokemonType.dragon
      : props.bg === "electric"
      ? props.theme.colors.pokemonType.eletric
      : props.bg === "fairy"
      ? props.theme.colors.pokemonType.fairy
      : props.bg === "fighting"
      ? props.theme.colors.pokemonType.fighting
      : props.bg === "flying"
      ? props.theme.colors.pokemonType.flying
      : props.bg === "ghost"
      ? props.theme.colors.pokemonType.normal
      : props.bg === "grass"
      ? props.theme.colors.pokemonType.grass
      : props.bg === "ground"
      ? props.theme.colors.pokemonType.ground
      : props.bg === "ice"
      ? props.theme.colors.pokemonType.ice
      : props.bg === "poison"
      ? props.theme.colors.pokemonType.poison
      : props.bg === "psychic"
      ? props.theme.colors.pokemonType.psychic
      : props.bg === "rock"
      ? props.theme.colors.pokemonType.rock
      : props.bg === "steel"
      ? props.theme.colors.pokemonType.steel
      : props.bg === "water"
      ? props.theme.colors.pokemonType.water
      : props.theme.colors.pokemonType.normal};

      @media (max-width: 400px) {
        max-width: 100%;
      }
`;

export const ContainerTitle = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 0.5rem;
  padding: 20px 20px 24px 20px;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.grayscale.white};
`;

export const Id = styled.p`
  font-size: 1rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.grayscale.white};
`;

export const Icon = styled.img`
  cursor: pointer;
`;

export const BigPokebola = styled.img`
  position: absolute;
  right: 8px;
  top: 8px;
  z-index: 1000;
`;

export const ContainerImgPokemon = styled.div`
  width: 100%;
  margin-top: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
`;

export const ImgPokemon = styled.img`
  width: 150px;
`;

export const About = styled.div`
  width: 100%;
  min-height: 200px;
  margin-top: -3rem;
  display: flex;
  padding: 40px 20px 20px 20px;
  background-color: ${(props) => props.theme.colors.grayscale.white};
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.25) inset;
  border-radius: 8px;
`;

export const ContainerType = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const Type = styled.span<ColorPokemonProps>`
  padding: 2px 8px;
  border-radius: 10px;
  color: ${(props) => props.theme.colors.grayscale.white};
  font-weight: 700;
  font-size: 1rem;
  background-color: ${(props) =>
    props.bg === "fire"
      ? props.theme.colors.pokemonType.fire
      : props.bg === "bug"
      ? props.theme.colors.pokemonType.bug
      : props.bg === "dark"
      ? props.theme.colors.pokemonType.dark
      : props.bg === "dragon"
      ? props.theme.colors.pokemonType.dragon
      : props.bg === "electric"
      ? props.theme.colors.pokemonType.eletric
      : props.bg === "fairy"
      ? props.theme.colors.pokemonType.fairy
      : props.bg === "fighting"
      ? props.theme.colors.pokemonType.fighting
      : props.bg === "flying"
      ? props.theme.colors.pokemonType.flying
      : props.bg === "ghost"
      ? props.theme.colors.pokemonType.normal
      : props.bg === "grass"
      ? props.theme.colors.pokemonType.grass
      : props.bg === "ground"
      ? props.theme.colors.pokemonType.ground
      : props.bg === "ice"
      ? props.theme.colors.pokemonType.ice
      : props.bg === "poison"
      ? props.theme.colors.pokemonType.poison
      : props.bg === "psychic"
      ? props.theme.colors.pokemonType.psychic
      : props.bg === "rock"
      ? props.theme.colors.pokemonType.rock
      : props.bg === "steel"
      ? props.theme.colors.pokemonType.steel
      : props.bg === "water"
      ? props.theme.colors.pokemonType.water
      : props.theme.colors.pokemonType.normal};
`;

export const TitleAbout = styled.h1<ColorPokemonProps>`
  width: 100%;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 700;
  color: ${(props) =>
    props.bg === "fire"
      ? props.theme.colors.pokemonType.fire
      : props.bg === "bug"
      ? props.theme.colors.pokemonType.bug
      : props.bg === "dark"
      ? props.theme.colors.pokemonType.dark
      : props.bg === "dragon"
      ? props.theme.colors.pokemonType.dragon
      : props.bg === "electric"
      ? props.theme.colors.pokemonType.eletric
      : props.bg === "fairy"
      ? props.theme.colors.pokemonType.fairy
      : props.bg === "fighting"
      ? props.theme.colors.pokemonType.fighting
      : props.bg === "flying"
      ? props.theme.colors.pokemonType.flying
      : props.bg === "ghost"
      ? props.theme.colors.pokemonType.normal
      : props.bg === "grass"
      ? props.theme.colors.pokemonType.grass
      : props.bg === "ground"
      ? props.theme.colors.pokemonType.ground
      : props.bg === "ice"
      ? props.theme.colors.pokemonType.ice
      : props.bg === "poison"
      ? props.theme.colors.pokemonType.poison
      : props.bg === "psychic"
      ? props.theme.colors.pokemonType.psychic
      : props.bg === "rock"
      ? props.theme.colors.pokemonType.rock
      : props.bg === "steel"
      ? props.theme.colors.pokemonType.steel
      : props.bg === "water"
      ? props.theme.colors.pokemonType.water
      : props.theme.colors.pokemonType.normal};
`;

export const Attributes = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WeightAndHeight = styled.div`
  width: 33%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.grayscale.medium};
  font-size: 14px;
  font-weight: 400;
  border-right: 1px solid ${(props) => props.theme.colors.grayscale.light};
`;

export const ContentWeightAndHeight = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0;
`;

export const IconWeightAndHeight = styled.img`
  width: 1.8rem;
  height: 1.8rem;
`;

export const Paragraph = styled.p`
  font-size: 0.9rem;
  font-weight: 400;
  color: ${(props) => props.theme.colors.grayscale.dark};
  flex-wrap: wrap;
  text-align: center;

  &::first-letter {
    text-transform: uppercase;
  }
`;

export const Moves = styled.div`
  width: 33%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.grayscale.medium};
  font-size: 14px;
  font-weight: 400;
`;

export const ContentMoves = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.2rem 0;
`;

export const Stats = styled.div`
width: 100%;
  display: grid;
  grid-template-columns: auto auto 1fr;
  gap: 0.5rem;
`;

export const StatsTitle = styled.div<ColorPokemonProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
  border-right: 1px solid ${(props) => props.theme.colors.grayscale.light};
  font-weight: 700;
  color: ${(props) =>
    props.bg === "fire"
      ? props.theme.colors.pokemonType.fire
      : props.bg === "bug"
      ? props.theme.colors.pokemonType.bug
      : props.bg === "dark"
      ? props.theme.colors.pokemonType.dark
      : props.bg === "dragon"
      ? props.theme.colors.pokemonType.dragon
      : props.bg === "electric"
      ? props.theme.colors.pokemonType.eletric
      : props.bg === "fairy"
      ? props.theme.colors.pokemonType.fairy
      : props.bg === "fighting"
      ? props.theme.colors.pokemonType.fighting
      : props.bg === "flying"
      ? props.theme.colors.pokemonType.flying
      : props.bg === "ghost"
      ? props.theme.colors.pokemonType.normal
      : props.bg === "grass"
      ? props.theme.colors.pokemonType.grass
      : props.bg === "ground"
      ? props.theme.colors.pokemonType.ground
      : props.bg === "ice"
      ? props.theme.colors.pokemonType.ice
      : props.bg === "poison"
      ? props.theme.colors.pokemonType.poison
      : props.bg === "psychic"
      ? props.theme.colors.pokemonType.psychic
      : props.bg === "rock"
      ? props.theme.colors.pokemonType.rock
      : props.bg === "steel"
      ? props.theme.colors.pokemonType.steel
      : props.bg === "water"
      ? props.theme.colors.pokemonType.water
      : props.theme.colors.pokemonType.normal};
`;

export const StatsNumber = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
  font-weight: 400;
  color: ${(props) => props.theme.colors.grayscale.dark};
`;

export const ContainerPercentages = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Percentages = styled.div<ColorPokemonProps>`
  width: 100%;
  height: 4px;
  border-radius: 4px;
  opacity: 0.9;
  margin: 11px 0;
  background-color: ${(props) => props.theme.colors.grayscale.medium};
`;

export const Percent = styled.div<ColorPokemonProps>`
  width: ${(props) => (props.width !== undefined ? `${(props.width / 250) * 100}%` : '0%')};
  height: 4px;
  background-color: ${(props) =>
    props.bg === "fire"
      ? props.theme.colors.pokemonType.fire
      : props.bg === "bug"
      ? props.theme.colors.pokemonType.bug
      : props.bg === "dark"
      ? props.theme.colors.pokemonType.dark
      : props.bg === "dragon"
      ? props.theme.colors.pokemonType.dragon
      : props.bg === "electric"
      ? props.theme.colors.pokemonType.eletric
      : props.bg === "fairy"
      ? props.theme.colors.pokemonType.fairy
      : props.bg === "fighting"
      ? props.theme.colors.pokemonType.fighting
      : props.bg === "flying"
      ? props.theme.colors.pokemonType.flying
      : props.bg === "ghost"
      ? props.theme.colors.pokemonType.normal
      : props.bg === "grass"
      ? props.theme.colors.pokemonType.grass
      : props.bg === "ground"
      ? props.theme.colors.pokemonType.ground
      : props.bg === "ice"
      ? props.theme.colors.pokemonType.ice
      : props.bg === "poison"
      ? props.theme.colors.pokemonType.poison
      : props.bg === "psychic"
      ? props.theme.colors.pokemonType.psychic
      : props.bg === "rock"
      ? props.theme.colors.pokemonType.rock
      : props.bg === "steel"
      ? props.theme.colors.pokemonType.steel
      : props.bg === "water"
      ? props.theme.colors.pokemonType.water
      : props.theme.colors.pokemonType.normal};
`;
