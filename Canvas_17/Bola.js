class Bola{
    constructor(ctx){
        this.ctx = ctx 
        this.movendo = false // Variável para verificar se a bola está movendo ou não
        this.dirx = 0 // Direção da bola  no X
        this.diry = 0 // Direção da bola no Y
        this.vel = 3 // velocidade da bola
        this.largura = 20 // Largura da bola
        this.altura = 20 // Altura da bola
        this.X = (this.ctx.canvas.width / 2) - (this.largura / 2) // Esse é o X da bola, faz a bola comaçar no meio da tela em X
        this.Y = (this.ctx.canvas.height / 2) - (this.altura / 2) // Esse é o Y da bola, faz a bola comaçar no meio da tela em Y
    }

        iniciar() { // Função para iniciar a movimentar a bola
            this.movendo = true
            this.dirx = -1 // Vai sempre começar indo par a aesquerda
            this.diry = (Math.random() * 10 > 5 ? -1 : 1) // Vamos sortear um número de zero à dez, e se o valor for maior que 5 nós vamos iniciar o diry(direção da bola no Y) com -1, caso contrário(número menor que 5) vai iniciar com 1.

        }

        gerenciar() { // Serve para atualizar posição, e verificar qual tecla foi pressionada para tomar atitude de acordo com a posição em relação a essa tecla.
            if(this.movendo) { //Vai verificar se a bola está em movimento

                this.X+=(this.dirx*this.vel)
                this.Y+=(this.diry*this.vel)

                // verifica se a bola colidiu em cima, em baixo, na esquerda, na direita
                if(this.X >= this.ctx.canvas.width - this.largura) { //Direita
                    this.dirx = -1
                }
                if(this.X <= 0) { // Esquerda
                    this.dirx = 1
                }
                if(this.Y >= this.ctx.canvas.height - this.altura) { //Baixo
                    this.diry = -1
                }
                if(this.Y <= 0) { // Cima
                    this.diry = 1
                }
            }
        } 

        desenhar() { // Desenha a imagem
            this.gerenciar()// vai atualizar as variáveis de X e do Y
            this.ctx.fillStyle = "#000"
            this.ctx.fillRect(this.X,this.Y,this.largura,this.altura)
        }

}

// Quando eu instanciar o jogador eu vou precisar passar para ele o contexto(ctx) que é aonde ele vai trabalhar e o teclado(situação das teclas) para saber como ele vai se comportar