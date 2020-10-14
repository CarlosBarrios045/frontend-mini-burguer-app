import { useState } from "react";

// React Form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Atoms
import Text from "src/components/Atoms/Text";
import Button from "src/components/Atoms/Button";
import Link from "src/components/Atoms/Link";
import Input from "src/components/Atoms/Input";
import Dialog from "@material-ui/core/Dialog";

// Icon
import { IoIosCloseCircleOutline } from "react-icons/io";

// API
import { register as registerAPI } from "src/data/APIInterface";

// Styles
import styles from "./styles";

const SignUp = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [openModal, setOpenModal] = useState(false);
  const [error, setError] = useState("");

  const classes = styles();

  const schema = yup.object().shape({
    firstname: yup.string().required("El campo es requerido"),
    lastname: yup.string().required("El campo es requerido"),
    email: yup
      .string()
      .email("No es un correo electrónico válido")
      .required("El campo es requerido"),
    password: yup.string().required("El campo es requerido"),
  });

  const { handleSubmit, register, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    console.log(data);

    try {
      const username = data.email;
      const res = await registerAPI({ ...data, username });
      console.log({ res });
    } catch (err) {
      console.log(err);
      const message = err?.message;
      if (message === "Email is already taken.") {
        setError("Ese correo electrónico ya está registrado.");
      } else {
        setError(message);
      }

      setOpenModal(true);
    }
  };

  return (
    <div className={classes.container}>
      <form className={classes.divForm} onSubmit={handleSubmit(onSubmit)}>
        <Dialog open={openModal} onClose={() => setOpenModal(false)}>
          <div
            style={{
              height: 200,
              width: 400,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={() => setOpenModal(false)}
          >
            <IoIosCloseCircleOutline size={50} color="red" />
            <Text style={{ color: "red", fontSize: 16, marginTop: 20 }}>
              {error}
            </Text>
          </div>
        </Dialog>
        <Text
          component="h1"
          theme="title"
          className={classes.title}
          align="center"
        >
          Crear cuenta
        </Text>
        <Input
          type="firstname"
          className={classes.input}
          value={firstname}
          name="firstname"
          inputRef={register}
          onChange={(e) => setFirstname(e.target.value)}
          placeholder="Nombre(s)"
          error={errors?.firstname?.message && true}
          helperText={errors?.firstname?.message}
          fullWidth
        />
        <Input
          type="lastname"
          className={classes.input}
          value={lastname}
          name="lastname"
          inputRef={register}
          onChange={(e) => setLastname(e.target.value)}
          placeholder="Apellido(s)"
          error={errors?.lastname?.message && true}
          helperText={errors?.lastname?.message}
          fullWidth
        />
        <Input
          type="email"
          className={classes.input}
          value={email}
          name="email"
          inputRef={register}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Correo electrónico"
          error={errors?.email?.message && true}
          helperText={errors?.email?.message}
          fullWidth
        />
        <Input
          type="password"
          className={classes.inputPass}
          value={password}
          name="password"
          inputRef={register}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
          fullWidth
          error={errors?.password?.message && true}
          helperText={errors?.password?.message}
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          type="submit"
        >
          Crear cuenta
        </Button>
        <Link href="/registrar-usuario" className={classes.register}>
          Ir a iniciar sesión
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
