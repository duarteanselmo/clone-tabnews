function status(request, response) {
  response.status(200).json({ chave: "essa é uma mensagem de status" });
}

export default status;
