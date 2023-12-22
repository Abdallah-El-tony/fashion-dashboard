import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../../components/Header";
import { useRef, useState } from "react";
import { DriveFolderUploadOutlined } from "@mui/icons-material";
import { Box, Button, TextField } from "@mui/material";

const NewProduct = () => {
  const formRef = useRef(null);
  // states
  const [img, setImg] = useState("");
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    values.img = img;
    // console.log(values);

    try {
      fetch("http://localhost:3000/AllProducts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      formRef.current.reset();
      setImg('')
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Box>
      <Header title="CREATE Product" subtitle="Add New Product" />
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={checkoutSchema}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <Box sx={{ textAlign: "center" }}>
                <img
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                  src={
                    img === ""
                      ? "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                      : img
                  }
                  alt=""
                />
                <Box
                  sx={{
                    gridColumn: "span 2",
                    mt: "20px",
                    display: "flex",
                    justifyContent: "center",
                    mb: "20px",
                  }}
                >
                  <label
                    htmlFor="file"
                    style={{
                      display: "flex",
                      gap: "4px",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                  >
                    <span>Image:</span> <DriveFolderUploadOutlined />
                  </label>
                  <input
                    type="file"
                    id="file"
                    onChange={(e) => {
                      setImg(URL.createObjectURL(e.target.files[0]));
                    }}
                    style={{ display: "none" }}
                  />
                </Box>
              </Box>
              <form onSubmit={handleSubmit} ref={formRef}>
                <Box
                  display="grid"
                  gap="30px"
                  gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                  sx={{
                    "& > div": {
                      gridColumn: isNonMobile ? undefined : "span 4",
                    },
                  }}
                >
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    value={img}
                    onBlur={handleBlur}
                    onChange={(e) => setImg(e.target.value)}
                    placeholder="http:photo.png"
                    label="Image"
                    name="img"
                    sx={{ gridColumn: "span 2" }}
                  />

                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Name"
                    placeholder="T-shirt"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.df}
                    name="name"
                    error={!!touched.name && !!errors.name}
                    helperText={touched.name && errors.name}
                    sx={{ gridColumn: "span 2" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    placeholder="Clogthing"
                    label="Category"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.fd}
                    name="category"
                    error={!!touched.category && !!errors.category}
                    helperText={touched.category && errors.category}
                    sx={{ gridColumn: "span 2" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    placeholder="100"
                    type="text"
                    label="Price"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    name="price"
                    error={!!touched.price && !!errors.price}
                    helperText={touched.price && errors.price}
                    sx={{ gridColumn: "span 2" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Sales"
                    placeholder="100"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.fd}
                    name="sales"
                    error={!!touched.sales && !!errors.sales}
                    helperText={touched.sales && errors.sales}
                    sx={{ gridColumn: "span 2" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    placeholder="100"
                    type="text"
                    label="Alternative Price"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.fd}
                    name="altPrice"
                    error={!!touched.altPrice && !!errors.altPrice}
                    helperText={touched.altPrice && errors.altPrice}
                    sx={{ gridColumn: "span 2" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Color"
                    placeholder="red"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.fd}
                    name="color"
                    error={!!touched.color && !!errors.color}
                    helperText={touched.color && errors.color}
                    sx={{ gridColumn: "span 2" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Offer"
                    placeholder="10%"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.fd}
                    name="offer"
                    error={!!touched.offer && !!errors.offer}
                    helperText={touched.offer && errors.offer}
                    sx={{ gridColumn: "span 2", margin: "auto" }}
                  />
                </Box>
                <Box display="flex" justifyContent="center" mt="30px">
                  <Button type="submit" color="secondary" variant="contained">
                    Create New Product
                  </Button>
                </Box>
              </form>
            </Box>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export const ProductForm = () => {};

const checkoutSchema = yup.object().shape({
  name: yup.string().required("required"),
  category: yup.string().required("required"),
  price: yup.number().required("required"),
  altPrice: yup.number().required("required"),
  color: yup.string().required("required"),
  offer: yup.string().required("required"),
  sales: yup.string().required("required"),
});
const initialValues = {
  name: "",
  category: "",
  img: "",
  color: "",
  altPrice: 0,
  price: 0,
  rating: 0,
  offer: 0,
  sales: 0,
};

export default NewProduct;
