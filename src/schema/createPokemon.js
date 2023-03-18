import * as Yup from "yup";

const createPokemonSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Nome maior que 2 caracteres!")
    .max(10, "Nome menor que 10 caracteres!")
    .required("O nome é obrigatório"),
  sprites: Yup.object().shape({
    front_default: Yup.string().required("A imagem é obrigatória"),
  }),
  weight: Yup.number("O campo deve ser um número")
    .required("O peso é obrigatório")
    .positive("O campo deve ser um número positivo"),
  height: Yup.number("O campo deve ser um número")
    .required("A altura é obrigatória")
    .positive("O campo deve ser um número positivo"),
  types: Yup.array()
    .of(
      Yup.object().shape({
        type: Yup.object().shape({
          name: Yup.string().required("Os tipos são obrigatórios"),
        }),
      })
    )
    .min(1, "O campo deve conter no mínimo 1 elemento")
    .max(2, "O campo deve conter no máximo 2 elementos"),
  stats: Yup.array()
    .of(
      Yup.object().shape({
        base_stat: Yup.number()
          .required("O campo é obrigatório")
          .positive("O campo deve ser um número positivo"),
        stat: Yup.object().shape({
          name: Yup.string().required("O campo é obrigatório"),
        }),
      })
    )
    .min(6, "O campo deve conter exatamente 6 elementos")
    .max(6, "O campo deve conter exatamente 6 elementos"),

  abilities: Yup.array()
    .of(
      Yup.object().shape({
        ability: Yup.object().shape({
          name: Yup.string().required("O campo é obrigatório"),
        }),
      })
    )
    .min(4, "O campo deve conter exatamente 4 elementos")
    .max(4, "O campo deve conter exatamente 4 elementos"),
});

export { createPokemonSchema };
