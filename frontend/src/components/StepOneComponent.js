import {
    Box,
    Button,
    TextField,
    useMediaQuery,
    Typography,
    useTheme,
} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";



const StepOneComponent = ({ title }, { subtitle }) => {
    const theme = useTheme();
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
    return (
        <Formik>
            {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
                setFieldValue,
                resetForm,
            }) => (
                <form onSubmit={handleSubmit}>
                    <Box>
                        {/*  <Box
                width="100%"
                backgroundColor={theme.palette.background.alt}
                p="1rem 6%"
                textAlign="center"
            >
                <Typography fontWeight="bold" fontSize="32px" color="primary">
                Healthcare ChatBot
                </Typography>
            </Box> */}

                        <Box
                            width={isNonMobileScreens ? "50%" : "93%"}
                            p="4rem"
                            m="4rem auto"
                            borderRadius="1.5rem"
                            backgroundColor={theme.palette.background.alt}
                        >
                            <Typography fontWeight="700" variant="h5" sx={{ mb: "1.5rem", left: "100px" }}>
                                {title}
                            </Typography>
                            <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem", Top: "313px", left: "100px" }}>
                                {subtitle}
                            </Typography>
                            <TextField
                                label="name"
                                type="text"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value="name"
                                name="password"
                                sx={{ gridColumn: "span 4" }}
                            />

                        </Box>
                    </Box>
                </form>)}
        </Formik>
    );
};

export default StepOneComponent;