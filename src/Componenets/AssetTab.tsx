import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Box,
  Link,
  Center,
  Grid,
  Flex,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

interface Assets {
  img: string;
  amount: number;
  user: string;
  referral_earnings: string;
  asset: string;
  state: string;
  type: string;
  chain: {
    img: string;
    name: string;
  };
}

const AssetTab: React.FC = () => {
  const [data, setData] = useState([]);

  const fetch = async () => {
    await axios
      .get("https://raw.githubusercontent.com/akshita151199/APIs/main/data")
      .then((res) => {
        setData(res.data.data);
      });
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <Flex>
      <Tabs className="dataTable">
        <TabList>
          <Tab id="t1" color={"#ffffff"}>
            First Tab
          </Tab>
          <Tab color={"#808191"}>Second Tab</Tab>
        </TabList>

        <TabPanels w={"750px"}>
          <TabPanel w={"730px"} paddingLeft={"0.2"} paddingTop="25">
            <Grid className="thead" templateColumns="repeat(4, 1fr)" gap={1}>
              <Center w="80%" h="10">
                Asset
              </Center>
              <Center w="80%" h="10" ml={'-3'}>
                Amount
              </Center>
              <Center w="80%" h="10" ml={'-4'}>
                User Account
              </Center>
              <Center w="80%" h="10">
                Referral Earnings
              </Center>
            </Grid>
            
            <Box className="tbody" justifyContent={"space-evenly"} mt={'5px'}>
              {data.slice(0, 1).map((element: Assets) => {
                return (
                  <Grid templateColumns={"repeat(4, 1fr)"} gap={1}>
                    <Center>
                      <div className="btc">
                        <img src={element.img} />
                      </div>
                      <div className="ass">{element.asset}</div>
                      <div className="put">{element.type}</div>
                      <div className="icon">
                        <img id="chainImg" src={element.chain.img} alt="" />
                        <div className="avax">{element.chain.name}</div>
                      </div>
                    </Center>
                    <Center>
                      <Box className="amount">{element.amount} BNB</Box>
                      <Box className="state">{element.state}</Box>
                    </Center>
                    <Center whiteSpace={"nowrap"} display={"inline-block"} overflow={"hidden"} textOverflow={'ellipsis'} className="user" as="span" h={'8'} w='40'>
                        {element.user}
                    </Center>
                    <Center>
                      <div className="earning">
                      {element.referral_earnings} BNB
                      </div>
                      <div className="extlink">
                        View On{" "}
                        <Link>
                          BSC Scan <ExternalLinkIcon mx={"2px"} />
                        </Link>
                      </div>
                    </Center>
                  </Grid>
                );
              })}
            </Box>
          </TabPanel>
          <TabPanel bgColor={"green.300"} color="blue.600" marginTop={'6'} borderRadius='8px'>
            <p>Lorem Ipsum is simply dummy text!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};

export default AssetTab;
