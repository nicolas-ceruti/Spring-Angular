# Instruções para iniciar o projeto localmente:

- Faça o clone do projeto;
- Certifique-se de que o Angular esteja instalado globalmente em sua máquina, caso contrário, você deverá instalá-lo antes de prosseguir.
- Abra o diretório do projeto pelo terminal e execute o comando ```npm install```.
- Agora você já pode iniciar o projeto. execute o comando ```npm run start_proxy```. A aplicação será criada na porta 4200.
- A API para este projeto está disponível aqui:  [API SrinpHotel](https://github.com/nicolas-ceruti/SpringHotel)
- Um vídeo de demonstração do projeto está disponível [aqui]( https://youtu.be/etHSnaDZeR8) 
<br/>

## Proxy

Este projeto utiliza um proxy para evitar problemas de CORS (Cross-Origin Resource Sharing) durante as requisições à API. O arquivo de configuração do proxy pode ser encontrado em proxy.config.js na raiz do projeto. O conteúdo deste arquivo é o seguinte:

```
const PROXY_CONFIG = [{
    context: ['/api'],
    target: `http://localhost:8080/`,
    secure: false,
    logLevel: 'debug',
    pathRewrite: { '^/api': '' }
}]
module.exports = PROXY_CONFIG;
```

Certifique-se de que o servidor da API está em execução na porta especificada (neste exemplo, http://localhost:8080/). Caso contrário, ajuste o valor da propriedade target conforme necessário.
Também é importante lembrar que este proxy serve somente para desenvolvimento.


<br/>

## Requisitos funcionais:
- Armazenar de forma persiste o cadastro de hóspedes (Informações mínimas:
Nome, documento, telefone);
* Armazenar de forma persistente as reservas geradas;
* Deve ser possível localizar hóspedes por: nome, documento e telefone;
* Localizar hóspedes que ainda estão no hotel;
* Localizar hóspedes que tem reservas, mas ainda não realizaram o check-in.
* Permitir ao atendente realizar o check-in;
* Permitir ao atendente realizar o checkout;
<br/>

## Regras de negócio:
* Diárias de segunda à sexta-feira terão um valor fixo de R$ 120,00;
* Diárias em finais de semana terão um valor fixo de R$ 180,00;
* Caso o hóspede tenha carro e necessite utilizar as vagas disponíveis no
estabelecimento, será cobrado uma taxa adicional de R$ 15,00 de segunda à
sexta-feira e R$ 20,00 nos finais de semana;
* O horário para a realização do check-in será a partir das 14h00min. Ao tentar
realizar o procedimento antes do horário prévio, o sistema deverá emitir um
alerta
* O horário para a realização do checkout será até as 12h00min. Caso o
procedimento seja realizado posterior, deverá ser cobrada uma taxa adicional de
50% do valor da diária (Respeitando a variação para dias úteis e finais de
semana)
* Durante o processo de checkout, deverá ser exibido em detalhes o total geral da
reserva a ser paga;


## Features:
- Estrutura. Este é meu primeiro em Angular, portanto, compreendo que a estrutura não é a mais adequada. Em breve irei disponibilizar uma versão com a estrutura corrigida.
- Crição de um service para manipular os dados que são usados pelas tabelas da rota "/home";
- Responsividade. Atualmente considero que o projeto tenha um bom desempenho em telas com layout igual ou superior a 1400x660. As próximas versões devem incluir correções gradativas para esse "problema".
<br/>
