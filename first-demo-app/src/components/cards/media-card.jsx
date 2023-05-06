import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { PageNames } from "../../constants/page-name";
import { deteRequest } from "../../api-handler";

export default function MediaCard({ item, getData, updateData, list = true }) {
  const { name, avatar, id } = item;
  const deleteData = async (id) => {
    const response = await deteRequest(`/crud/${id}`);
    if (response) {
      console.log("1221121");
      getData();
    } else {
    }
  };
  const redirect = useNavigate();
  return (
    <Card sx={{ maxWidth: 345, m: 3 }}>
      <CardMedia sx={{ height: 140 }} image={avatar} title={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
      </CardContent>
      {list && (
        <CardActions>
          <Button size="small" onClick={() => deleteData(id)}>
            Delete
          </Button>
          <Button size="small" onClick={() => updateData(id)}>
            Edit
          </Button>
          <Button
            size="small"
            onClick={() => redirect(PageNames.API_DETAIL.replace(":id", id))}
          >
            Learn More
          </Button>
        </CardActions>
      )}
    </Card>
  );
}
