import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import axios from "axios";
import productService from "../../services/ProductsService";
import Admin from "../auth/Admin";

const UpdateProduct = (props) => {
  const [name, setName] = React.useState("");
  const [Category, setCategory] = React.useState("");
  const [price, setPrice] = React.useState(0);
  const [details, setdetails] = React.useState("");
  const [imageUrl, setImage] = React.useState(1);
  const id = props.match.params.id;
  React.useEffect(() => {
    productService.getSingleProduct(id).then((data) => {
      setName(data.name);
      setCategory(data.Category);
      setPrice(data.price);
      setdetails(data.details);
      setImage(data.imageUrl);
    });
  }, []);
  return (
    <Admin>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1>Update Product</h1>
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <TextField
            label="name"
            fullWidth
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <TextField
            label="category"
            fullWidth
            value={Category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          />
          <TextField
            label="price"
            fullWidth
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
          <TextField
            label="details"
            fullWidth
            value={details}
            onChange={(e) => {
              setdetails(e.target.value);
            }}
          />
          <TextField
            label="imageUrl"
            fullWidth
            value={imageUrl}
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={9}>
          <Button
            variant="contained"
            color="primary"
            onClick={(e) => {
              productService
                .updateProduct(id, {
                  name,
                  Category,
                  price,
                  details,
                  imageUrl,
                })
                .then((data) => {
                  console.log(data);
                  props.history.push("/products");
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            Update
          </Button>
        </Grid>
      </Grid>
    </Admin>
  );
};

export default UpdateProduct;
