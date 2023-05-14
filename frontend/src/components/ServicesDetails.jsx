import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Alert,
  CircularProgress,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sendRequestToReceiveDetails } from "../store/slices/servicesSlice";

const ServicesDetails = () => {
  const { serviceDetails, loading, error } = useSelector(
    (state) => state.services
  );
  const { name, price, content } = serviceDetails;
  let { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sendRequestToReceiveDetails(id));
  }, []);

  const repeatRequest = () => {
    dispatch(sendRequestToReceiveDetails(id));
  };

  const details = !!serviceDetails ? (
    <Card className="service-details" sx={{ maxWidth: 345 }}>
      <div>
        <CardContent>
          <Typography
            className="service__name"
            gutterBottom
            variant="h6"
            component="div"
          >
            {price} p.
          </Typography>
          <Typography
            className="service__name"
            gutterBottom
            variant="h5"
            component="div"
          >
            {name}
          </Typography>
          <Typography
            className="service__desc"
            variant="body2"
            color="text.secondary"
          >
            {content}
          </Typography>
        </CardContent>
      </div>
    </Card>
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
        <div className="details-container">{details}</div>
      )}
    </div>
  );
};
export default ServicesDetails;
