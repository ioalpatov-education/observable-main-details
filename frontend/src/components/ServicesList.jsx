import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sendRequestToReceiveServices } from "../store/slices/servicesSlice";
import ServiceCard from "./ServiceCard";
import { Alert, CircularProgress, Button } from "@mui/material";

const ServicesList = () => {
  const { items, loading, error } = useSelector((state) => state.services);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sendRequestToReceiveServices());
  }, []);

  const repeatRequest = () => {
    dispatch(sendRequestToReceiveServices());
  };

  const servicesList = !!items.length ? (
    <ul className="services-list">
      {items.map((item) => {
        const { id } = item;
        return (
          <li key={id}>
            <ServiceCard item={item} />
          </li>
        );
      })}
    </ul>
  ) : null;

  return (
    <div>
      {loading ? (
        <div className="loader-container">
          <CircularProgress />
        </div>
      ) : !!error ? (
        <Alert severity="error">
          {error.message}
          <Button
            className="repeat-btn"
            onClick={repeatRequest}
            size="small"
            variant="contained"
            color="error"
          >
            Повторить
          </Button>
        </Alert>
      ) : (
        servicesList
      )}
    </div>
  );
};

export default ServicesList;
