import { useEffect, useState } from "react";

import axios from "axios";

// Props
import { PokemonProps } from "../../../interface/interface";

// Style
import * as S from "./styles";

// Rotas
import { useNavigate } from "react-router-dom";

// Config do Styled-components para aceitar a propriedade passada
import { StyleSheetManager } from "styled-components";

const IndividualPokemon = () => {
  const [data, setData] = useState<PokemonProps[] | null>(null);

  // Pega o id do pokemon no localStorage para fazer a chamada para a APi
  const numPokemon = window.localStorage.getItem("Pokemon");

  const navigate = useNavigate();

  const get = async () => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${numPokemon}/`
      );
      console.log(response.data);
      setData([response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  useEffect(() => {
    get();
  }, []);

  if (data === null) return null;
  return (
    <>
      {data.map((res) => (
        <S.Container key={res.id}>
          <StyleSheetManager shouldForwardProp={(prop) => prop !== "bg"}>
            <S.Pokemon bg={data.map((i) => i.types[0].type.name)[0]}>
              <S.ContainerTitle>
                <S.Icon
                  src="/arrow_back.svg"
                  alt="seta para voltar para a página principal"
                  onClick={handleHomeClick}
                />
                <S.Title>{res.name}</S.Title>
                <S.Id>#{res.id}</S.Id>
              </S.ContainerTitle>

              <S.BigPokebola
                src="/big_pokebola.svg"
                alt="Imagem de uma pokebola bem grande"
              />

              <S.ContainerImgPokemon>
                <S.Icon
                  src="/previous_pokemon.svg"
                  alt="seta para voltar para outro pokémon"
                />
                <S.ImgPokemon src={res.sprites.front_default} />
                <S.Icon
                  src="/next_pokemon.svg"
                  alt="seta para passar para outro pokémon"
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
                        src="/weight.svg"
                        alt="Icone que representa o peso"
                      />
                      <S.Paragraph>{res.weight} kg</S.Paragraph>
                    </S.ContentWeightAndHeight>
                    <p>Peso</p>
                  </S.WeightAndHeight>

                  <S.WeightAndHeight>
                    <S.ContentWeightAndHeight>
                      <S.IconWeightAndHeight
                        src="/height.svg"
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
