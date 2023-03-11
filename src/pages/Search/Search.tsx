import React, { useRef, useState } from "react";

import { Container, Group, TextInput, Title } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useLocation, useSearchParams } from "react-router-dom";

const Search = () => {

    const [searchParams] = useSearchParams()
    const search = searchParams.get("search")
    return (
        <>
            <Container className="results" hidden={search == ''}>
                <Title order={2}>Search results for {search}</Title>
                <Title order={4}>Filter search</Title>
            </Container>
        </>
        
    )
};

export default Search;