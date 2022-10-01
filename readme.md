

## 💻 Sobre o projeto

  

Projeto de uma api que possibilida anunciantes criarem uma campanha publicitária.

  

Criado durante o infleux coding challenge.

## Como iniciar o projeto
#### Nesse projeto eu usei o mongo atlas para conectar ao banco de dados, você deve criar uma váriavel de ambiente .env na raiz do projeto aonde irá colocar a string que o próprio mongo atlas irá lhe fornecer, assim você terá um servidor gratuito rodando na cloud. Apenas crie o seu banco de dados e depois conecte a sua aplicação como mostrado abaixo.
<img  alt="mensagem api running"  src="https://s4.gifyu.com/images/api-infleux94a81790947f475d.gif"  width="1080px">

#### Após a conexão com o banco de dados basta rodar o comando npm start e você irá ver um log no terminal informando a porta e o status da conexão com o banco de dados.
<img  alt="mensagem api running"  src="https://i.ibb.co/qmWg4rD/imagem-2022-10-01-180739744.png"  width="1080px">

  

## 🧪 Testando a nossa API com o Insomnia

  

#### Utilizando o [Insomnia](https://insomnia.rest/) na rota inicial da nossa aplicação e recebendo uma mensagem nos informando que a API está rodando.

<p  align="center"  style="display: flex; align-items: flex-start; justify-content: center;">

<img  alt="mensagem api running"  src="https://uploaddeimagens.com.br/images/004/045/625/original/imagem_2022-10-01_173516979.png?1664656518"  width="1080px">

</p>

---------------------------------------------------------------------------------------------------------------------------------<br><br>

  

#### Cadastrando uma campanha na nossa API seguindo a seguinte estrutura:
#### method: POST, route: /fetch 
````
{
	"name": "Nome da campanha",
	"advertiser": "Nome do anunciante",
	"bid": 55.5,
	"conversionType": "cpm", (string literal ("cpm" | "cpc" | "cpi")
	"target": "Brazil" (string)
}

````

<p  align="center"  style="display: flex; align-items: flex-start; justify-content: center;">

<img  alt="cadastrando campanha"  src="https://uploaddeimagens.com.br/images/004/045/631/full/imagem_2022-10-01_174029178.png?1664656830"  width="1080px">

</p>

---------------------------------------------------------------------------------------------------------------------------------<br><br>

  

#### Recebendo uma lista com todas as campanhas
#### method: GET, route: /fetch

<p  align="center"  style="display: flex; align-items: flex-start; justify-content: center;">

<img  alt="recebendo dados atraves do get"  src="https://uploaddeimagens.com.br/images/004/045/628/full/imagem_2022-10-01_173934195.png?1664656775"  width="1080px">

</p>

---------------------------------------------------------------------------------------------------------------------------------<br><br>

  

#### Editando campanha
#### method: PATCH, route: /fetch/:id

<p  align="center"  style="display: flex; align-items: flex-start; justify-content: center;">

<img  alt="editando campanha pelo id"  src="https://uploaddeimagens.com.br/images/004/045/634/full/imagem_2022-10-01_174543356.png?1664657144"  width="1080px">

</p>

#### Deletando usuários
#### method: DELETE, route: /fetch/:id

<p  align="center"  style="display: flex; align-items: flex-start; justify-content: center;">

<img  alt="buscando usuarios pelo id"  src="https://uploaddeimagens.com.br/images/004/045/636/full/imagem_2022-10-01_174750304.png?1664657271"  width="1080px">

</p>

  

## 🛠 Tecnologias

  ![NodeJS](https://img.shields.io/badge/NodeJS-16.13.2-green) ![npm](https://img.shields.io/badge/npm-8.1.2-purple) ![mongo](https://img.shields.io/badge/MongoDB-5.0.6-orange)

As seguintes ferramentas foram usadas na construção do projeto:

  

####  [NodeJS](https://nodejs.org/), [Express](https://expressjs.com), [MongoDB](https://www.mongodb.com/)

  

> Veja o arquivo [package.json](https://github.com/arielmell0/Infleux-coding-challenge/blob/ad-server/package.json)

  

## 🦸 Autor

<img  style="border-radius: 50%;"  src="https://media-exp1.licdn.com/dms/image/C4E03AQE8vZ3YZG56Jw/profile-displayphoto-shrink_800_800/0/1654872971971?e=1669852800&v=beta&t=B0ClFVkTDX4Rvvxgj6_eDV4Z9MAuCgpx1jMAVxOAoc8"  width="100px;"  alt=""/>

#### Ariel Oliveira de Mello

  

[![Twitter Badge](https://img.shields.io/twitter/follow/Hellodarknes0?style=for-the-badge)](https://twitter.com/Hellodarknes0)

  

## 📝 Licença

 
![mit license](https://img.shields.io/apm/l/vim-mode?style=for-the-badge)
Este projeto esta sobe a licença [MIT](./LICENSE) 