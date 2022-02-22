import { Tabs, TabList, Tab, TabPanels, TabPanel, Table, Thead, Th, Tr, Tbody, Td } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";


const AssetTab: React.FC = () => {
    const [data, setData] = useState("");

    const fetch = async () => {
        await axios.get("https://raw.githubusercontent.com/akshita151199/APIs/main/data").then(res => {
            setData(res.data.data[0]);
        });
    }

    useEffect(() => {
        fetch();
    }, []);


    console.log(data);
    return (
        <Tabs className="dataTable">
            <TabList>
                <Tab id="t1" color={'#ffffff'}>First Tab</Tab>
                <Tab color={'#808191'}>Second Tab</Tab>
            </TabList>

            <TabPanels w={'750px'}>
                <TabPanel w={'730px'} paddingLeft={'0.2'} paddingTop='25'>
                    <Table variant={'unstyled'}>
                        <Thead className="thead">
                            <Tr>
                                <Th>Asset</Th>
                                <Th>Amount</Th>
                                <Th>User Acount</Th>
                                <Th>Referral Earning</Th>
                            </Tr>
                        </Thead>
                        <Tbody className="tbody">
                            <Tr>
                                <Td>{ }</Td>
                                <Td>B</Td>
                                <Td>C</Td>
                                <Td>D</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TabPanel>
                <TabPanel bgColor={'green.300'} color='blue.600'>
                    <p>Lorem Ipsum!</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
}

export default AssetTab;