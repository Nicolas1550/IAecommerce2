// Navbar.tsx
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { useMediaQuery, Box, Menu, MenuItem, Badge } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import {
  AuthButtonsContainer,
  CustomAppBar,
  CustomToolbar,
  Nav,
  SignInButton,
  SignUpButton,
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

  // Maneja el cierre del menú si se hace clic fuera o se cambia el tamaño de la ventana

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

          <AuthButtonsContainer>
            <Link
              href="https://2f25-179-62-88-219.ngrok-free.app/auth/google"
              passHref
            >
              <SignInButton>Sign In</SignInButton>
            </Link>
            <Link
              href="https://2f25-179-62-88-219.ngrok-free.app/auth/google"
              passHref
            >
              <SignUpButton>Register</SignUpButton>
            </Link>
          </AuthButtonsContainer>

          <>
            <StyledIconButton onClick={handleMenu} color="inherit">
              <AccountCircle />
            </StyledIconButton>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}></Menu>
          </>
        </CustomToolbar>
      </CustomAppBar>
    </Nav>
  );
};

export default Navbar;
