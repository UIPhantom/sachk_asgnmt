import { Box, Button, CloseButton, Heading, Image } from "@chakra-ui/react";

const Tutorial: React.FC = () => {
    const property = {
        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }
    return ( 
        <div className="tutorialPanel">
            <Box className="promoPanel">
               <Box className="title">{property.title}</Box>
               <Button id="tut" >Tutorial</Button>
               <Image id="img" src="icons/11.svg"></Image>
               <CloseButton id="closebtn" size='sm'/> 
            </Box>
        </div>
     );
}
 
export default Tutorial;