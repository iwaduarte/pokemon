import React from "react";
import PropTypes from "prop-types";
import { ErrorMessageStyled, FileInput, Wrapper } from "./formStyled.js";
import { Form as FForm, Formik } from "formik";
import InputText from "../InputText/index.jsx";
import InputNumber from "../InputNumber/index.jsx";
import Dropdown from "../Dropdown";
import Button from "../Button/addButton.jsx";
import FormHeader from "../Header/formHeader.jsx";

import shieldIcon from "../../assets/images/shield.png";
import swordIcon from "../../assets/images/sword.png";
import speedIcon from "../../assets/images/speed.png";
import { createPokemonSchema } from "../../schema/createPokemon.js";
import { localization } from "../../localization.js";
import { randomIntFromInterval } from "../../../utils.js";

const _initialValues = {
  id: randomIntFromInterval(9999, 1000),
  name: "",
  weight: "",
  height: "",
  sprites: { front_default: "" },

  types: [{ slot: 0, type: { name: "" } }],
  stats: [
    {
      base_stat: "",
      stat: {
        name: "hp",
      },
    },
    {
      base_stat: "",
      stat: {
        name: "attack",
      },
    },
    {
      base_stat: "",
      stat: {
        name: "defense",
      },
    },
    {
      base_stat: "",
      stat: {
        name: "special-attack",
      },
    },
    {
      base_stat: "",
      stat: {
        name: "special-defense",
      },
    },
    {
      base_stat: "",
      stat: {
        name: "speed",
      },
    },
  ],
  abilities: [
    { ability: { slot: 0, name: "" } },
    { ability: { slot: 1, name: "" } },
    { ability: { slot: 2, name: "" } },
    { ability: { slot: 3, name: "" } },
  ],
};

const options = Object.entries(localization).map(([key, value]) => ({
  value: key,
  label: value,
}));

const Form = ({
  initialValues = _initialValues,
  onSubmit,
  setImage,
  action,
}) => {
  const handleSubmit = (values ) => {
    onSubmit(action, values);
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={createPokemonSchema}
        onSubmit={handleSubmit}
      >
        {({
          handleBlur,
          handleChange,
          values,
          setFieldValue,
        }) => {
          const handleImageChange = (e) => {
            const file = e.target?.files[0];
            if (!file) return;
            const url = URL.createObjectURL(file);
            setFieldValue("sprites.front_default", url);
            setImage(url);
          };

          return (
            <FForm>
              <Wrapper>
                <FileInput
                  name="sprites.front_default"
                  id="image"
                  type="file"
                  onChange={handleImageChange}
                  accept="image/*"
                />
                <ErrorMessageStyled
                  name="sprites.front_default"
                  component="div"
                />

                <InputText
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  name="name"
                  type="text"
                  label="Nome"
                  placeholder="Nome"
                >
                  <ErrorMessageStyled name="name" component="div" />
                </InputText>

                <InputNumber
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.stats[0].base_stat}
                  name="stats[0].base_stat"
                  label="HP"
                  placeholder="HP"
                  setValue={setFieldValue}
                >
                  <ErrorMessageStyled
                    name="stats[0].base_stat"
                    component="div"
                  />
                </InputNumber>

                <InputNumber
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.weight}
                  name="weight"
                  label="Peso"
                  placeholder="Peso"
                  suffix="Kg"
                  setValue={setFieldValue}
                >
                  <ErrorMessageStyled name="weight" component="div" />
                </InputNumber>

                <InputNumber
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.height}
                  name="height"
                  label="Altura"
                  placeholder="Altura"
                  suffix="Cm"
                  setValue={setFieldValue}
                >
                  <ErrorMessageStyled name="height" component="div" />
                </InputNumber>

                <FormHeader text="Tipo" />

                <Dropdown
                  placeholder="Selecione o(s) tipo(s)"
                  options={options}
                  name="types"
                  onChange={(value) => {
                    const [first, second] = value;
                     setFieldValue("types[0].type.name", first);
                     setFieldValue("types[1].type.name", second);
                  }}
                  onBlur={handleBlur}
                />
                <ErrorMessageStyled name="types[0].name" component="div" />

                <FormHeader text="Habilidades" />

                <InputText
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.abilities[0].ability.name}
                  name="abilities[0].ability.name"
                  type="text"
                  placeholder="Habilidade 1"
                >
                  <ErrorMessageStyled
                    name="abilities[0].ability.name"
                    component="div"
                  />
                </InputText>

                <InputText
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.abilities[1].ability.name}
                  name="abilities[1].ability.name"
                  type="text"
                  placeholder="Habilidade 2"
                >
                  <ErrorMessageStyled
                    name="abilities[1].ability.name"
                    component="div"
                  />
                </InputText>

                <InputText
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="abilities[2].ability.name"
                  value={values.abilities[2].ability.name}
                  type="text"
                  placeholder="Habilidade 3"
                >
                  <ErrorMessageStyled
                    name="abilities[2].ability.name"
                    component="div"
                  />
                </InputText>
                <InputText
                  name="abilities[3].ability.name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.abilities[3].ability.name}
                  type="text"
                  placeholder="Habilidade 4"
                >
                  <ErrorMessageStyled
                    name="abilities[3].ability.name"
                    component="div"
                  />
                </InputText>
                <FormHeader text="Estatisticas" />

                <InputNumber
                  label="DEFESA"
                  name="stats[2].base_stat"
                  value={values.stats[2].base_stat}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  icon={shieldIcon}
                  placeholder="00"
                  setValue={setFieldValue}
                >
                  <ErrorMessageStyled
                    name="stats[2].base_stat"
                    component="div"
                  />
                </InputNumber>
                <InputNumber
                  label="ATAQUE"
                  name="stats[1].base_stat"
                  value={values.stats[1].base_stat}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  icon={swordIcon}
                  placeholder="00"
                  setValue={setFieldValue}
                >
                  <ErrorMessageStyled
                    name="stats[1].base_stat"
                    component="div"
                  />
                </InputNumber>
                <InputNumber
                  label="DEFESA ESPECIAL"
                  name="stats[4].base_stat"
                  onChange={handleChange}
                  value={values.stats[4].base_stat}
                  onBlur={handleBlur}
                  icon={shieldIcon}
                  placeholder="00"
                  setValue={setFieldValue}
                >
                  <ErrorMessageStyled
                    name="stats[4].base_stat"
                    component="div"
                  />
                </InputNumber>

                <InputNumber
                  label="ATAQUE ESPECIAL"
                  name="stats[3].base_stat"
                  value={values.stats[3].base_stat}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  icon={swordIcon}
                  placeholder="00"
                  setValue={setFieldValue}
                >
                  <ErrorMessageStyled
                    name="stats[3].base_stat"
                    component="div"
                  />
                </InputNumber>
                <InputNumber
                  label="VELOCIDADE"
                  name="stats[5].base_stat"
                  value={values.stats[5].base_stat}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  icon={speedIcon}
                  placeholder="00"
                  setValue={setFieldValue}
                >
                  <ErrorMessageStyled
                    name="stats[5].base_stat"
                    component="div"
                  />
                </InputNumber>
                <Button text="Criar Pokemon" type="submit" />
              </Wrapper>
            </FForm>
          );
        }}
      </Formik>
    </div>
  );
};

Form.propTypes = {
  initialValues: PropTypes.object,
};

export default Form;
