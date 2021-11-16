class ControleRemoto {
  constructor(marca) {
    this.marca = marca;
    this.volume = 0;
  }

  aumentarVolume() {
    this.volume += 2;
  }
  diminuiVolume() {
    this.volume -= 2;
  }

  static desligarTodosControles() {
    console.log("Ok deligado");
  }
}

const controle1 = new ControleRemoto("LG");
controle1.aumentarVolume();

ControleRemoto.desligarTodosControles();
