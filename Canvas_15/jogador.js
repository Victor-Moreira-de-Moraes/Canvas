class Jogador{
    constructor(ctx, teclado){ // Constructor é a mesma coisa que eu criar jogador(){} só que dentro de uma class, constructor é uma classe instanciada automáticamente.

        // variáveis locais recebendo o valor dos parâmetros
        this.ctx = ctx 
        this.teclado = teclado
        this.X = 0
        this.Y = 0
        this.vel = 3
        this.nave = new Image()
        this.nave.src = "nave.jpg" 
        this.nave.addEventListener('load',()=>{
            this.desenhar()
        }) // Poderia trabalhar com nave.onload() também
    }

        gerenciar() { // Serve para atualizar posição, e verificar qual tecla foi pressionada para tomar atitude de acordo com a posição em relação a essa tecla.
            
            if(this.teclado.esquerda) {
                if(this.X > 0)
                this.X -= this.vel
            }
            if(this.teclado.direita) {
                if(this.X < this.ctx.canvas.width - this.nave.width)
                this.X += this.vel
            }
            if(this.teclado.cima) {
                if(this.Y > 0)
                this.Y -= this.vel
            }
            if(this.teclado.baixo) {
                if(this.Y < this.ctx.canvas.height - this.nave.height)
                this.Y += this.vel
            }
        } 

        desenhar() { // Desenha a imagem
            this.gerenciar()// vai atualizar as variáveis de X e do Y
            this.ctx.drawImage(this.nave,this.X,this.Y) // desenha a imagem de acordo com esses valores do X e do Y
        }

}

// Quando eu instanciar o jogador eu vou precisar passar para ele o contexto(ctx) que é aonde ele vai trabalhar e o teclado(situação das teclas) para saber como ele vai se comportar