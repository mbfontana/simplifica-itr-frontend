import {
  Button,
  Card,
  CardContent,
  Chip,
  Icon,
  IconButton,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import { useFieldArray, useFormContext } from "react-hook-form";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import * as Form from "./NewClienteForm";
import { theme } from "../../../global/theme";
import { emptyProperties } from "./NewCliente";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

type NewClienteFormProps = {
  onClick: (data: any) => void;
};

export const NewClienteFormLayout = ({ onClick }: NewClienteFormProps) => {
  const { handleSubmit } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    name: "properties",
  });

  return (
    <Card sx={{ minWidth: "600px", overflowY: "auto" }}>
      <CardContent>
        <Stack spacing={3} sx={{ padding: 2 }}>
          <Typography sx={{ fontSize: "1.5rem" }}>
            Cadastro de Cliente
          </Typography>

          <Stack spacing={2}>
            <Typography
              variant="body1"
              sx={{
                color: "#5B5B5B",
                borderBottom: "solid 1px",
                borderColor: "divider",
                pb: 2,
              }}
            >
              Informações pessoais
            </Typography>
            <Form.InputFirstName />
            <Form.InputLastName />
            <Form.InputCpf />
          </Stack>

          <Stack spacing={0}>
            <Stack spacing={2}>
              <Typography
                variant="body1"
                sx={{
                  color: "#5B5B5B",
                  borderBottom: "solid 1px",
                  borderColor: "divider",
                  pb: 2,
                }}
              >
                Propriedades
              </Typography>
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
                          <Form.PropertiesForm propertieIndex={index} />
                        </Stack>
                      </Stack>
                    </ListItem>
                  );
                })}
              </List>
            </Stack>
            <Button
              variant="outlined"
              onClick={() => {
                append([emptyProperties]);
              }}
              sx={{ width: "270px", borderRadius: 5 }}
            >
              Adicionar propriedade
            </Button>
          </Stack>

          <Stack justifyContent="end" alignItems="end">
            <Button
              variant="contained"
              onClick={handleSubmit((d) => onClick(d))}
            >
              Cadastrar
            </Button>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};
