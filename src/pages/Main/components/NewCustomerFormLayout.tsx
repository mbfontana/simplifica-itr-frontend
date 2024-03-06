import {
  Button,
  Card,
  CardContent,
  Dialog,
  IconButton,
  List,
  ListItem,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import { useFieldArray, useFormContext } from "react-hook-form";
import * as Form from "./NewCustomerForm";
import { emptyProperties } from "./NewCustomer";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { extractPDF, registerCustomer } from "../../../api/Customers";
import { useState } from "react";
import { Toast } from "../../../components/Toast";
import { useQueryClient } from "react-query";
import { useCitiesStore } from "../../../stores/CitiesStore";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { getUserSubscription } from "../../../api/Subscription";
import { Transition } from "../../../components/Transition";
import { UpgradeSubscription } from "./UpgradeSubscription";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export const NewCustomerFormLayout = () => {
  const [toastIsOpen, setToastIsOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastEvent, setToastEvent] = useState<"success" | "error">("success");
  const [openDialog, setOpenDialog] = useState(false);
  const queryClient = useQueryClient();

  const cities = useCitiesStore.getState().cities;

  const { handleSubmit, setValue } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    name: "properties",
  });

  const onSubmit = (formData) => {
    const { firstName, lastName, phone, birth, email, cpf, properties } =
      formData;

    registerCustomer(firstName, lastName, phone, birth, email, cpf, properties)
      .then(() => {
        queryClient.invalidateQueries("customerRows");
        setToastEvent("success");
        setToastIsOpen(true);
        setToastMessage("Cliente cadastrado.");
        setTimeout(() => {
          setToastIsOpen(false);
        }, 1000 * 6);
      })
      .catch((err) => {
        setToastEvent("error");
        setToastIsOpen(true);
        setToastMessage("Falha ao cadastrar cliente.");
        setTimeout(() => {
          setToastIsOpen(false);
        }, 1000 * 6);
      });
  };

  const handleAutoFill = async (event) => {
    event.preventDefault();

    const subscriptionResponse = await getUserSubscription();
    const subscription = subscriptionResponse.data;

    if (subscription.id === 1) {
      setOpenDialog(true);
    } else {
      document.getElementById("pdf-upload-input").click();
    }
  };

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];

    if (file?.type === "application/pdf") {
      const formData = new FormData();
      formData.append("file", file);

      const extractedCustomerResponse = await extractPDF(formData);
      const extractedCustomer = extractedCustomerResponse.data;

      setValue("firstName", extractedCustomer.firstName);
      setValue("lastName", extractedCustomer.lastName);
      setValue("birth", extractedCustomer.birth);
      setValue("cpf", extractedCustomer.cpf);

      if (
        extractedCustomer.properties &&
        Array.isArray(extractedCustomer.properties)
      ) {
        fields.forEach((_, index) => remove(index));
        extractedCustomer.properties.forEach((property) => {
          const cityId = cities.find((e) => e.name === property.city.name)?.id;
          property["cityId"] = cityId;
          append(property);
        });
      }
    } else {
      setToastEvent("error");
      setToastIsOpen(true);
      setToastMessage("Declaração Inválida.");
      setTimeout(() => {
        setToastIsOpen(false);
      }, 1000 * 6);
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card sx={{ minWidth: "600px", overflowY: "auto" }}>
          <CardContent>
            <Stack spacing={3} sx={{ padding: 2 }}>
              <Typography sx={{ fontSize: "1.5rem" }}>
                Cadastro de Cliente
              </Typography>

              <Button
                component="label"
                variant="contained"
                startIcon={<CloudUploadIcon />}
                onClick={handleAutoFill}>
                Preencher com declaração antiga
              </Button>
              <VisuallyHiddenInput
                id="pdf-upload-input"
                type="file"
                onChange={handleFileUpload}
              />

              <Stack spacing={2}>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#5B5B5B",
                    borderBottom: "solid 1px",
                    borderColor: "divider",
                    pb: 2,
                  }}>
                  Informações pessoais
                </Typography>
                <Form.InputFirstName />
                {/*<Form.InputLastName />*/}
                <Form.InputPhone />
                <Form.InputBirth />
                <Form.InputEmail />
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
                    }}>
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
                          }}>
                          <Stack
                            direction="row"
                            alignItems="flex-start"
                            justifyContent="flex-start"
                            width="100%"
                            spacing={4}>
                            <Stack
                              direction="column"
                              alignItems="center"
                              justifyContent="center"
                              spacing={2}>
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
                                }}>
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
                                }}>
                                <DeleteOutlineIcon />
                              </IconButton>
                            </Stack>
                            <Stack width="100%">
                              <Form.PropertiesForm
                                propertieIndex={index}
                                cities={cities || []}
                              />
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
                  sx={{ width: "270px", borderRadius: 5 }}>
                  Adicionar propriedade
                </Button>
              </Stack>

              <Stack justifyContent="end" alignItems="end">
                <Button variant="contained" type="submit">
                  Cadastrar
                </Button>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </form>
      <Toast isOpen={toastIsOpen} message={toastMessage} event={toastEvent} />
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        TransitionComponent={Transition}>
        <UpgradeSubscription />
      </Dialog>
    </>
  );
};
