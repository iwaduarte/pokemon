import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { Camera, Main, Photo, Wrapper, Header } from "./modalStyled.js";
import Button from "../../components/Button/addButton.jsx";
import CloseButton from "../../components/Button/closeButton.jsx";
import iconPlus from "../../assets/images/plus.png";
import Form from "../../components/Form/form.jsx";
import Card from "../../components/Card/card.jsx";

const Modal = ({ data, action, onAction, onClose, onUpdate }) => {
  const {
    name,
    sprites: { front_default },
  } = data || { sprites: {} };

  const [image, setImage] = useState(front_default);
  const labelRef = useRef(null);

  const isCreating = action === "create";
  return (
    <Wrapper>
      <Header>
        <CloseButton onClick={onClose} />
      </Header>
      <Photo image={!isCreating || image}>
        {!isCreating || image ? (
          <img src={image} name={name} alt={"Pokémon"} />
        ) : (
          <label ref={labelRef} htmlFor="image">
            <Camera>
              <Button
                icon={iconPlus}
                borderColor={"#fff"}
                small
                onClick={() => labelRef.current.click()}
              />
            </Camera>
          </label>
        )}
      </Photo>
      <Main>
        {!isCreating ? (
          <Card
            data={data}
            action={action}
            onAction={onAction}
            onUpdate={onUpdate}
          />
        ) : (
          <Form onSubmit={onAction} setImage={setImage} action={action} />
        )}
      </Main>
    </Wrapper>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onAction: PropTypes.func.isRequired,
  data: PropTypes.shape({
    name: PropTypes.string,
    sprites: PropTypes.shape({}),
    action: PropTypes.string,
  }),
};

export default Modal;
