import React from "react";
import { Container, Grid, Typography, Link } from "@mui/material";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./FooterComp.css";

const FooterComp = () => {
  return (
    <footer className="footer">
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Rentify
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Discover your dream home with Rentify, the ultimate destination for finding perfect properties. Whether you're looking to buy or rent, our app offers a seamless experience with detailed listings and personalized recommendations.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link href="/" color="inherit" variant="body2">
              Home
            </Link>
            <br />
            <Link href="#about" color="inherit" variant="body2">
              About Us
            </Link>
            <br />
            <Link href="/contact" color="inherit" variant="body2">
              Contact Us
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <div className="social-icons">
              <Link href="https://facebook.com" color="inherit">
                <FaFacebook />
              </Link>
              <Link href="https://twitter.com" color="inherit">
                <FaTwitter />
              </Link>
              <Link href="https://instagram.com" color="inherit">
                <FaInstagram />
              </Link>
            </div>
          </Grid>
        </Grid>
        <Typography variant="body2" color="textSecondary" align="center" className="footer-text">
          {"© "} {new Date().getFullYear()} Rentify. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default FooterComp;
