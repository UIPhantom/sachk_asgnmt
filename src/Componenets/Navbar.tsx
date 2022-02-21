import { Box, Heading } from "@chakra-ui/react";
import SectionGroup from "./SectionGroup";

const Navbar: React.FC = () => {
    return (
        <Box className="navbar">
            <div id="ellipse">N</div>
            <Heading id="name">Name</Heading>
            <svg id="slide-left" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.2588 12.2968H3.25879" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M22.2588 4.72113H13.2588" stroke="#808191" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path opacity="0.301406" d="M22.2588 19.8724H13.2588" stroke="#808191" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M7.25879 7.56201L2.25879 12.2968L7.25879 17.0316" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <SectionGroup/>
        </Box>
    );
}

export default Navbar;