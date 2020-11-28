import React, { useState } from 'react'
import {
    Button,
    Grid,
    TextField,
}
    from '@material-ui/core';
import Firebase from '../../services/FirebaseConnect'
import { v4 as uuidv4 } from 'uuid';

export default function ResgistroPet(props) {

    const [pet, setPet] = useState("")
    const [dataNasc, setDataNasc] = useState("")
    const [responsavel, setResponsavel] = useState("")

    const limpar = () => {
        setPet("")
        setDataNasc("")
        setResponsavel("")
    }

    const salvarRegistro = () => {
        let objeto = {
            pet: pet,
            dataNasc: dataNasc,
            responsavel: responsavel
        }

        let code = uuidv4()

        Firebase
            .database()
            .ref(`pet/${code}`)
            .set(objeto)
            .then(() => {
                limpar()
                console.log("Salvo")
            })
            .catch(() => {
                console.log("Erro")
            })
    }

    return (
        <Grid style={{ marginBottom: 30 }}>
            <Grid item sm={10} xs={12}>
            <h1 style={{ textAlign: "center" }}>Cadastro Pet</h1>
                <TextField
                    label="Nome do Pet"
                    variant="outlined"
                    size="small"
                    type="email"
                    value={pet}
                    onChange={(e) => setPet(e.target.value)}
                    style={{ width: "100%", marginBottom: 10 }} />
                <TextField
                    label="Data Nascimento"
                    variant="outlined"
                    size="small"
                    type="email"
                    value={dataNasc}
                    onChange={(e) => setDataNasc(e.target.value)}
                    style={{ width: "100%", marginBottom: 10 }} />
                <TextField
                    label="Responsavel"
                    variant="outlined"
                    size="small"
                    type="email"
                    value={responsavel}
                    onChange={(e) => setResponsavel(e.target.value)}
                    style={{ width: "100%", marginBottom: 10 }} />
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={salvarRegistro}
                    style={{ float: "right" }}>
                    Enviar Dados
                </Button>
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => props.setScreen(1)}
                    style={{ float: "right" }}>
                    Cancelar
                </Button>
            </Grid>
        </Grid >

    )
}