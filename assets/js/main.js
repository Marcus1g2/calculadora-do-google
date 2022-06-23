function criarCalculadora() { //1
  return {
    display: document.querySelector('.inputDisplay'), //1
      
    inicia() { //4
          this.cliqueBotoes()//2
          this.pressionaEnter()//8
          this.pressionarBackSpace()//9
        },

      pressionaEnter() { //8
            this.display.addEventListener('keyup', e => {
              if (e.keyCode === 13) {
                e.preventDefault()
                this.realizarConta();
                return
              }
            });
          },

      pressionarBackSpace(){ //9
        this.display.addEventListener('keydown', e=>{
          if(e.keyCode ===8){
            e.preventDefault()
            this.apagarUm()
            return
          }


        })
      },

      realizarConta() { //7
      let conta = this.display.value
      try {
        conta = eval(conta)
        if (!conta) {
          alert('Conta invalida')
          return
        }
        this.display.value = conta;
      }
      catch (e) {
        alert('Conta invalida')
        return

      }
    }, 
    
    clearDisplay() { //5
      this.display.value = ' '
    },

    apagarUm() { //6
      this.display.value = this.display.value.slice(0, -1)
    },
    
    cliqueBotoes() { //2
      document.addEventListener('click', e => {
        const pegar = e.target

        if (pegar.classList.contains('buttonNum')) { //2
          this.botaoDisplay(pegar.innerText) //permite digitar numeros
        }
        if (pegar.classList.contains('buttonClear')) { //5
          this.clearDisplay()
        }

        if (pegar.classList.contains('buttonDel')) { //6
          this.apagarUm()
        }

        if (pegar.classList.contains('buttonEq')) { //7
          this.realizarConta()
        }

        this.display.focus()
      })
    },

    botaoDisplay(valor) { //3
      this.display.value += valor
    }
  
  }


}

const calculadora =  criarCalculadora() //2
calculadora.inicia()