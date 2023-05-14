import PropsTypes from "prop-types";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

const ServiceCard = ({ item }) => {
  const { id, name, price, content } = item;

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
          {!!content ? (
            <Typography
              className="service__desc"
              variant="body2"
              color="text.secondary"
            >
              {content.slice(0, 100)}...
            </Typography>
          ) : null}
        </CardContent>
      </div>
      <CardActions className="market__actions">
        <Button size="small">Детали</Button>
      </CardActions>
    </Card>
  );
};

ServiceCard.propTypes = {
  item: PropsTypes.shape({
    id: PropsTypes.number.isRequired,
    name: PropsTypes.string.isRequired,
    price: PropsTypes.number.isRequired,
    content: PropsTypes.string,
  }),
};

export default ServiceCard;
