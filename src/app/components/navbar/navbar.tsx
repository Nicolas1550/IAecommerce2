// Navbar.tsx
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useMediaQuery, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  CustomAppBar,
  CustomToolbar,
  Nav,
  StyledIconButton,
  StyledLink,
  Title,
} from "./navbarStyles";


const Navbar = () => {
  const [isClient, setIsClient] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);


  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <Nav
      className="page"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <CustomAppBar position="static">
        <CustomToolbar>
          {isMobile && (
            <StyledIconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              // Aquí usamos una función anónima para despachar la acción
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </StyledIconButton>
          )}
          <Link href="/" passHref>
            <Title variant="h6" noWrap>
              LogoTech
            </Title>
          </Link>

          {!isMobile && (
            <Box className="flex justify-center flex-grow">
              <Link href="/ecommerce" passHref>
                <StyledLink>Ecommerce</StyledLink>
              </Link>
              <Link href="/sales-analysis" passHref>
                <StyledLink>Sales Analysis</StyledLink>
              </Link>
              <Link href="/chatbot" passHref>
                <StyledLink>AI Chatbot</StyledLink>
              </Link>
            </Box>
          )}
        </CustomToolbar>
      </CustomAppBar>
    </Nav>
  );
};

export default Navbar;
