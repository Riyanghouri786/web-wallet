import { type FC } from "react";

import { Box } from "@chakra-ui/react";
import Link from "next/link";

const Footer: FC = () => {
  return (
    <Box as="footer" p="1rem" position="sticky" bottom={0} zIndex={10} textAlign="center">
      <Link
        href="https://github.com/Riyanghouri786/web-wallet"
        target="_blank"
        rel="noopener noreferrer"
      >
        Don&apos;t forget to leave a ⭐️ on this Riyanghouri786 if you like it!
      </Link>
    </Box>
  );
};

export default Footer;
