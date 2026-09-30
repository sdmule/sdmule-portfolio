import { useState } from "react";
import {
  AppBar,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";
import ArrowDownwardRoundedIcon from "@mui/icons-material/ArrowDownwardRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { navigationItems, resumeFile, socialLinks } from "../data/portfolio.js";

const linkedInUrl = socialLinks.find(({ label }) => label === "LinkedIn")?.href;

function HeaderNavigation({ activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <AppBar className="top-navigation" position="sticky" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar disableGutters className="top-navigation-toolbar">
          <a className="brand-mark" href="#home" aria-label="SDMULE.DEV home">
            SDMULE<span>.DEV</span>
          </a>
          <nav className="top-navigation-links" aria-label="Main navigation">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                className={
                  activeSection === item.href.slice(1)
                    ? "top-navigation-link is-active"
                    : "top-navigation-link"
                }
                href={item.href}
                aria-current={
                  activeSection === item.href.slice(1) ? "location" : undefined
                }
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="top-navigation-actions">
            {linkedInUrl && (
              <IconButton
                className="linkedin-link"
                component="a"
                href={linkedInUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile (opens in a new tab)"
              >
                <LinkedInIcon aria-hidden="true" />
              </IconButton>
            )}
            <Button
              className="header-resume-button"
              component="a"
              href={resumeFile}
              download
              variant="contained"
              endIcon={<ArrowDownwardRoundedIcon />}
            >
              Resume
            </Button>
            <IconButton
              className="mobile-navigation-toggle"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <CloseRoundedIcon /> : <MenuRoundedIcon />}
            </IconButton>
          </div>
        </Toolbar>
      </Container>
      <Drawer
        anchor="top"
        open={menuOpen}
        onClose={closeMenu}
        PaperProps={{
          id: "mobile-navigation",
          className: "top-navigation-drawer",
        }}
      >
        <List component="nav" aria-label="Mobile navigation">
          {navigationItems.map((item) => (
            <ListItemButton
              component="a"
              href={item.href}
              key={item.href}
              selected={activeSection === item.href.slice(1)}
              onClick={closeMenu}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          ))}
          <ListItemButton
            component="a"
            href={resumeFile}
            download
            onClick={closeMenu}
          >
            <ListItemText primary="Download resume" />
          </ListItemButton>
          {linkedInUrl && (
            <ListItemButton
              component="a"
              href={linkedInUrl}
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
            >
              <ListItemText primary="LinkedIn profile" />
            </ListItemButton>
          )}
        </List>
      </Drawer>
    </AppBar>
  );
}

export default HeaderNavigation;
