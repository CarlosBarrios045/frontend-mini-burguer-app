import { useState } from "react";

// Material UI
import { InputAdornment, Slide } from "@material-ui/core";

// Icons
import { FaUserAlt, FaLock } from "react-icons/fa";

// React Form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Atoms
import Text from "src/components/Atoms/Text";
import Button from "src/components/Atoms/Button";
import Link from "src/components/Atoms/Link";
import Input from "src/components/Atoms/Input";

// Styles
import styles from "./styles";

const Login = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const classes = styles();

  const schema = yup.object().shape({
    identifier: yup.string().required("El campo es requerido"),
    password: yup.string().required("El campo es requerido"),
  });

  const { handleSubmit, register, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className={classes.container}>
      <Slide direction="up" in timeout={1000}>
        <form className={classes.divForm} onSubmit={handleSubmit(onSubmit)}>
          <img src="/svg/avatar.svg" alt="Profile" className={classes.img} />
          <Text
            component="h1"
            theme="title"
            className={classes.title}
            align="center"
          >
            Burguer App
          </Text>
          <Input
            type="text"
            className={classes.inputEmail}
            value={identifier}
            name="identifier"
            inputRef={register}
            onChange={(e) => setIdentifier(e.target.value)}
            placeholder="Usuario o correo electrónico"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FaUserAlt className={classes.icon} />
                </InputAdornment>
              ),
            }}
            error={errors?.identifier?.message && true}
            helperText={errors?.identifier?.message}
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
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FaLock className={classes.icon} />
                </InputAdornment>
              ),
            }}
            inputProps={{ maxLength: 16 }} // eslint-disable-line
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
            Iniciar Sesión
          </Button>
          <Link href="/crear-cuenta" className={classes.register}>
            ¿Aún no tienes cuenta?, registrate aquí
          </Link>
        </form>
      </Slide>
    </div>
  );
};

export default Login;
