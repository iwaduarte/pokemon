import React, { useEffect, useState } from "react";
import Hero from "../../components/Hero/hero.jsx";
import Sidebar from "../../components/Sidebar/index.jsx";
import Modal from "../Modal/modal.jsx";

import { MapWrapper } from "./styled.js";
import { getData } from "../../query.jsx";
import { randomizePokemon } from "../../../utils.js";

const MapPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [shouldFetch, setShouldFetch] = useState(false);
  const [pokemonId, setPokemonId] = useState(randomizePokemon());
  const { data, hasError } = getData(`pokemon/${pokemonId}`, shouldFetch);
  const [action, setAction] = useState("create");
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemon, setPokemon] = useState(data);

  const lockActions = pokemonList.length >= 6;

  useEffect(() => {
    console.log("dataaa", data);
    setTimeout(() => {
      if (data?.id && !lockActions) {
        setAction("capture");
        setPokemon(data);
        setShowModal(true);
      }
    }, 1000);

    if (hasError) console.log("error", hasError);
  }, [data?.id, hasError]);

  const resetState = () => {
    setPokemonId(randomizePokemon());
    setShouldFetch(false);
    setAction(null);
    setShowModal(false);
  };

  const addPokemon = (pokemon) => {
    if (lockActions) return;
    setPokemonList([...pokemonList, pokemon]);
    resetState();
  };

  const removePokemon = (pokemon) => {
    setPokemonList(pokemonList.filter((p) => p.id !== pokemon.id));
    resetState();
    setPokemon({});
  };

  const updatePokemon = (pokemon) => {
    const index = pokemonList.findIndex((p) => p.id === pokemon.id);
    pokemonList[index] = pokemon;
    setPokemonList([...pokemonList]);
  };

  const handleView = (pokemonId) => {
    const pokemon = pokemonList.find((p) => p.id === pokemonId);
    setAction("release");
    setShowModal(true);
    setPokemon(pokemon);
  };

  const handleAction = (action, pokemon) => {
    if (action === "create" || action === "capture") return addPokemon(pokemon);
    if (action === "release") return removePokemon(pokemon);
  };

  return (
    <MapWrapper className="map">
      <Sidebar
        pokemonList={pokemonList}
        onClickAdd={() => {
          if (lockActions) return;
          setAction("create");
          setPokemon(null);
          setShowModal(true);
        }}
        onClickView={handleView}
      />
      <Hero
        isHeroLocked={lockActions}
        isFetching={shouldFetch}
        onClick={(state) => {
          if (lockActions) return;
          setShouldFetch(state);
        }}
      />
      {showModal && (
        <Modal
          data={pokemon}
          action={action}
          onAction={handleAction}
          onClose={resetState}
          onUpdate={updatePokemon}
        />
      )}
    </MapWrapper>
  );
};

export default MapPage;
