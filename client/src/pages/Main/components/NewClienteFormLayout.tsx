import { Button, Card, CardContent, Stack, Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";
import * as Form from "./NewClienteForm";

type NewClienteFormProps = {
  onClick: (data: any) => void;
};

export const NewClienteFormLayout = ({ onClick }: NewClienteFormProps) => {
  const { handleSubmit, watch } = useFormContext();

  return (
    <Card>
      <CardContent>
        <Typography variant="body1">Formulário de cadastro</Typography>
        <Stack spacing={3}>
          <Form.InputFirstName />
          <Form.InputLastName />
          <Button onClick={handleSubmit((d) => onClick(d))}>Cadastrar</Button>
        </Stack>
      </CardContent>
    </Card>
  );
};
