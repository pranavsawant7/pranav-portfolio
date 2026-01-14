import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import "./intro.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

function Intro() {
  const greetings = [
    "Hello",
    "नमस्ते",
    "नमस्कार",
    "નમસ્તે",
    "নমস্কার",
    "നമസ്കാരം",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % greetings.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="intro-wrapper">
        {/* Top bar */}
        <div className="intro-top">
          <a
            href="https://github.com/pranavsawant7/pranav-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#FFD60A" }}
          >
            <GitHubIcon sx={{ fontSize: "1.8rem" }} />
          </a>

          <a
            href="mailto:pranavsawant275@gmail.com"
            style={{
              color: "#FFD60A",
              fontSize: "1rem",
              textDecoration: "underline",
              textUnderlineOffset: "0.25rem",
            }}
          >
            pranavsawant275@gmail.com
          </a>
        </div>

        {/* Main intro */}
        <div className="intro">
          <div className="hello">{greetings[index]},</div>
          <div className="name">I'm Pranavkumar Sawant</div>
          <p style={{ wordSpacing: "0.25rem", color: "#FFD60A" }}>
            Frontend Developer with 1.5+ years of experience building <br />
            responsive web applications using ReactJS.
          </p>

          <Button
            variant="contained"
            sx={{
              color: "#FFD60A",
              backgroundColor: "#003566",
              textTransform: "none",
              borderRadius: "0.25rem",
              border: "1px solid",
              borderColor: "#FFD60A",
              marginTop: "1rem",
            }}
          >
            Resume
          </Button>
        </div>

        {/* Bottom breadcrumbs */}
        <div className="intro-breadcrumbs">
          <Breadcrumbs separator="/" sx={{ color: "#FFD60A" }}>
            <Link underline="hover" color="inherit" href="#about">
              About Me
            </Link>
            <Link underline="hover" color="inherit" href="#projects">
              Projects
            </Link>
            <Link underline="hover" color="inherit" href="#contact">
              Contact
            </Link>
          </Breadcrumbs>
        </div>
      </div>
    </>
  );
}

export default Intro;
