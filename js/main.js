var volume_destination = document.getElementById("volume-destination");

document.getElementById("volume").addEventListener("change", function() {
  volume_destination.innerText = this.value;
});

function validateForm() {
  var isvalid = document.getElementById("login-form").checkValidity();

  if (isvalid) {
    var nome = document.getElementById("nome");
    var email = document.getElementById("email");
    var cpf = document.getElementById("cpf");
    var data = document.getElementById("data");
    var volume = document.getElementById("volume");

    alert(
      "Nome: " +
        nome.value +
        "\n" +
        "E-mail: " +
        email.value +
        "\n" +
        "CPF: " +
        cpf.value +
        "\n" +
        "Data: " +
        data.value +
        "\n" +
        "Volumes: " +
        volume.value +
        "\n"
    );
  }
}
document.getElementById("save-btn").addEventListener("click", validateForm);
