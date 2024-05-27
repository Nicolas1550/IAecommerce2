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
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { checkAuthentication } from "@/redux/features/user/userSlice";
import DropdownMenu from "./dropdownMenu/dropdownMenu";
import { toggleMenu } from "@/redux/features/ui/uiSlice";
import CartIcon from "../modalCart/cartIcon";
import { useAuthToken } from "@/app/hooks/useAuthToken";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector((state) => state.user.isAuthenticated);
  const isMenuOpen = useAppSelector((state) => state.ui.isMenuOpen);
  const isMobile = useMediaQuery("(max-width:600px)");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isClient, setIsClient] = useState(false);
  const open = Boolean(anchorEl);

  const { logout } = useAuthToken();

  useEffect(() => {
    dispatch(checkAuthentication());
  }, [dispatch]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogoutClick = () => {
    logout();
  };

  useEffect(() => {
    const handleResize = () => {
      if (!isMobile && isMenuOpen) {
        dispatch(toggleMenu());
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen && anchorEl && !anchorEl.contains(event.target as Node)) {
        dispatch(toggleMenu());
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch, isMenuOpen, isMobile, anchorEl]);

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
              onClick={() => dispatch(toggleMenu())}
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

          <AnimatePresence>
            {isMobile && (
              <DropdownMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
            )}
          </AnimatePresence>
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
          {isClient && <CartIcon />}

          {!isAuthenticated ? (
            <AuthButtonsContainer>
              <Link
                href="https://32cb-179-62-88-219.ngrok-free.app/auth/google"
                passHref
              >
                <SignInButton>Sign In</SignInButton>
              </Link>
              <Link
                href="https://32cb-179-62-88-219.ngrok-free.app/auth/google"
                passHref
              >
                <SignUpButton>Register</SignUpButton>
              </Link>
            </AuthButtonsContainer>
          ) : (
            <>
              <StyledIconButton onClick={handleMenu} color="inherit">
                <AccountCircle />
              </StyledIconButton>
              <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                <MenuItem onClick={handleLogoutClick}>Log Out</MenuItem>
              </Menu>
            </>
          )}
        </CustomToolbar>
      </CustomAppBar>
    </Nav>
  );
};

export default Navbar;
