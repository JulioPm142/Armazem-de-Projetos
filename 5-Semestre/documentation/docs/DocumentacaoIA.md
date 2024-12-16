<div align="center">
  <h1> :robot: Algoritmo UNet :robot: </h1> 
</div>

<br id="topo">
<p align="center">
    <a href="#sobre">Sobre o Algoritmo</a>  |  
    <a href="#entrada">Entrada e sáida do dados</a>
    <a href="#par"> Parâmetros </a>  |  
    <a href="#trata"> Tratamento </a>
</p>

<br>

<h2 id="sobre"> 📝 Sobre o Algoritmo </h2>

O algorítmo escolhido para fazer a análise de imagens foi o UNet. Esse é um algorítmo de rede neural convolucional, muito utilizado para realizar identificação e isolamento de características de imagens.

Esse algorítmo trabalha reduzindo o tamanho das imagens, fazendo as análises necessárias e então expande ela novamente.

Para um trabalho envolvendo análise de imagens, o UNet é particulamente útil, pois consegue de maneira efetiva identificar regiões com diferentes formas e texturas.

Ele atua criando mapas de segmentação que diferenciam as regiões com ou sem nuvens, e então, com a sua arqutetetura de encoder e decoder, é possível extrair recursos importantes da imagem, como texturas e padrões de iluminação que podem indicar nuvens (encoder), após isso, é feita a reconstrução da imagem preservando detalhes para que a segmentação gerada seja bastante precisa (decoder). Ele também aplica várias tecnicas como a "data augmentation" para lidar com as variáveis envolvidas no processo (clima, hora do dia, etc).

<br>

<h2 id="entrada"> 📑 Entrada e saída de dados </h2>

como são os dados de saida

<br>

<h2 id="par"> 🎛️ Parâmetros </h2>

parametros que estao sendo utilizados

<br>

<h2 id="trata"> ⌨️ O Tratamento </h2>

como ocorre o tratamento das imagens


