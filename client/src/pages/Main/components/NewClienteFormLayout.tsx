import {
  Button,
  Card,
  CardContent,
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

type NewClienteFormProps = {
  onClick: (data: any) => void;
};

export const NewClienteFormLayout = ({ onClick }: NewClienteFormProps) => {
  const { handleSubmit } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    name: "propertie",
  });

  return (
    <Card sx={{ minWidth: "600px", overflowY: "auto" }}>
      <CardContent>
        <Stack spacing={3} sx={{ border: "0px solid red", padding: 2 }}>
          <Form.InputFirstName />
          <Form.InputLastName />
          <Form.InputCpf />
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={1}
          >
            <Typography variant="body1">Adicionar propriedade</Typography>
            <IconButton
              onClick={() => {
                append("");
              }}
            >
              <AddIcon sx={{ color: theme.palette.primary.main }} />
            </IconButton>
          </Stack>

          <List>
            {fields.map((item, index) => {
              return (
                <ListItem
                  key={item.id}
                  sx={{
                    backgroundColor: "#FCFCFC",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    mb: 2,
                  }}
                >
                  <RemoveIcon
                    onClick={() => {
                      remove(index);
                    }}
                    sx={{ color: "red", "&:hover": { cursor: "pointer" } }}
                  />
                  <Form.PropertiesForm index={index} />
                </ListItem>
              );
            })}
          </List>
          <Stack justifyContent="end" alignItems="end">
            <Button onClick={handleSubmit((d) => onClick(d))}>Cadastrar</Button>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};
