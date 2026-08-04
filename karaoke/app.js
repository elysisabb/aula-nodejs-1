import express from "express";

const app = express();

app.use(express.json());

app.get("/" ,(req,res)=>{
    res.status(201)
    res.json({
        ayyy: "aura"
    });

res.send()

});

export default app

// Middleware de erro — deve ser o último app.use()
app.use((err, req, res, next) => {
console.error('Erro no servidor:', err.message);
res.status(500).json({ erro: 'Erro interno do servidor' });
});