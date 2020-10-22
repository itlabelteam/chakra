import React from 'react'
import { Grid, Box } from "@chakra-ui/core";
import SideBar from '../organisms/SideBar';
import { Graph } from '../molecules/';

const Templates = () => {
  return (
    <Grid templateColumns="repeat(1, 1fr)" gap={6}>
      <SideBar />
      <Box w="100%" h="100vh" bg="">
        <Graph />
      </Box>
    </Grid>
  )
};

export default Templates;