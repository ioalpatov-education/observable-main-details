import PropsTypes from "prop-types";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const ServiceCard = ({ item }) => {
  const { id, name, price } = item;
  const navigate = useNavigate();

  const goToDetails = () => {
    navigate(`/${id}/details`);
  };

  return (
    <Card className="service-product" sx={{ maxWidth: 345 }}>
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
        </CardContent>
      </div>
      <CardActions className="market__actions">
        <Button onClick={goToDetails} size="small">
          Детали
        </Button>
      </CardActions>
    </Card>
  );
};

ServiceCard.propTypes = {
  item: PropsTypes.shape({
    id: PropsTypes.number.isRequired,
    name: PropsTypes.string.isRequired,
    price: PropsTypes.number.isRequired,
  }),
};

export default ServiceCard;
