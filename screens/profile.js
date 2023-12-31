import { Heading, Center, Text, Box, HStack, Button, Modal, Flex } from "native-base";
import { Header } from "../components";''
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"
import { StatusBar } from "native-base";
import { useNavigation } from "@react-navigation/native";
import React,{ useState } from 'react';

const Profile = () => {
  const navigation = useNavigation();

  const [showModal, setShowModal] = useState(false);
  const handleLogOut = () => {
    setShowModal(true);
  };
  
  return ( 
    <>
    <Header title={"Profile"} />
      <SafeAreaView>
        <Box mb={50}>
         <StatusBar backgroundColor={"white"} barStyle={"dark-content"}></StatusBar>
          <HStack ml={10}>

          <Ionicons name="person-circle" size={90} color="grey"></Ionicons>
            <Box>
              <Heading alignItems="center" mt="8" marginTop={5} fontSize="20">Iqmal Rangga Hanz</Heading>
              <TouchableOpacity onPress={()=> navigation.navigate("DetailProfile")}>
                <Box backgroundColor="#82a9f4" height={7} width={120} borderRadius={10} mt={2}>
                  <Text color={"white"} fontSize={18} textAlign="center">Detail</Text>
                </Box>
              </TouchableOpacity>
            </Box>
          </HStack>

        <TouchableOpacity onPress={()=> navigation.navigate("AboutUs")}>
          <Box p={1} backgroundColor="#FFFFFF" height={16} width={300} borderRadius={12} alignSelf="center" mt={20}>
            <Ionicons size={33} color="#82a9f4" name="information-circle-outline">
              <Box>
                <Text color={"#82a9f4"} fontSize={25} fontWeight={"bold"} mt={2} ml={8}>About Us</Text>
              </Box>
            </Ionicons>
          </Box>
        </TouchableOpacity>

       <TouchableOpacity onPress={handleLogOut}>
           <Box p={1} backgroundColor="#FFFFFF" height={16} width={300} borderRadius={12} alignSelf="center" mt={5}>
             <Ionicons size={33} color="#82a9f4" name="log-out-outline">
                <Box>
                  <Text color={"#82a9f4"} fontSize={25} fontWeight={"bold"} mt={2} ml={8}>Logout</Text>
                </Box>
              </Ionicons>
          </Box>
        </TouchableOpacity>
        
      </Box>
      </SafeAreaView>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)} motionPreset="slide">
            <Modal.Content maxWidth="400" maxH="400">
                <Modal.CloseButton />
                <Center>
                    <Ionicons name="alert-circle-outline" size={"50"} color={"#82a9f4"}></Ionicons>
                      <Modal.Body>
                        <Text fontWeight={"bold"} fontSize={17}>Are you sure want to logout?</Text>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button.Group space={6}>
                            <Button backgroundColor="#82a9f4" borderColor="#FFFFFF" colorScheme="white" rounded="15" pl={5} pr={6} height={10}
                                onPress={() => setShowModal(false)}>
                                <Text mb={"center"} mt={-3}></Text>Yes
                            </Button>
                            <Button onPress={handleLogOut} 
                                fontWeight={"bold"}
                                borderColor={"black"}
                                pr={5}
                                pl={5}
                                rounded="15"
                                variant="outline" 
                                _pressed={{ bg: "gray.400" }}
                            >
                                No
                            </Button>
                        </Button.Group>
                    </Modal.Footer>
                </Center>
            </Modal.Content>
        </Modal>
    </>
  );
};


export default Profile;
