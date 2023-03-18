import React, { useState } from "react";
import PropTypes from "prop-types";

import {
  Wrapper,
  Name,
  MainStatus,
  StatusBox,
  Stats,
  Stat,
  Box,
  ActionWrapper,
  Save,
  Edit,
  TypeStatus,
} from "./cardStyle.js";
import FormHeader from "../Header/formHeader.jsx";
import Tag from "../Tag/tag.jsx";
import InputText from "../InputText/index.jsx";
import Button from "../Button/addButton.jsx";

import shieldIcon from "../../assets/images/shield.png";
import swordIcon from "../../assets/images/sword.png";
import speedIcon from "../../assets/images/speed.png";
import pokeBallIcon from "../../assets/images/pokeball.png";
import editIcon from "../../assets/images/editIcon.png";
import saveIcon from "../../assets/images/checkIcon.png";
import cancelIcon from "../../assets/images/close.png";

const statsMap = {
  defense: { icon: shieldIcon, name: "DEFESA", order: 1 },
  attack: { icon: swordIcon, name: "ATAQUE", order: 2 },
  "special-defense": { icon: shieldIcon, name: "DEFESA ESPECIAL", order: 3 },
  "special-attack": { icon: swordIcon, name: "ATAQUE ESPECIAL", order: 4 },
  speed: { icon: speedIcon, name: "VELOCIDADE", order: 5 },
};

const ActionElement = ({ onClick, action }) => {
  const actions = {
    capture: (
      <img src={pokeBallIcon} alt={"Capturar Pokémon"} onClick={onClick} />
    ),
    release: <Button text="Liberar Pokemon" onClick={onClick} />,
  };
  return actions[action];
};

const Card = ({ data, action, onAction, onUpdate }) => {
  const {  weight, height, stats, types = [], abilities } = data || {};
  const [{ base_stat: hp }] = stats;
  const [edit, setEdit] = useState(false);
  const [pokemon, setPokemon] = useState(data);
  const isEditable = action === "release";

  const handleInputChange = (e) => {
    const { value } = e.target;
    const newPokemon = { ...data, name: value };
    setPokemon(newPokemon);
  };

  return (
    <Wrapper>
      {edit ? (
        <Edit>
          <InputText
            name={"name"}
            type={"text"}
            value={pokemon.name}
            onChange={handleInputChange}
          />
          <Save
            type="accept"
            onClick={() => {
              onUpdate(pokemon);
              setEdit(false);
            }}
          >
            <img src={saveIcon} alt="Salvar" />
          </Save>
          <Save type="cancel" onClick={() => setEdit(false)}>
            <img src={cancelIcon} alt="Cancelar" />
          </Save>
        </Edit>
      ) : (
        <Name>
          {pokemon.name}
          {isEditable && (
            <img src={editIcon} alt={"Edit"} onClick={() => setEdit(true)} />
          )}
        </Name>
      )}
      <MainStatus>
        <StatusBox>
          <div>HP</div>
          <span>
            {hp}/{hp}
          </span>
        </StatusBox>
        <StatusBox>
          <div>ALTURA</div>
          <span> {height} m</span>
        </StatusBox>
        <StatusBox>
          <div>PESO</div>
          <span> {weight} kg</span>
        </StatusBox>
      </MainStatus>

      <ActionWrapper>
        <ActionElement onClick={() => onAction(action, data)} action={action} />
      </ActionWrapper>

      <FormHeader text="Tipo" />
      <TypeStatus>
        {types?.map((type, index) => {
          const {
            slot,
            type: { name },
          } = type || { type: {} };
          return <Tag key={slot || index + 10} type={name} />;
        })}
      </TypeStatus>
      <FormHeader text="Habilidades" />
      <MainStatus>
        {abilities?.reduce((acc, { ability }, index) => {
          const { name } = ability;
          const nameUpperCase = name.toUpperCase();
          return !index ? nameUpperCase : `${nameUpperCase}, ${acc}`;
        }, "")}
      </MainStatus>

      {action === "release" && (
        <>
          <FormHeader text="Estatísticas" />
          <Stats>
            {stats?.reduce((acc, stat, index) => {
              const {
                base_stat,
                stat: { name },
              } = stat || { stat: {} };

              if (name === "hp") return acc;

              const { icon, name: nameStats, order } = statsMap[name] || {};

              const statElem = (
                <Stat key={index} order={order}>
                  <Box>
                    <div>
                      <img src={icon} alt={name} />
                    </div>
                    <span> {nameStats}</span>
                  </Box>
                  <span> {base_stat}</span>
                </Stat>
              );
              acc.push(statElem);
              return acc;
            }, [])}
          </Stats>
        </>
      )}
    </Wrapper>
  );
};

Card.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    weight: PropTypes.number,
    height: PropTypes.number,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        base_stat: PropTypes.number,
      })
    ),
    types: PropTypes.arrayOf(PropTypes.object),
    abilities: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      })
    ),
  }),
  action: PropTypes.oneOf(["capture", "release", "create"]),
};

export default Card;
