import {
  Autocomplete,
  Box,
  Button,
  Card,
  CardContent,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
  Stack,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import { GridRowModel } from "@mui/x-data-grid";
import { useQuery } from "react-query";
import {
  AreaObject,
  GetAllCustomersResponse,
  GetCustomerResponse,
  PropertyObject,
} from "../../../api/Customers/types";
import { getAllCustomers, getCustomerById } from "../../../api/Customers";
import { LoadingSpinner } from "../../../components/LoadingSpinner";
import { useState } from "react";
import { useGenerateTaxStore } from "../../../stores/GenerateTaxStore";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import { theme } from "../../../global/theme";
import { useConditionTypesStore } from "../../../stores/ConditionTypesStore";

type UpdatedProperty = PropertyObject & {
  totalValue: number;
  totalMetreage: number;
};
type UpdatedArea = AreaObject & { totalValue: number };

const steps = ["Selecione o cliente", "Ajuste os valores"];

const convertToBRL = (num: number) => {
  return num.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};

const EditCustomerTextField = ({
  label,
  value,
}: {
  label?: string;
  value: string;
}) => {
  return (
    <TextField
      label={label || ""}
      value={value || ""}
      InputProps={{
        readOnly: true,
      }}
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
};

const StepComponent1 = () => {
  const [value, setValue] = useState<string | null>();
  const [selectedCustomer, setSelectedCustomer] = useState<GetCustomerResponse>(
    {
      id: null,
      firstName: null,
      lastName: null,
      birth: null,
      cpf: null,
      email: null,
      phone: null,
    }
  );

  const customersQuery = useQuery(["customerRows"], getAllCustomers);
  const customers: GridRowModel<GetAllCustomersResponse[]> =
    customersQuery.data?.data;

  const handleChange = (event: SelectChangeEvent) => {
    const customerId = Number(event.target.value);
    const newSelectedCustomer = customers.find((e) => e.id === customerId);
    setValue(newSelectedCustomer.id.toString());
    setSelectedCustomer(newSelectedCustomer);
    useGenerateTaxStore.getState().setCustomer(newSelectedCustomer);
  };

  if (customers) {
    return (
      <Box padding="0px 24px">
        <InputLabel id="customer-select-label" sx={{ marginTop: "32px" }}>
          Cliente
        </InputLabel>
        <Select
          labelId="customer-select-label"
          id="customer-select"
          value={value}
          label="Cliente"
          onChange={handleChange}
          sx={{ width: "100%" }}
        >
          {customers.map((e) => {
            return (
              <MenuItem value={e.id}>{`${e.firstName} ${e.lastName}`}</MenuItem>
            );
          })}
        </Select>
        <Stack spacing={2} sx={{ marginTop: "22px" }}>
          <Stack spacing={2} direction="row" justifyContent="space-between">
            <EditCustomerTextField
              label="Data de nascimento"
              value={selectedCustomer.birth}
            />
            <EditCustomerTextField label="CPF" value={selectedCustomer.cpf} />
          </Stack>
          <Stack spacing={2} direction="row" justifyContent="space-between">
            <EditCustomerTextField
              label="Email"
              value={selectedCustomer.email}
            />
            <EditCustomerTextField
              label="Telefone"
              value={selectedCustomer.phone}
            />
          </Stack>
        </Stack>
      </Box>
    );
  }
  <LoadingSpinner />;
};

const StepComponent2 = () => {
  const selectedCustomer = useGenerateTaxStore.getState().customer;
  const customerId = selectedCustomer.id;

  const customerDetailedQuery = useQuery(["customerDetailed", customerId], () =>
    getCustomerById(customerId)
  );
  const customerDetailed = customerDetailedQuery.data?.data;

  // const propertiesQuery = useQuery(["customerProperties", customerId], () =>
  //   getPropertiesById(customerId)
  // );
  // const properties = propertiesQuery.data?.data;

  const handleChange = (e, propertyIndex, areaIndex) => {
    const properties = useGenerateTaxStore.getState().properties;
    properties[propertyIndex].areas[areaIndex].condition.value = e.target.value;
    useGenerateTaxStore.getState().setProperties(properties);
  };

  if (customerDetailed) {
    useGenerateTaxStore.getState().setProperties(customerDetailed.properties);

    return (
      <Box padding="0 24px">
        {customerDetailed.properties.map((property, propertyIndex) => {
          return (
            <Box marginTop="24px">
              <Stack direction="row" spacing={1}>
                <AgricultureIcon />
                <Typography>{property.name}</Typography>
              </Stack>
              <Typography
                fontSize={14}
                marginLeft="36px"
                color={theme.palette.text.secondary}
              >
                NIRF: {property.nirf}
              </Typography>
              <Typography
                fontSize={14}
                marginLeft="36px"
                color={theme.palette.text.secondary}
              >
                {property.city.name} - {property.city.province}
              </Typography>
              <Table sx={{ marginTop: "12px" }}>
                <TableHead>
                  <TableCell align="center">Areas</TableCell>
                  <TableCell align="center">Hectares</TableCell>
                  <TableCell align="center">Condição</TableCell>
                  <TableCell align="center">Valor (R$)</TableCell>
                </TableHead>
                <TableBody>
                  {property.areas.map((area, areaIndex) => (
                    <TableRow
                      key={area.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="center">{areaIndex + 1}</TableCell>
                      <TableCell align="center">{area.metreage}</TableCell>
                      <TableCell align="center">
                        {area.condition.type.description}
                      </TableCell>
                      <TableCell align="center">
                        <TextField
                          defaultValue={area.condition.value}
                          onChange={(e) =>
                            handleChange(e, propertyIndex, areaIndex)
                          }
                          sx={{ maxWidth: "110px" }}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          );
        })}
      </Box>
    );
  }

  return <LoadingSpinner />;
};

const StepComponent3 = () => {
  const customer = useGenerateTaxStore.getState().customer;
  const properties = useGenerateTaxStore.getState().properties;
  const conditionTypes = useConditionTypesStore.getState().conditionTypes;

  properties.map((property) => {
    let propertyTotalValue = 0;
    let propertyTotalMetreage = 0;

    property.areas.map((area) => {
      let areaTotalValue = 0;

      if (
        area.condition.type.description ===
        conditionTypes[conditionTypes.length - 1].description
      ) {
        areaTotalValue = Number(area.condition.value);
      } else {
        areaTotalValue = Number(area.condition.value) * area.metreage;
      }
      area["totalValue"] = areaTotalValue;
      propertyTotalValue += areaTotalValue;
      propertyTotalMetreage += area.metreage;
    });

    property["totalValue"] = propertyTotalValue;
    property["totalMetreage"] = propertyTotalMetreage;
  });

  useGenerateTaxStore.getState().setProperties(properties);

  return (
    <>
      {properties.map((property: UpdatedProperty) => {
        return (
          <Box marginTop="24px">
            <Stack direction="row" spacing={1}>
              <AgricultureIcon />
              <Typography>{property.name}</Typography>
            </Stack>
            <Typography
              fontSize={14}
              marginLeft="36px"
              color={theme.palette.text.secondary}
            >
              NIRF: {property.nirf}
            </Typography>
            <Typography
              fontSize={14}
              marginLeft="36px"
              color={theme.palette.text.secondary}
            >
              {property.city.name} - {property.city.province}
            </Typography>
            <Table sx={{ marginTop: "12px" }}>
              <TableHead>
                <TableCell align="center">Areas</TableCell>
                <TableCell align="center">Hectares</TableCell>
                <TableCell align="center">Condição</TableCell>
                <TableCell align="center">Valor</TableCell>
                <TableCell align="center">Total</TableCell>
              </TableHead>
              <TableBody>
                {property.areas.map((area: UpdatedArea, areaIndex) => (
                  <TableRow
                    key={area.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center">{areaIndex + 1}</TableCell>
                    <TableCell align="center">{area.metreage}</TableCell>
                    <TableCell align="center">
                      {area.condition.type.description}
                    </TableCell>
                    <TableCell align="center">
                      {convertToBRL(area.condition.value)}
                    </TableCell>
                    <TableCell align="center">
                      {convertToBRL(area.totalValue)}
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow key={property.id}>
                  <TableCell />
                  <TableCell align="center" sx={{ fontWeight: 500 }}>
                    {property.totalMetreage}
                  </TableCell>
                  <TableCell />
                  <TableCell />
                  <TableCell align="center" sx={{ fontWeight: 500 }}>
                    {convertToBRL(property.totalValue)}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
        );
      })}
    </>
  );
};

export const GenerateTaxReport = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const renderStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return <StepComponent1 />;
      case 1:
        return <StepComponent2 />;
      default:
        return null;
    }
  };

  return (
    <Card sx={{ minWidth: "600px", overflowY: "auto" }}>
      <CardContent>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps: { completed?: boolean } = {};
            const labelProps: {
              optional?: React.ReactNode;
            } = {};

            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <>
            <StepComponent3 />
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Recomeçar</Button>
            </Box>
          </>
        ) : (
          <>
            {renderStepContent(activeStep)}
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Voltar
              </Button>
              <Button onClick={handleNext}>
                {activeStep === steps.length - 1
                  ? "Gerar Declaração"
                  : "Avançar"}
              </Button>
            </Box>
          </>
        )}
      </CardContent>
    </Card>
  );
};
