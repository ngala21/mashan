import {
  Button,
  Checkbox,
  TextField,
  Typography,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import React from "react";

const Contact = () => {

  return (

    // // <Box
    // //   sx={{
    // //     display: "flex",
    // //     flexDirection: "column",
    // //     justifyContent: "center",
    // //   }}
    // // >
    //   <Typography variant="h4" fontSize="bold">Contact me</Typography>
    //   <Typography>
    //     Hi there, contact me to ask anything you have in mind.
    //   </Typography>
    //   <Box sx={{ display: "flex", flexDirection: "column"}}>
    //     <label htmlFor="First name" id="first_name">
    //       First name
    //     </label>
    //     <TextField id="first_name" placeholder="Enter your first name" />
    //     <label htmlFor="Last name" id="first_name">
    //       Last name
    //     </label>
    //     <TextField id="last_name" placeholder="Enter your last name" />
    //   </Box>
    //   <Box sx={{ display: "flex", flexDirection: "column" }}>
    //     <label htmlFor="email" id="first_name">
    //       Email
    //     </label>
    //     <TextField id="email" placeholder="Enter your email address" />
    //     <label htmlFor="email" id="first_name">
    //       Message
    //     </label>
    //     <TextareaAutosize
    //       aria-label="minimum height"
    //       minRows={7}
    //       placeholder="Send me a message and I'll reply as soon as possible..."
    //       style={{ margin: 5 }}
    //     />
    //     <Box sx={{ display: "flex" }}>
    //       <Checkbox defaultChecked />
    //       <p>You agree to providing your data to Kevin who may contact you</p>
    //     </Box>
    //       <Button variant="contained" sx={{ width: "100%" }}>Send Message</Button>
    //   </Box>
    // </Box>
    <div>

    <Card style={{maxWidth: 900, margin:"80px auto", padding:"5px 5px"}}>
      <CardContent>
      <Typography gutterBottom variant="h3">Contact Me</Typography>
      <Typography gutterBottom color="textSecondary" variant="body2" component="p" style={{paddingBottom: "10"}}>Hi there, contact me to ask about anything you have in mind.</Typography>
        <form>
        <Grid container spacing={2}>

          <Grid xs={12} sm={6} item>
          <label htmlFor="first name" id="first_name">First Name</label>
          <TextField placeholder="Enter your first name" variant="outlined" fullWidth></TextField>
        </Grid>
          <Grid xs={12} sm={6} item>
          <label htmlFor="last name" id="last_name">Last Name</label>
          <TextField placeholder="Enter your second name" variant="outlined" fullWidth></TextField>
        </Grid>
          <Grid xs={12} item>
          <label htmlFor="email" id="email">Email</label>
          <TextField placeholder="yourname@gmail.com" variant="outlined" fullWidth></TextField>
        </Grid>
          <Grid xs={12} item>
          <label htmlFor="message" id="message">Message</label>
          <TextField multiline rows="4" placeholder="Send me a message and I'll reply you as soon as possible..." variant="outlined" fullWidth></TextField>
        </Grid>
          <Grid xs={12} item>
            <Checkbox defaultChecked />
            You agree to providing your data to Kevin who may contact you
          </Grid>
          <Grid xs={12} item>
          <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
        </Grid>
        </Grid>
        </form>
      </CardContent>
    </Card>
    </div>

  );
};

export default Contact;
