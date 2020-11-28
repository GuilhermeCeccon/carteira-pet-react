import React, { useState, useLayoutEffect } from 'react'
import {
    Button,
    Grid,
    Paper,
}
    from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Firebase from '../../services/FirebaseConnect'

export default function ListaMensagem(props) {

    const [lista, setLista] = useState([])

    useLayoutEffect(() => {

        Firebase
            .database()
            .ref(`/email`)
            .on('value', snapchot => {
                // converter objetos em listas
                if (snapchot.val()) {
                    let dados = snapchot.val()
                    const keys = Object.keys(dados)
                    const lista = keys.map((key) => {
                        return { ...dados[key], id: key }
                    })
                    setLista(lista)
                } else{
                    setLista([])
                }
            })
    }, [])

    const excluir = (item) => {
        Firebase
            .database()
            .ref(`/email/${item.id}`)
            .remove()
    }

    return (
        <Grid style={{ marginBottom: 30 }}>
            <Grid item sm={11} xs={12}>
            <h1 style={{ textAlign: "center" }}>Mensagens</h1>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Nome</TableCell>
                                <TableCell>E-mail</TableCell>
                                <TableCell>Assunto</TableCell>
                                <TableCell>Mensagem</TableCell>
                                <TableCell>Opções</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {lista.map((item, key) => {
                                return <TableRow key={key}>
                                    <TableCell component="th" scope="row">
                                       {item.nome}
                                    </TableCell>
                                    <TableCell>{item.email}</TableCell>
                                    <TableCell>{item.assunto}</TableCell>
                                    <TableCell>{item.mensagem}</TableCell>
                                    <TableCell>
                                        <Button
                                            variant="contained"
                                            onClick={() => excluir(item)}
                                            color="primary"
                                            startIcon={<DeleteIcon />}>
                                            Excluir
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            }
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    )
}