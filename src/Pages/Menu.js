import React, { useState } from 'react'

import {
    Button,
    Grid,
    Paper,
    MenuList,
    MenuItem,
}
    from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useHistory } from "react-router-dom";
import Firebase from '../services/FirebaseConnect'
import RegistroPet from './screen/RegistroPets'
import ListaPet from './screen/ListaPet'
import Mensagem from './screen/Mensagem'


export default function Menu() {
    let history = useHistory();

    const [screen, setScreen] = useState(0)

    const logoff = () => {
        sessionStorage.removeItem("uuid")
        Firebase
            .auth()
            .signOut()
            .then(() => {
                history.push("/");
            }).catch(() => {
                history.push("/");
            })
    }

    return (
        <div>
            <Grid container spacing={1}>
                <Grid item sm={10} xs={12}>

                </Grid>
                <Grid item sm={2} xs={12}>
                    <Button
                        onClick={logoff}
                        variant="contained"
                        color="primary"
                        startIcon={<ExitToAppIcon />}>
                        Logoff
                    </Button>
                </Grid>
                <Grid item sm={2} xs={12}>
                    <Grid item sm={12} xs={12}>
                        <Paper>
                            <MenuList>
                                <MenuItem onClick={() => setScreen(0)}>PETS</MenuItem>
                                <MenuItem onClick={() => setScreen(1)}>Registro de Pets</MenuItem>
                                <MenuItem onClick={() => setScreen(2)}>Mensagens</MenuItem>
                            </MenuList>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid item sm={10} xs={12}>
                    <Paper>
                        {screen === 0 &&
                            <ListaPet setScreen={setScreen} />
                        }
                        {screen === 1 &&
                             <RegistroPet setScreen={setScreen} />
                        }
                        {screen === 2 &&
                            <Mensagem setScreen={setScreen} />
                        }

                    </Paper>
                </Grid>

            </Grid>
        </div>
    )
}