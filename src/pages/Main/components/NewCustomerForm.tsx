import {
  Button,
  IconButton,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import RemoveIcon from "@mui/icons-material/Remove";
import { FormTextField } from "../../../components/FormTextField";
import { theme } from "../../../global/theme";
import AddIcon from "@mui/icons-material/Add";
import { FormSelect } from "../../../components/FormSelect";
import { emptyAreas } from "./NewCustomer";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

// This file contains all the components that are input fields of the New Cliente Forms
// FormTextField is an example of a generic component used to build all kind of forms

export const InputFirstName = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      control={control}
      name="firstName"
      rules={{
        required: { value: true, message: "O nome é obrigatório" },
        maxLength: {
          value: 30,
          message: "O nome é muito longo (máximo de 30 caracteres)",
        },
      }}
      render={({ field }) => (
        <FormTextField
          field={{ ...field }}
          error={errors.firstName}
          label="Nome"
        />
      )}
    />
  );
};

export const InputLastName = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      control={control}
      name="lastName"
      rules={{
        required: { value: true, message: "O sobrenome é obrigatório" },
        maxLength: {
          value: 30,
          message: "O sobrenome é muito longo (máximo de 30 caracteres)",
        },
      }}
      render={({ field }) => (
        <FormTextField
          field={{ ...field }}
          error={errors.lastName}
          label="Sobrenome"
        />
      )}
    />
  );
};

export const InputCpf = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      control={control}
      name="cpf"
      rules={{
        required: { value: true, message: "O CPF é obrigatório" },
      }}
      render={({ field }) => (
        <FormTextField field={{ ...field }} error={errors.cpf} label="CPF" />
      )}
    />
  );
};

type InputPropertiesProps = {
  index: number;
};

export const InputPropertieName = ({ index }: InputPropertiesProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      control={control}
      name={`properties.${index}.name`}
      render={({ field }) => (
        <FormTextField field={{ ...field }} label="Nome da propriedade" />
      )}
    />
  );
};

export const InputPropertieNirf = ({ index }: InputPropertiesProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      control={control}
      name={`properties.${index}.nirf`}
      render={({ field }) => (
        <FormTextField field={{ ...field }} label="NIRF" />
      )}
    />
  );
};

export const PropertiesForm = ({ propertieIndex }) => {
  const { fields, append, remove } = useFieldArray({
    name: "areas",
  });
  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <InputPropertieName index={propertieIndex} />
      <InputPropertieNirf index={propertieIndex} />

      <Stack spacing={0}>
        <Stack spacing={2}>
          <Stack
            spacing={2}
            direction="row"
            alignItems="center"
            sx={{ borderBottom: "solid 1px", borderColor: "divider", pb: 2 }}
          >
            <Typography variant="body1" sx={{ color: "#5B5B5B" }}>
              Terras
            </Typography>
            <IconButton
              sx={{
                width: "15px",
                height: "15px",
                color: "green",
                "&:hover": { backgroundColor: "transparent" },
              }}
              onClick={() => {
                append([emptyAreas]);
              }}
            >
              <AddIcon />
            </IconButton>
          </Stack>

          <List>
            {fields.map((item, index) => {
              return (
                <ListItem
                  key={item.id}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    p: 0,
                  }}
                >
                  <Stack
                    direction="row"
                    alignItems="flex-start"
                    justifyContent="flex-start"
                    width="100%"
                    spacing={4}
                  >
                    <Stack
                      direction="column"
                      alignItems="center"
                      justifyContent="center"
                      spacing={2}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          width: "45px",
                          height: "45px",
                          borderRadius: 50,
                          backgroundColor: "divider",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {index + 1}
                      </Typography>
                      <IconButton
                        onClick={() => {
                          remove(index);
                        }}
                        sx={{
                          color: "#FF1F1F",
                          backgroundColor: "#FFB2B2",
                          "&:hover": { backgroundColor: "#FFCCCC" },
                        }}
                      >
                        <DeleteOutlineIcon />
                      </IconButton>
                    </Stack>
                    <Stack width="100%">
                      <AreaForm propertieIndex={propertieIndex} index={index} />
                    </Stack>
                  </Stack>
                </ListItem>
              );
            })}
          </List>
        </Stack>
      </Stack>
    </Stack>
  );
};

type InputAreaProps = {
  index: number;
  propertieIndex: number;
};

export const InputAreaSize = ({ propertieIndex, index }: InputAreaProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      control={control}
      name={`properties.${propertieIndex}.areas.${index}.size`}
      render={({ field }) => (
        <FormTextField field={{ ...field }} label="Área em m²" />
      )}
    />
  );
};

export const InputAreaCondition = ({
  propertieIndex,
  index,
}: InputAreaProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      control={control}
      name={`properties.${propertieIndex}.areas.${index}.condition`}
      render={({ field }) => (
        <FormTextField field={{ ...field }} label="Condição" />
      )}
    />
  );
};

export const InputAreaCity = ({ propertieIndex, index }: InputAreaProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      control={control}
      name={`properties.${propertieIndex}.areas.${index}.city`}
      rules={{
        required: { value: true, message: "Selecione uma cidade" },
      }}
      render={({ field }) => (
        <FormSelect
          field={{ ...field }}
          error={errors.city}
          label="Cidade"
          data={["Cândido Mota", "Assis", "Ourinhos"]}
        />
      )}
    />
  );
};

export const AreaForm = ({ propertieIndex, index }: InputAreaProps) => {
  return (
    <Stack spacing={2}>
      <InputAreaSize propertieIndex={propertieIndex} index={index} />
      <InputAreaCondition propertieIndex={propertieIndex} index={index} />
      <InputAreaCity propertieIndex={propertieIndex} index={index} />
    </Stack>
  );
};
