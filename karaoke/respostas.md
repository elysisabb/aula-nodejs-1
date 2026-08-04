O que é o cabeçalho Content-Type e por que ele é relevante?
	O cabeçalho Content-Type é um identificador (.jpeg, .pdf etc) usado para informar ao cliente ou servidor HTTP qual é o tipo de mídia/arquivo de um recurso. Ajuda o navegador a priorizar os recursos e saber quando renderizá-los, melhorando a velocidade de carregamento da página. 

Quando usamos res.send() com uma string HTML, qual Content-Type o Express define? Teste e comprove usando o REST Client (observe os cabeçalhos da resposta).
	HTTP/1.1 201 Created
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 15
ETag: W/"f-Py88EesLb883VTAtX+QTzCdnI/E"
Date: Tue, 04 Aug 2026 18:24:59 GMT
Connection: close
{
  "ayyy": "aura"
}

Qual a diferença prática entre res.json() e res.send() em termos de Content-Type?
	A diferença prática é que res.json() define o cabeçalho Content-Type de forma fixa como application/json, enquanto res.send() define o Content-Type de forma dinâmica com base no tipo de dado que você envia.


status codes:

404: tá correto
200: tá correto
201: tá correto
400: tá correto
500: tá correto

import express from "express";
const app = express();
app.use(express.json());
app.get("/" ,(req,res)=>{
    res.status(404)
    res.json({
        ayyy: "aura"
    })
});
export default app

Tarefa prática: adicione um middleware de tratamento de erros genérico ao
final do app.js 
    Sem aspas no JSON, o navegador não interpreta corretamente. ex: aura is not defined;
res.json({
    ayyyy: aura
})