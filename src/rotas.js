const express = require("express");
const {
	cadastrarUsuario,
	editarUsuario,
	detalharUsuario,
} = require("./controladores/usuarios");
const {login} = require("./controladores/login");
const {categoria} = require("./controladores/categoria");
const verificaLogin = require("./intermediarios/verificaLogin");
const validarRequisicao = require("./intermediarios/validaRequisicao");
const usuarioSchema = require("./validacoes/usuario");
const loginSchema = require("./validacoes/login");
const { cadastrarCliente } = require("./controladores/clientes");
const clienteSchema = require("./validacoes/cliente");

const rotas = express();

rotas.get("/categoria", categoria);

rotas.post("/usuario", validarRequisicao(usuarioSchema), cadastrarUsuario);
rotas.post("/login", validarRequisicao(loginSchema), login);

rotas.use(verificaLogin);

rotas.put("/usuario", validarRequisicao(usuarioSchema), editarUsuario);
rotas.get("/usuario", detalharUsuario);

rotas.post("/produto");
rotas.put("/produto/:id");
rotas.get("/produto");
rotas.get("/produto/:id");
rotas.delete("produto/:id");

rotas.post("/cliente",validarRequisicao(clienteSchema), cadastrarCliente);
rotas.put("cliente/:id");
rotas.get("/cliente");
rotas.get("/cliente/:id");

module.exports = rotas;
