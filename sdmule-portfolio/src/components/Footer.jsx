import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
import { Container } from "@mui/material";

function Footer() {
  return (
    <footer className="site-footer">
      <Container maxWidth="lg">
        <div className="footer-inner">
          <a className="brand-mark" href="#home">
            SDMULE<span>.DEV</span>
          </a>
          <p>Designed &amp; built by Saurabh Mule</p>
          <span>© {new Date().getFullYear()} Saurabh Mule</span>
          <a className="back-to-top" href="#home" aria-label="Back to top">
            <ArrowUpwardRoundedIcon aria-hidden="true" />
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
