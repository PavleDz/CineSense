import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import LogoSection from "./LogoSection";
import NavigationSection from "./NavigationSection";
import ProfileSection from "./ProfileSection";

export default function Header() {
  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar>
          <LogoSection />
          <NavigationSection />
          <ProfileSection />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
