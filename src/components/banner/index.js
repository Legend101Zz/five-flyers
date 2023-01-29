import { Button, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerShopButton,
  BannerTitle,
} from "../../styles/banner";

export default function Banner() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <BannerContainer>
      <BannerImage src="/images/banner/banner.png" />
      <BannerContent>
        <Typography variant="h6">Huge Collection</Typography>
        <BannerTitle variant="h2">New Clothes</BannerTitle>

        <BannerDescription variant="subtitle">
          Welcome to our website, where we are proud to offer you clothing made
          from a unique and sustainable material: chicken feathers. By
          repurposing this waste product, we are not only reducing pollution but
          also promoting a more environmentally-friendly approach to fashion.
          Our clothing is not only stylish, but also ethically-made, using only
          the highest-quality feathers sourced from chicken farms. Our
          collection includes a range of garments for both men and women,
          including coats, jackets, and accessories. By choosing to purchase
          from us, you are not only making a fashion statement but also making a
          difference in the world. Your purchase supports our mission to reduce
          waste and promote sustainability in the fashion industry. Thank you
          for visiting our website and for supporting our cause. Together, we
          can make fashion more sustainable for the future
        </BannerDescription>

        <BannerShopButton color="primary">Shop Now</BannerShopButton>
      </BannerContent>
    </BannerContainer>
  );
}
