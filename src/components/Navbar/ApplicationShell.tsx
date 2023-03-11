import React from "react";
import { Link, useNavigate } from "react-router-dom"

import { AppShell, Header, Navbar, createStyles, Group, Burger, Anchor, NavLink, Button, UnstyledButton, Text, TextInput, Box, Flex } from "@mantine/core";
import { IconSearch, IconPencilPlus } from "@tabler/icons-react";

import { useAuth } from "../../contexts/Auth";
import { useDisclosure } from "@mantine/hooks";


const useStyles = createStyles((theme) => ({
    root: {
        position: 'relative',
        zIndex: 1
    },
    header: {
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
        display: "flex",
        alignItems: "center"
    },
    navbar: {
        [theme.fn.largerThan('md')]: {
            display: 'none'
        }
    },
    logo: {

    },
    inner: {
        height: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '10px',
        [theme.fn.smallerThan("lg")]: {
            display: "none"
        }
    },
    searchBar: {
        flex: 1,
        paddingLeft: theme.spacing.xl * 12,
        paddingRight: theme.spacing.xl
    },
    burger: {
        [theme.fn.largerThan("md")]: {
            display: "none"
        }   
    },
    createNoteLink: {
        
    },
    authButtons: {
        
    },
    profileDropdown: {

    }
}))

interface ApplicationShellPropTypes {
    children: React.ReactNode
}

const ApplicationShell = ({ children } : ApplicationShellPropTypes) => {
    const { user } = useAuth();

    const navigate = useNavigate()
    
    const { classes } = useStyles();

    const [opened, { toggle, close }] = useDisclosure(false)

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(e.target.search.value)
        navigate({
            pathname: 'search',
            search: '?search=' + e.target.search.value
        })
    }

    return (
        <AppShell
            className={classes.root}
            fixed
            navbarOffsetBreakpoint={"sm"}
            header={
                <Header className={classes.header} height={64}>
                        <Burger
                            className={classes.burger}
                            opened={opened}
                            onClick={toggle}
                        ></Burger>
                    
                    <div className={classes.logo}>
                        <Anchor component={Link} key="Home" to="/">
                            <Text sx={(theme) => ({
                                color: theme.primaryColor[5]
                            })}>Mathworkit</Text>
                        </Anchor> 
                    </div>

                    <div className={classes.inner}>
                        <form className={classes.searchBar} onSubmit={handleSubmit}>
                            <TextInput 
                                placeholder="eg. pythagorean theorem, factoring, trigonometry . . ."
                                icon={<IconSearch/>}
                                size="md"
                                id="search"
                            />
                        </form>

                        <UnstyledButton className={classes.createNoteLink} component={Link} key="create" to="/create" sx={{innerHeight: '100%'}}>
                            <Box sx={(theme) => ({
                                display: "flex",
                                gap: theme.spacing.md,
                                alignItems: "center",
                                height: '64px',
                                paddingLeft: theme.spacing.md,
                                paddingRight: theme.spacing.md,
                                '&:hover': {
                                    backgroundColor: theme.colors.gray[9]
                                }
                            })}>
                                <IconPencilPlus />
                                <Text>Create note</Text>
                            </Box>
                        </UnstyledButton>
                        
                        
                        { user 
                            ?   <Group className={classes.profileDropdown}>
                                    <Text>{user.id}</Text>
                                </Group>
                            :   <Group className={classes.authButtons} spacing={24}>
                                    <Button component={Link} variant="outline" size="md" to="/login">Log In</Button>
                                    <Button component={Link} variant="filled" size="md" to="/signup">Sign Up</Button>
                                </Group>
                        }

                    </div>
                </Header>
            }
            navbar={
                <Navbar
                    className={classes.navbar}
                    hidden={!opened}
                >
                    <NavLink component={Link} key="create" to="/create" label="Create" onClick={close}/>
                </Navbar>
            }
        >
            {children}
        </AppShell>
        
    )
}

export default ApplicationShell;