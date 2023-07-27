import { useEffect, useState } from "react";

import axios from "axios";

// Icones
import ArrowBack from '../../../../public/arrow_back.svg'
import BigPokebola from '../../../../public/big_pokebola.svg'
import PreviousPokemons from '../../../../public/previous_pokemon.svg'
import NextPokemons from '../../../../public/next_pokemon.svg'
import Weight from '../../../../public/weight.svg'
import Height from '../../../../public/height.svg'

// Props
import { PokemonProps } from "../../../interface/interface";

// Style
import * as S from "./styles";

// Rotas
import { useNavigate } from "react-router-dom";

// Config do Styled-components para aceitar a propriedade passada
import { StyleSheetManager } from "styled-components";

// Caso ocorra um erro na requisição
import DataError from "../../dataError/DataError";

const IndividualPokemon = () => {
  const [data, setData] = useState<PokemonProps[] | null>(null);
  const [numPokemon, setNumPokemon] = useState<null | number>(null);
  const [errorMessage, setErrorMessage] = useState<null | string>(null);

  const navigate = useNavigate();

  const get = async () => {
    // Pega o id do pokemon no localStorage para fazer a chamada para a APi
    setNumPokemon(Number(window.localStorage.getItem("Pokemon")));
    if (numPokemon) {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${numPokemon}/`
        );
        setData([response.data]);
        setErrorMessage(null)
      } catch (error: any) {
        console.log(error);
        setErrorMessage(error?.message)
      }
    }
  };

  // volta para o pokémon anterior
  const previousPokemon = () => {
    if (numPokemon !== null) {
      const newPokemon = window.localStorage.setItem(
        "Pokemon",
        String(numPokemon - 1)
      );
      setNumPokemon(Number(newPokemon));
    }
  };

  // passa para a o próximo pokémon
  const nextPokemon = () => {
    if (numPokemon !== null) {
      const newPokemon = window.localStorage.setItem(
        "Pokemon",
        String(numPokemon + 1)
      );
      setNumPokemon(Number(newPokemon));
    }
  };

  // volta para a home
  const handleHomeClick = () => {
    navigate("/API_Poke");
  };

  // executa a chamada para a API
  useEffect(() => {
    get();
  }, [numPokemon]);

  if (errorMessage) return <DataError errorMessage={errorMessage} />; // mostra isso caso de erro na requisição
  return (
    <>
      {data && data.map((res) => (
        <S.Container key={res.id} data-testid="test">
          <StyleSheetManager shouldForwardProp={(prop) => prop !== "bg"}>
            <S.Pokemon bg={data.map((i) => i.types[0].type.name)[0]}>
              <S.ContainerTitle>
                <S.Icon
                  src={ArrowBack}
                  alt="seta para voltar para a página principal"
                  onClick={handleHomeClick}
                />
                <S.Title>{res.name}</S.Title>
                <S.Id>#{res.id}</S.Id>
              </S.ContainerTitle>

              <S.BigPokebola
                src={BigPokebola}
                alt="Imagem de uma pokebola bem grande"
              />

              <S.ContainerImgPokemon>
                {numPokemon && numPokemon > 1 ? (
                  <S.Icon
                    src={PreviousPokemons}
                    alt="seta para voltar para outro pokémon"
                    onClick={previousPokemon}
                  />
                ) : (
                  <span></span>
                )}
                <S.ImgPokemon src={res.sprites.front_default} />
                <S.Icon
                  src={NextPokemons}
                  alt="seta para passar para outro pokémon"
                  onClick={nextPokemon}
                />
              </S.ContainerImgPokemon>

              <S.About>
                <S.ContainerType>
                  {res.types.map((type) => (
                    <S.Type bg={type.type.name} key={type.type.name}>
                      {type.type.name}
                    </S.Type>
                  ))}
                </S.ContainerType>

                <S.TitleAbout bg={data.map((i) => i.types[0].type.name)[0]}>
                  Sobre
                </S.TitleAbout>

                <S.Attributes>
                  <S.WeightAndHeight>
                    <S.ContentWeightAndHeight>
                      <S.IconWeightAndHeight
                        src={Weight}
                        alt="Icone que representa o peso"
                      />
                      <S.Paragraph>{res.weight} kg</S.Paragraph>
                    </S.ContentWeightAndHeight>
                    <p>Peso</p>
                  </S.WeightAndHeight>

                  <S.WeightAndHeight>
                    <S.ContentWeightAndHeight>
                      <S.IconWeightAndHeight
                        src={Height}
                        alt="Icone que representa o peso"
                      />
                      <S.Paragraph>{res.height} m</S.Paragraph>
                    </S.ContentWeightAndHeight>
                    <p>Altura</p>
                  </S.WeightAndHeight>

                  <S.Moves>
                    <S.ContentMoves>
                      <S.Paragraph>{res.moves[0].move.name}</S.Paragraph>
                      <S.Paragraph>{res.moves[1].move.name}</S.Paragraph>
                    </S.ContentMoves>
                    <p>Movimentos</p>
                  </S.Moves>
                </S.Attributes>

                <S.TitleAbout bg={data.map((i) => i.types[0].type.name)[0]}>
                  Estatísticas Básicas
                </S.TitleAbout>

                <S.Stats>
                  <S.StatsTitle bg={data.map((i) => i.types[0].type.name)[0]}>
                    <p>HP</p>
                    <p>ATK</p>
                    <p>DEF</p>
                    <p>SATK</p>
                    <p>SDEF</p>
                    <p>VEL</p>
                  </S.StatsTitle>

                  <S.StatsNumber>
                    <p>{res.stats[0].base_stat}</p>
                    <p>{res.stats[1].base_stat}</p>
                    <p>{res.stats[2].base_stat}</p>
                    <p>{res.stats[3].base_stat}</p>
                    <p>{res.stats[4].base_stat}</p>
                    <p>{res.stats[5].base_stat}</p>
                  </S.StatsNumber>

                  <S.ContainerPercentages>
                    <S.Percentages
                      bg={data.map((i) => i.types[0].type.name)[0]}
                    >
                      <S.Percent
                        bg={data.map((i) => i.types[0].type.name)[0]}
                        width={res.stats[0].base_stat}
                      ></S.Percent>
                    </S.Percentages>
                    <S.Percentages
                      bg={data.map((i) => i.types[0].type.name)[0]}
                    >
                      <S.Percent
                        bg={data.map((i) => i.types[0].type.name)[0]}
                        width={res.stats[1].base_stat}
                      ></S.Percent>
                    </S.Percentages>
                    <S.Percentages
                      bg={data.map((i) => i.types[0].type.name)[0]}
                    >
                      <S.Percent
                        bg={data.map((i) => i.types[0].type.name)[0]}
                        width={res.stats[2].base_stat}
                      ></S.Percent>
                    </S.Percentages>
                    <S.Percentages
                      bg={data.map((i) => i.types[0].type.name)[0]}
                    >
                      <S.Percent
                        bg={data.map((i) => i.types[0].type.name)[0]}
                        width={res.stats[3].base_stat}
                      ></S.Percent>
                    </S.Percentages>
                    <S.Percentages
                      bg={data.map((i) => i.types[0].type.name)[0]}
                    >
                      <S.Percent
                        bg={data.map((i) => i.types[0].type.name)[0]}
                        width={res.stats[4].base_stat}
                      ></S.Percent>
                    </S.Percentages>
                    <S.Percentages
                      bg={data.map((i) => i.types[0].type.name)[0]}
                    >
                      <S.Percent
                        bg={data.map((i) => i.types[0].type.name)[0]}
                        width={res.stats[0].base_stat}
                      ></S.Percent>
                    </S.Percentages>
                  </S.ContainerPercentages>
                </S.Stats>
              </S.About>
            </S.Pokemon>
          </StyleSheetManager>
        </S.Container>
      ))}
    </>
  );
};

export default IndividualPokemon;
