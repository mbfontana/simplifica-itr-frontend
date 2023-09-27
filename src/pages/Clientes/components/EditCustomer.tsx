import { FormProvider, useForm } from "react-hook-form";
import { EditCustomerFormLayout } from "./EditCustomerFormLayout";
import { useQuery } from "react-query";
import { getCustomerById } from "../../../api/Customers";
import {
  AreaObject,
  GetCustomerResponse,
  PropertyObject,
} from "../../../api/Customers/types";
import { useEffect } from "react";
import { LoadingSpinner } from "../../../components/LoadingSpinner";

export const emptyProperties: PropertyObject = {
  id: 0,
  name: "",
  nirf: "",
  city: {
    id: 0,
    name: "",
    province: "",
    font: 0,
  },
  areas: [],
};

export const emptyAreas: AreaObject = {
  id: 0,
  metreage: 0,
  condition: {
    id: 0,
    value: 0,
    type: {
      id: 0,
      description: "",
    },
  },
};

export const EditCustomer = ({ customerId }) => {
  const queryCustomerDetailed = useQuery(["customerDetailed", customerId], () =>
    getCustomerById(customerId)
  );
  const customerDetailed = queryCustomerDetailed.data?.data;

  const formHook = useForm<GetCustomerResponse>({
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      birth: "",
      email: "",
      cpf: "",
      properties: [],
    },
  });

  useEffect(() => {
    if (customerDetailed) {
      formHook.reset({
        firstName: customerDetailed.firstName,
        lastName: customerDetailed.lastName,
        phone: customerDetailed.phone,
        birth: customerDetailed.birth,
        email: customerDetailed.email,
        cpf: customerDetailed.cpf,
        properties: customerDetailed.properties,
      });
    }
  }, [customerDetailed, formHook]);

  return (
    <>
      {queryCustomerDetailed.isLoading ? (
        <LoadingSpinner />
      ) : queryCustomerDetailed.isError ? (
        <p>Error loading customer data</p>
      ) : (
        <FormProvider {...formHook}>
          <EditCustomerFormLayout customerDetailed={customerDetailed} />
        </FormProvider>
      )}
    </>
  );
};
