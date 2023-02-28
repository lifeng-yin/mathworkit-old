import React from "react";
import { Link } from "react-router-dom"

import { AppShell, Header, Navbar, createStyles, Group, Burger, Anchor, NavLink, Button } from "@mantine/core";

import { useAuth } from "../../contexts/Auth";
import { useDisclosure } from "@mantine/hooks";


const useStyles = createStyles((theme) => ({
    root: {
        position: 'relative',
        zIndex: 1
    },
    header: {
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md
    },
    navbar: {
        [theme.fn.largerThan('md')]: {
            display: 'none'
        }
    },
    inner: {
        height: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    links: {
        [theme.fn.smallerThan("sm")]: {
            display: "none"
        },
        '& a': {
            height: 64,
            paddingLeft: theme.spacing.lg,
            paddingRight: theme.spacing.lg,
            display: 'flex',
            alignItems: 'center',
            '&:hover': {
                textDecoration: 'none',
                backgroundColor: theme.colorScheme === 'light' ? theme.colors.gray[1] : theme.colors.gray[9]
            }
        }
    },
    burger: {
        [theme.fn.largerThan("sm")]: {
            display: "none"
        }   
    },
    buttons: {

    }
}))

interface ApplicationShellPropTypes {
    children: React.ReactNode
}

const ApplicationShell = ({ children } : ApplicationShellPropTypes) => {
    const { user } = useAuth();
    
    const { classes, cx } = useStyles();

    const [opened, { toggle }] = useDisclosure(false)

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
                    <div className={classes.inner}>
                        <Group className={classes.links} spacing={0}>
                            <Anchor component={Link} key="browse" to="/browse">Browse</Anchor>
                            <Anchor component={Link} key="create" to="/create">Create</Anchor>
                        </Group>
                        <Group className={classes.buttons} spacing={24}>
                            <Button component={Link} variant="outline" size="md" to="/login">Log In</Button>
                            <Button component={Link} variant="filled" size="md" to="/signup">Sign Up</Button>
                        </Group>
                    </div>
                </Header>
            }
            navbar={
                <Navbar
                    className={classes.navbar}
                    hidden={!opened}
                >
                    <NavLink component={Link} key="browse" to="/browse" label="Browse" />
                    <NavLink component={Link} key="create" to="/create" label="Create"/>
                </Navbar>
            }
        >
            {children}
        </AppShell>
        
    )
}

export default ApplicationShell;