import e from "express";

const porta = 3000;
const host ="0.0.0.0";//acessando a todas as interfaces de rede no host

const app =  e(); // crie o servidor HTTP

app.use(e.urlencoded({e:true}));

app.get("/", (requisicao,resposta) =>{
    resposta.send(`
        <!doctype html>
            <html lang="pt-BR">
            <head>
                <meta charset="utf-8">
                <title></title>
            </head>
            <body>
                <h1>Olá seja bem vindo! </h1>            
            </body>
            </html>
        `)

})

app.get("/verificar", (requisicao,resposta) => {
    const idade =  Number (requisicao.query.idade);
    const sexo = requisicao.query.sexo;
    const salBase = Number (requisicao.query.salBase);
    const anoContrato = Number(requisicao.query.anoContrato);
    const matricula = Number (requisicao.query.matricula); //para pegar as informaçoes da url
    const anoAtual = 2026;
    const tempoEmpresa = anoAtual - anoContrato;
    let somaSalario=0;

        if(idade >= 18 && idade <=39 && sexo==='M'){
            if(tempoEmpresa <=10){
                somaSalario = salBase +((salBase*0.1)-10);
            }
        else{
            if(tempoEmpresa >10){
                somaSalario = salBase +((salBase*0.1)+17);
            }   
        }
    }
        else if(idade >= 40 && idade <= 69 && sexo==='M'){
            if(tempoEmpresa <=10)
                somaSalario = salBase +((salBase*0.08)-5);
            else
                if(tempoEmpresa > 10)
                    somaSalario = salBase +((salBase*0.08)+15);        
        }
        else if(idade >= 70 && idade <= 99 && sexo==='M'){
            if(tempoEmpresa <=10)
                somaSalario = salBase +((salBase*0.15)-15);
            else
                if(tempoEmpresa > 10)
                    somaSalario = salBase +((salBase*0.15)+13); 
        }
        else if(idade >= 18 && idade <= 39 && sexo==='F'){
            if(tempoEmpresa <=10)
                somaSalario = salBase +((salBase*0.08)-11);
            else
                if(tempoEmpresa>=10)
                    somaSalario = salBase +((salBase*0.08)+16); 
        }
        else if(idade >= 40 && idade <= 69 && sexo==='F'){
            if(tempoEmpresa <=10)
                somaSalario = salBase +((salBase*0.1)-7);
            else
                if(tempoEmpresa>=10)
                    somaSalario = salBase +((salBase*0.1)+14); 
        }
        else if(idade >= 70 && idade <= 99 && sexo==='F'){
            if(tempoEmpresa <=10)
                somaSalario = salBase +((salBase*0.17)-17);
            else
                if(tempoEmpresa>=10)
                    somaSalario = salBase +((salBase*0.17)+12); 
        }
    resposta.write(`
        <!doctype html>
        <html lang="pt-BR">
        <head>
            <meta charset="utf-8">
            <title>Resultado</title>
        </head>
        <body>
             <h2>Resultado</h2>
        <p>Idade: ${idade}</p>
        <p>Sexo: ${sexo}</p>
        <p>Salário Base: ${salBase}</p>
        <p>Matrícula: ${matricula}</p>
        <p>Tempo Empresa: ${tempoEmpresa}</p>
        <h1>Novo Salário: ${somaSalario.toFixed(2)}</h1>
        </body>
        </html>

        
        
        `)
        resposta.end();
})


app.listen(porta,host, () =>{
    console.log(`Servido execultando em http://${host}:${porta}`);
})